import moment from "moment";

export function getDuration(startDate: Date, endDate: Date): string {
    let diff = moment(endDate).diff(moment(startDate));
    let duration = moment.duration(diff);
    return `${duration.years()} ${duration.years() > 1 ? "lata" : "rok"} ${duration.months() > 0 ? `${duration.months()} msc` : ''}`
}