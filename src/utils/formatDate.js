/**
 * Converts an ISO date string into a human-readable "x days ago" format
 * @param {string} dateStr - ISO date string
 * @returns {string} Human-readable date
 */
export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = now - date; // milliseconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
};