/* Tailwind Safelist (щоб кольори не зникали):
bg-red-500 bg-blue-500 bg-amber-500 bg-purple-500 bg-sky-500 bg-emerald-500 bg-zinc-500
text-red-400 text-blue-400 text-amber-400 text-purple-400 text-sky-400 text-emerald-400
border-red-500/40 border-blue-500/40 border-amber-500/40 border-purple-500/40 border-sky-500/40
iconBg: bg-red-600 bg-blue-600 bg-amber-600 bg-purple-600 bg-sky-600 bg-emerald-600
*/

import { ACTIVITY_TYPES, SIDES, ACTIVITY_CONFIG } from "./config";
import { TRANSLATIONS } from "./translates";

export const getSideStyles = (activity, lang = "ua") => {
  const t = TRANSLATIONS[lang];

  // 1. Визначаємо ключ для пошуку в конфігу
  // Якщо це облога — додаємо сторону (attack/defense), якщо ні — просто тип
  const key =
    activity.type === ACTIVITY_TYPES.SIEGE
      ? `${activity.type}_${activity.side}`
      : activity.type;

  // 2. Отримуємо базовий конфіг (якщо типу немає — беремо TRAINING як дефолт)
  const config =
    ACTIVITY_CONFIG[key] || ACTIVITY_CONFIG[ACTIVITY_TYPES.TRAINING];
  // 3. Формуємо об'єкт стилів для компонента
  return {
    // Кольори та градієнти
    bg: `bg-${config.color}-500/10`,
    border: `border-${config.color}-500/40`,
    iconBg: `bg-${config.color}-600`,
    text: `text-${config.color}-400`,
    shadow: config.glow || "",

    // Іконка та підпис (беремо з перекладів)
    icon: config.icon,
    label: t[config.translationKey] || "ACTIVITY",
  };
};

// Функція перерахунку з фіксованим правилом для опівночі (24:00 -> 00:00 без зміни дати)
export const getAdjustedActivities = (activities, timezone) => {
  return activities.map((act) => {
    if (timezone === "server" || !act.time) return act;

    const [hours, minutes] = act.time.split(":").map(Number);
    let adjustedHours = hours + 3;
    let adjustedDate = Number(act.date);

    if (adjustedHours > 24) {
      // Якщо час перевалив за північ (наприклад 25:00 це 01:00 наступного дня)
      adjustedHours -= 24;
      adjustedDate += 1;
    } else if (adjustedHours === 24) {
      // Якщо рівно 24:00 (ігровий вечір поточного дня закінчується опівночі)
      adjustedHours = 0; // показуємо як 00:00, але ЦЕНТРАЛЬНУ ДАТУ НЕ ЗМІНЮЄМО
    }

    const formattedHours = String(adjustedHours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");

    return {
      ...act,
      time: `${formattedHours}:${formattedMinutes}`,
      date: String(adjustedDate),
    };
  });
};
