import { format, parse } from "date-fns";

export function formatDate(date) {
  return date.toISOString().split("T")[0]; //  "yyyy-MM-dd"
}

export const formatTime = (timeString) => {
  const date = parse(timeString, "HH:mm:ss", new Date());
  return format(date, "h:mm a");
};
