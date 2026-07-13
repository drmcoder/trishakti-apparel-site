import { seo } from '@/lib/content';

// AI / answer-engine crawlers we explicitly welcome, so assistants like ChatGPT,
// Claude, Perplexity, Gemini and Apple Intelligence can read and cite the site.
const aiBots = [
  'GPTBot',            // OpenAI (ChatGPT)
  'OAI-SearchBot',     // ChatGPT search
  'ChatGPT-User',      // ChatGPT browsing on user request
  'ClaudeBot',         // Anthropic (Claude)
  'anthropic-ai',
  'Claude-Web',
  'PerplexityBot',     // Perplexity
  'Perplexity-User',
  'Google-Extended',   // Google Gemini / AI Overviews
  'Applebot-Extended', // Apple Intelligence
  'CCBot',             // Common Crawl (feeds many models)
  'Amazonbot',
  'Bytespider',
  'Meta-ExternalAgent',
  'cohere-ai',
  'YouBot',
  'DuckAssistBot',
];

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiBots.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${seo.url}/sitemap.xml`,
    host: seo.url,
  };
}
