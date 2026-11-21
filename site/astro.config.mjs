// Stage 4 portfolio: static Astro site. Built and previewed locally from site/.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rajkumardhasan.github.io',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'auto' },
});
