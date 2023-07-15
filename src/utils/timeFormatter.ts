import { Timestamp } from "firebase/firestore";
import moment from "moment";

export const formatToRelative = (dateTimestamp: Timestamp) => {
  const formatted = moment(dateTimestamp.toDate()).fromNow();

  //   console.log(formatted);

  let newDate: string = "";

  if (formatted.includes("a few seconds")) {
    // return formatted.replace('seconds', 's').replace('ago', '').replace(' ', '')
    newDate = formatted.replace("seconds", "s").replace("a few", "1");
  } else if (formatted.includes("second")) {
    newDate = formatted.replace("second", "s");
  } else if (formatted.includes("minutes")) {
    newDate = formatted.replace("minutes", "m");
  } else if (formatted.includes("a minute")) {
    newDate = formatted.replace("minute", "m").replace("a", "1");
  } else if (formatted.includes("hours")) {
    newDate = formatted.replace("hours", "h");
  } else if (formatted.includes("an hour")) {
    newDate = formatted.replace("hour", "h").replace("an", "1");
  } else if (formatted.includes("days")) {
    newDate = formatted.replace("days", "d");
  } else if (formatted.includes("a day")) {
    newDate = formatted.replace("day", "d").replace("a", "1");
  }

  //   console.log(newDate.replace("ago", "").replace(" ", ""));

  return newDate.replace("ago", "").replace(" ", "");
};
