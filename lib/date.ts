export const formatDate = (date: string | undefined) => {
  if (!date) return "";

  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return "";

  date = dateObj.toISOString().split("T")[0];
  if (!date) return "";

  const [year, month] = date.split("-");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (month) {
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  }
  return year;
};


export const getCurrentYear = () => {
  return new Date().getFullYear();
};