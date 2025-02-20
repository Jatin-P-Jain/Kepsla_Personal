import { format } from "date-fns";

// Utility function to format a date in "Day, Month Date, Year" format
export const formatDate = (date: Date): string => {
  return format(date, "EEEE, MMMM dd, yyyy");
};
