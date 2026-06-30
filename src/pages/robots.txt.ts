import type { APIRoute } from 'astro';

const site = 'https://602casa.com';

export const GET: APIRoute = () => {
  const robots = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${site}/sitemap-index.xml`,
  ].join('\n');

  return new Response(robots, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
