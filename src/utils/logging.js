const fs = require('fs').promises;

module.exports.log = async (arr1, arr2, onlyInA, onlyInB) => {
    const all = onlyInA.concat(onlyInB);

    const onlyInAIds = onlyInA.map(i => +i.id);
    let onlyInBIds = onlyInB.map(i => +i.id);

    let cnt = 0;
    onlyInBIds = onlyInBIds.filter(i => {
        if (onlyInAIds.includes(i)){
            cnt++;
            return false;
        } else {
            return true;
        }
    });

    const file = await fs.readFile('./log.txt');
    await fs.writeFile('./log.txt',
        `${file.toString()}\nFailed: ${all.length - cnt}; Success: ${arr2.length - all.length}; You should to delete: ${onlyInBIds.map(i => 'id: '+i)}; You should to rewrite: ${onlyInA.map(i => 'id: '+i.id)}`);
}