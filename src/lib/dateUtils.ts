// Formato de entrada: "MM/YYYY" ou "present"
// Exemplo: { start: "03/2024", end: "01/2025" } ou { start: "02/2025", end: "present" }

export type ExperiencePeriod = {
  start: string;       // "MM/YYYY"
  end: string;         // "MM/YYYY" ou "present"
};

const MONTHS_PT = [
  "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
  "Jul", "Ago", "Set", "Out", "Nov", "Dez"
];

const MONTHS_EN = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

function parseDate(str: string): { month: number; year: number } {
  const [m, y] = str.split("/").map(Number);
  return { month: m, year: y };
}

function formatMonth(month: number, lang: "pt" | "en"): string {
  return lang === "pt" ? MONTHS_PT[month - 1] : MONTHS_EN[month - 1];
}

export function formatPeriod(period: ExperiencePeriod, lang: "pt" | "en"): string {
  const start = parseDate(period.start);
  const startStr = `${formatMonth(start.month, lang)} ${start.year}`;

  const isPresent = period.end.toLowerCase() === "present" || period.end.toLowerCase() === "presente";
  if (isPresent) {
    const endStr = lang === "pt" ? "Presente" : "Present";
    return `${startStr} — ${endStr}`;
  }

  const end = parseDate(period.end);
  const endStr = `${formatMonth(end.month, lang)} ${end.year}`;
  return `${startStr} — ${endStr}`;
}

export function calcDuration(period: ExperiencePeriod, lang: "pt" | "en"): string {
  const start = parseDate(period.start);
  const now = new Date();

  const end = period.end.toLowerCase() === "present" || period.end.toLowerCase() === "presente"
    ? { month: now.getMonth() + 1, year: now.getFullYear() }
    : parseDate(period.end);

  let months = (end.year - start.year) * 12 + (end.month - start.month);
  if (months < 1) months = 1;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const parts: string[] = [];

  if (lang === "pt") {
    if (years > 0) parts.push(`${years} ano${years > 1 ? "s" : ""}`);
    if (remainingMonths > 0) parts.push(`${remainingMonths} ${remainingMonths > 1 ? "meses" : "mês"}`);
  } else {
    if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
    if (remainingMonths > 0) parts.push(`${remainingMonths} mon${remainingMonths > 1 ? "s" : ""}`);
  }

  return parts.join(" ");
}