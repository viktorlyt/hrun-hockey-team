export function formatDate(date) {
  return date.toISOString().split("T")[0]; //  "yyyy-MM-dd"
}
