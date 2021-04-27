const {comparer1, compare2} = require('../src/utils/compare');
const csv = require('csvtojson');
const { writeCsv1, writeCsv2 } = require('../src/utils/writeCsv');
const {firstQuery, secondQuery} = require('../src/queries');

describe('Testing', () => {
    it('First Test ',async done => {
        const rows = await firstQuery();
        const jsonArray = await csv().fromFile('./ExpectedResult1.csv');
        await writeCsv1(comparer1(jsonArray, rows), './Diff1.csv');

        expect(comparer1(jsonArray, rows)).toEqual([]);
        done()
    })

    it('Second Test ',async done => {
        const rows = await secondQuery();
        const jsonArray = await csv().fromFile('./ExpectedResult2.csv');

        await writeCsv2(compare2(jsonArray, rows), './Diff2.csv');
        expect(compare2(jsonArray, rows)).toEqual([]);
        done();
    })
})
