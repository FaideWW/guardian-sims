const fs = require('fs');
const [,, outFile, ...files] = process.argv;

const bigFile = files.reduce((combiner, filepath) => {
  const data = fs.readFileSync(filepath);
  return `
${combiner}
${data}
  `;
}, '');

fs.writeFileSync(outFile, bigFile);
