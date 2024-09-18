export function datetimeToObject (datetime) {
    var splits = datetime.split('-', 3);

    var months = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December',
    };

    return {year: splits[0], month: months[splits[1]], day: splits[2].slice(0, 2).replace('0', '')};
}

// Expects year and month as two strings, Ex: '2023' '05'
export function yearMonthToReadableString (year, month) {
    var months = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December',
    };

    return months[month] + ' ' + year;
}