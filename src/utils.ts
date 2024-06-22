//Format a date to a string with the format "day month year"
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString("es-ES", options);
}

//Capitalizes the first letter of a string
function capitalize(text: string): string {
  if (typeof text !== "string" || text.length === 0) {
    return text;
  } else {
    return text[0].toUpperCase() + text.slice(1);
  }
}

export { formatDate, capitalize };
