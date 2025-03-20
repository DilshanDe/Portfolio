const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://dilshansilva.me' });

streamToPromise(
  sitemap
    .pipe(fs.createWriteStream('../public/sitemap.xml'))
    .on('error', (err) => {
      console.error('Error writing sitemap:', err);
    })
)
  .then(() => {
    console.log('Sitemap successfully generated!');
  })
  .catch((err) => {
    console.error('Error during sitemap generation:', err);
  });

sitemap.write({ url: '/', changefreq: 'monthly', priority: 0.8 });
sitemap.end();
