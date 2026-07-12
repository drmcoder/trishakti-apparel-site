#!/usr/bin/env bash
# Manual FTP deploy of the static export (out/) using curl.
# Reads credentials from env, or falls back to credentials.local.md (git-ignored).
#
# Usage:
#   ./scripts/ftp-deploy.sh [remote-subdir]
# Examples:
#   ./scripts/ftp-deploy.sh            # upload out/ to the FTP account root
#   ./scripts/ftp-deploy.sh claude     # upload into a 'claude' subfolder
#
# Env overrides: FTP_HOST, FTP_USER, FTP_PW
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CRED="$ROOT/credentials.local.md"
REMOTE_SUBDIR="${1:-}"

# --- load creds from credentials.local.md if not in env ---
if [[ -z "${FTP_HOST:-}" && -f "$CRED" ]]; then
  FTP_HOST="$(grep -iE '^\- *Host:' "$CRED" | head -1 | sed -E 's/.*Host:\s*//; s/ .*//')"
  FTP_USER="$(grep -iE '^\- *Username:' "$CRED" | head -1 | sed -E 's/.*Username:\s*//')"
  FTP_PW="$(grep -iE '^\- *Password:' "$CRED" | head -1 | sed -E 's/.*Password:\s*//')"
fi
: "${FTP_HOST:?set FTP_HOST or fill credentials.local.md}"
: "${FTP_USER:?set FTP_USER}"
: "${FTP_PW:?set FTP_PW}"

[[ -d "$ROOT/out" ]] || { echo "out/ not found — run: npm run build"; exit 1; }

echo "Deploying out/ → ftp://$FTP_HOST/${REMOTE_SUBDIR:+$REMOTE_SUBDIR/}"
ok=0; fail=0
cd "$ROOT/out"
while IFS= read -r f; do
  rel="${f#./}"
  dest="ftp://$FTP_HOST/${REMOTE_SUBDIR:+$REMOTE_SUBDIR/}$rel"
  code=$(curl -s --connect-timeout 30 --ftp-create-dirs -T "$f" -u "$FTP_USER:$FTP_PW" "$dest" -w "%{http_code}" -o /dev/null || echo 000)
  case "$code" in
    226|213|250) ok=$((ok+1)) ;;
    *) fail=$((fail+1)); echo "  FAIL($code) $rel" ;;
  esac
done < <(find . -type f)
echo "Done: $ok uploaded, $fail failed."
