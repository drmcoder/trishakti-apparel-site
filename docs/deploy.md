# Deploy guide — Trishakti Apparel site

The site is a **static export** (`out/`). Any static host works. Target: cPanel
(`trishaktiapparel.com.np`, addon under cPanel user `trishakt`).

## ✅ Live preview (up now)
**https://trishaktiapparel.com.np/claude/** — full site, built with `NEXT_BASE_PATH=/claude`,
uploaded to the `claude` FTP account's folder. Marked `noindex` (won't be crawled).

This is a **preview only** — it does not touch the live Laravel site.

---

## Going live on the MAIN domain (replace the Laravel site)

The `claude@…` FTP account is **jailed** to `…/trishaktiapparel.com.np/claude`, so it
**cannot** reach the real docroot. To deploy to the root domain, do ONE of:

### Option A — un-jail the FTP account (recommended)
1. cPanel → **FTP Accounts** → delete the `claude@trishaktiapparel.com.np` account.
2. Recreate it with **Directory** set to exactly `trishaktiapparel.com.np`
   (i.e. `/home/trishakt/trishaktiapparel.com.np`) — NOT the `/claude` subfolder.
3. Verify: listing the root should show the Laravel folders (`app/`, `public/`, `vendor/`…).
4. **Back up first**: download the current live site (into git-ignored `live-backup/`)
   before overwriting — so a rollback is one upload away.
5. Rebuild for root (no base path) and upload:
   ```bash
   NEXT_BASE_PATH= NEXT_PUBLIC_BASE_PATH= npm run build
   ./scripts/ftp-deploy.sh            # uploads out/ to the account root
   ```
6. Decide how the domain serves it: point the addon docroot at this folder, or clear
   the old Laravel files. (Confirm the real docroot — addon domains sometimes serve
   from `.../trishaktiapparel.com.np` and sometimes a `public/` subfolder.)

### Option B — cPanel File Manager (no automation)
`npm run build`, zip `out/`, upload the zip in File Manager, Extract into the docroot.

---

## Auto-deploy on git push (GitHub Actions)
Workflow: `.github/workflows/deploy.yml`. On push to `main`/`master` it builds and
FTP-syncs `out/` to the server.

**Setup:**
1. Create a GitHub repo and push this project. (`credentials.local.md` is git-ignored —
   it will NOT be pushed. Good.)
2. Repo → **Settings → Secrets and variables → Actions** → add secrets:
   - `FTP_SERVER` = `trishaktiapparel.com.np`
   - `FTP_USERNAME` = the FTP user
   - `FTP_PASSWORD` = the FTP password
   - `FTP_SERVER_DIR` = `./` (un-jailed root) — or `./` with the jailed account to keep
     hitting `/claude`
   - *(optional)* `NEXT_PUBLIC_FORM_ENDPOINT` = Web3Forms/Formspree endpoint
3. *(optional, for a subfolder deploy)* repo **Variables** → `NEXT_BASE_PATH` = `/claude`.
4. Push → the Action builds and deploys. Watch it under the repo's **Actions** tab.

> The FTP action mirrors `out/` to the server (removes stale files). Point
> `FTP_SERVER_DIR` carefully and keep a backup.

---

## Security TODO (from credentials.local.md)
- After the project, **delete** the `claude` FTP account in cPanel.
- The FTP account password and the reused server password should be rotated.
- Never commit `credentials.local.md` (already git-ignored).
