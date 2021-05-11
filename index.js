exports.isLeap = function (year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log(`${year} is leap-year`);
    } else {
        console.log(`${year} isn't leap-year`);
    }
};

exports.LeapYearsOnRange = function (startYear, endYear) {
    let leapYears = [];
    for (startYear; startYear <= endYear; startYear++) {
        if ((startYear % 4 == 0 && startYear % 100 != 0) || startYear % 400 == 0) {
            leapYears.push(startYear);
        } else {
            continue;
        }
    }
    return leapYears
};
