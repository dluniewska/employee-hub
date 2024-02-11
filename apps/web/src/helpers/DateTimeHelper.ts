import moment from "moment";

export function getDuration(startDate: Date, endDate: Date): string {
    let diff = moment(endDate).diff(moment(startDate));
    let duration = moment.duration(diff);
    return `${duration.years()} ${years(duration.years())} ${duration.months() > 0 ? `${duration.months()} msc` : ''}`
}

function years(num: number): string {
    switch (true) {
        case (num === 1):
            return "rok";
        case (num > 1 && num < 5):
            return "lata"
        case (num >= 5):
            return "lat"
        default:
            return "l."
    }
}
