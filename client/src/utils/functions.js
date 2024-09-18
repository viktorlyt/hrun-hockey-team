import { format, parse } from "date-fns";

// export function formatDate(date) {
//   return date.toISOString().split("T")[0]; //  "yyyy-MM-dd"
// }

export const formatDate = (date) => {
  const parsedDate = new Date(date);

  if (!isNaN(parsedDate)) {
    return parsedDate.toISOString().split("T")[0];
  } else {
    console.error("Invalid date:", date);
    return "Invalid Date";
  }
};

export const formatTime = (timeString) => {
  const date = parse(timeString, "HH:mm:ss", new Date());
  return format(date, "h:mm a");
};

// export const calculateAge = (dob) => {
//   const ageDiff = Date.now() - new Date(dob).getTime();
//   const ageDate = new Date(ageDiff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

export const calculateAge = (dob) => {
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
};

export const parseAndValidateDate = (dob) => {
  dob = dob.trim();

  if (!/^\d{1,2}[\/-]\d{1,2}[\/-]\d{4}$/.test(dob)) {
    console.log("Invalid date format:", dob);
    return null;
  }

  const [day, month, year] = dob.includes("/")
    ? dob.split("/")
    : dob.split("-");

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    console.log("Invalid date components:", day, month, year);
    return null;
  }

  const date = new Date(year, month - 1, day);

  if (
    date.getDate() !== parseInt(day, 10) ||
    date.getMonth() !== parseInt(month, 10) - 1 ||
    date.getFullYear() !== parseInt(year, 10)
  ) {
    console.log("Invalid date after parsing:", date);
    return null;
  }

  console.log("Valid date:", date);
  return date;
};

export const isAdult = (dob) => {
  return calculateAge(dob) >= 18;
};

export const isChild = (dob) => {
  return calculateAge(dob) < 18;
};
