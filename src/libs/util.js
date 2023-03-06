import moment from "moment";
export const isADayOlder = (date) => moment("2023-03-01 22:54:21").fromNow() === "a day ago";

