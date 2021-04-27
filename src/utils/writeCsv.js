const createCsvWriter = require('csv-writer').createObjectCsvWriter;

module.exports.writeCsv1 = async (rows, fileName) => {
    const csvWriter = createCsvWriter({
        path: fileName,
        header: [
            {id: 'id', title: 'id'},
            {id: 'name', title: 'name'},
            {id: 'description', title: 'description'},
            {id: 'race', title: 'race'},
            {id: 'class_role', title: 'class_role'},
        ]
    });

    return csvWriter.writeRecords(rows)
}

module.exports.writeCsv2 = async (rows, fileName) => {
    const csvWriter = createCsvWriter({
        path: fileName,
        header: [
            {id: 'hero_id', title: 'hero_id'},
            {id: 'name', title: 'name'},
            {id: 'sum', title: 'sum'},
        ]
    });

    return csvWriter.writeRecords(rows)
}


