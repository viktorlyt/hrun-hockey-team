export const calculateAge = (dob) => {
  const ageDiff = Date.now() - new Date(dob).getTime();
  const ageDate = new Date(ageDiff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const parseAndValidateDate = (dob) => {
  const [day, month, year] = dob.includes("/")
    ? dob.split("/")
    : dob.split("-");

  const date = new Date(year, month - 1, day);

  if (isNaN(date.getTime())) {
    throw new Error(
      "Invalid date format. Please use DD/MM/YYYY or DD-MM-YYYY.\n"
    );
  }

  return date;
};

export const isAdult = (dob) => {
  return calculateAge(dob) >= 18;
};

export const isChild = (dob) => {
  return calculateAge(dob) < 18;
};
