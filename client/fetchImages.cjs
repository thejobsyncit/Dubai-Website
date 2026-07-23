const https = require('https');
function fetchImages(query, limit) {
  return new Promise((resolve) => {
    https.get('https://unsplash.com/s/photos/' + query, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^\"\\]+w=800/g;
        const matches = [];
        let match;
        while ((match = regex.exec(data)) !== null) {
          matches.push(match[0].replace(/&amp;/g, '&'));
        }
        resolve([...new Set(matches)].slice(0, limit));
      });
    });
  });
}
async function run() {
  const q1 = await fetchImages('dubai-business', 5);
  const q2 = await fetchImages('software-development', 5);
  const q3 = await fetchImages('cyber-security', 3);
  console.log(JSON.stringify([...new Set([...q1, ...q2, ...q3])], null, 2));
}
run();
