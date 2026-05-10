export const getSideStyles = (activity) => {
  // Пріоритет для Епіків
  if (activity.type === "epic") {
    return {
      bg: "bg-amber-500/10", // Легкий золотий фон
      border: "border-amber-500/40", // Золота рамка
      iconBg: "bg-amber-500", // Насичена золота іконка
      text: "text-amber-400", // Текст підпису
      label: "ЕПІК РБ",
      shadow: "shadow-[0_0_15px_rgba(245,158,11,0.2)]", // М'яке сяйво
    };
  }

  // Логіка для сторін облоги
  if (activity.type === "attack") {
    return {
      bg: "bg-red-600/10",
      border: "border-red-500/40",
      iconBg: "bg-red-600",
      text: "text-red-400",
      label: "АТАКА",
      shadow: "",
    };
  }

  if (activity.type === "defense") {
    return {
      bg: "bg-blue-600/10",
      border: "border-blue-500/40",
      iconBg: "bg-blue-600",
      text: "text-blue-400",
      label: "ЗАХИСТ",
      shadow: "",
    };
  }

  // Дефолтний стиль (звичайні РБ або активності)
  return {
    bg: "bg-zinc-900/40",
    border: "border-zinc-800",
    iconBg: "bg-zinc-700",
    text: "text-zinc-500",
    label: "ACTIVITY",
    shadow: "",
  };
};

export const TRANSLATIONS = {
  ua: {
    header: "Cossacks Активності",
    gmt: "GMT +3",
    attack: "АТАКА",
    defense: "ОБОРОНА",
    epic: "ЕПІК РБ",
    boss: "РЕЙД БОС",
    training: "ЗБІР",
    days: {
      mon: "ПОНЕДІЛОК",
      tue: "ВІВТОРОК",
      wed: "СЕРЕДА",
      thu: "ЧЕТВЕР",
      fri: "П’ЯТНИЦЯ",
      sat: "СУБОТА",
      sun: "НЕДІЛЯ",
    },
  },
  en: {
    header: "Cossacks Activities",
    gmt: "GMT +3",
    attack: "ATTACK",
    defense: "DEFENSE",
    epic: "EPIC BOSS",
    boss: "RAID BOSS",
    training: "MEETING",
    days: {
      mon: "MONDAY",
      tue: "TUESDAY",
      wed: "WEDNESDAY",
      thu: "THURSDAY",
      fri: "FRIDAY",
      sat: "SATURDAY",
      sun: "SUNDAY",
    },
  },
};
