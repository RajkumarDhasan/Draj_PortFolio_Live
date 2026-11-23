// Stage 4 portfolio: static Astro site. Built and previewed locally from site/.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rajkumardhasan.github.io',
  base: process.env.GITHUB_PAGES === 'true' ? '/Draj_PortFolio_Live/' : '/',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'auto' },
});
