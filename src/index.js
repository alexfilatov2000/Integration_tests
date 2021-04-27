const {firstQuery, secondQuery} = require('../src/queries');
const { writeCsv1, writeCsv2 } = require('../src/utils/writeCsv');

const fillCSV = async () => {
    const rows1 = await firstQuery();
    await writeCsv1(rows1, 'ExpectedResult1.csv');

    const rows2 = await secondQuery();
    await writeCsv2(rows2, 'ExpectedResult2.csv');
}

fillCSV()
