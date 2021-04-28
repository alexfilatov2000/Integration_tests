const {log} = require('./logging');

let comparer1 = (otherArray) => {
    return function(current) {
        return otherArray.filter(function(other){
            return other.name === current.name
                && other.description === current.description
                && other.race === current.race
                && other.class_role === current.class_role
        }).length === 0;
    }
}

let comparer2 = (otherArray) => {
    return function(current){
        return otherArray.filter(function(other){
            return other.name === current.name
                && other.sum === current.sum
        }).length === 0;
    }
}

module.exports.compare1 = async (arr1, arr2) => {
    const onlyInA = arr1.filter(comparer1(arr2));
    const onlyInB = arr2.filter(comparer1(arr1));

    await log(arr1, arr2, onlyInA, onlyInB);

    return onlyInB;
}

module.exports.compare2 = async (arr1, arr2) => {
    const onlyInA = arr1.filter(comparer2(arr2));
    const onlyInB = arr2.filter(comparer2(arr1));
    await log(arr1, arr2, onlyInA, onlyInB);

    return onlyInB;
}