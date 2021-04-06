import moment from "moment";

// Check if two dates are same day
export const isSameDay = (a, b) => {
    if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    return a.isSame(b, "day");
};

// Add time units to a date
export const addTimeUnits = (date, frequency, unit) => {
    let notation = null;

    switch (unit) {
        case "DAILY":
            notation = "d";
            break;
        case "WEEKLY":
            notation = "w";
            break;
        case "MONTHLY":
            notation = "M";
            break;
        case "YEARLY":
            notation = "y";
            break;
        default:
            notation = null;
    }

    return notation ? moment(date).add(frequency, notation).toDate() : null;
};

// Get tomorrow
export const tomorrow = () => {
    return moment().add(1, "d").toDate();
};
