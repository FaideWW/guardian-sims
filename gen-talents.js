const fs = require('fs');
const [,,outFile] = process.argv;
if (!outFile) {
  console.log('No outFile supplied');
  process.exit(1);
}

const talentCombos = [];

const t1Names = ['Brambles', 'BFrenzy', 'BFur'];
const t5Names = ['SotF', 'GG', 'Incarn'];
const t7Names = ['RnT', 'LB', 'Pulv'];

for (let t1 = 0; t1 < 3; t1 += 1) {
  for (let t5 = 0; t5 < 3; t5 += 1) {
    for (let t7 = 0; t7 < 3; t7 += 1) {
      const comboName = `${t1Names[t1]}/${t5Names[t5]}/${t7Names[t7]}`;
      const comboString = `${t1+1}121${t5+1}1${t7+1}`;
      talentCombos.push(`profileset."${comboName}"=talents=${comboString}`);
    }
  }
}

fs.writeFileSync(outFile, talentCombos.join('\n'));

console.log('--Done--');
