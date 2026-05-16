import React from "react";
import { Clock } from "lucide-react";
import { getSideStyles } from "../utils/helpers";

const Card = ({ activity, lang = "ua" }) => {
  // 1. Отримуємо всі стилі, іконку та перекладену мітку з хелпера
  const styles = getSideStyles(activity, lang);
  const Icon = styles.icon;

  return (
    <div
      className={`relative ${styles.bg} border ${styles.border} ${styles.shadow} rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:scale-[1.02] h-full flex flex-col justify-between min-h-[150px]`}
    >
      {/* Верхня мітка (ЕПІК / ШТУРМ / ОБОРОНА / ОЛІМП тощо) */}
      <div
        className={`text-[10px] font-black ${styles.text} mb-3 tracking-[0.2em] flex items-center space-x-1`}
      >
        <span
          className={`w-2 h-2 rounded-full ${styles.iconBg} animate-pulse shadow-[0_0_8px] shadow-current`}
        ></span>
        <span className="uppercase">{styles.label}</span>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:space-x-3">
        {/* Контейнер іконки */}
        <div
          className={`w-10 h-10 ${styles.iconBg} rounded-lg flex items-center justify-center shadow-lg text-white shrink-0`}
        >
          <Icon size={20} />
        </div>

        <div className="min-w-0">
          <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-tight truncate">
            {activity.title}
          </h4>

          <div className="flex flex-wrap items-center mt-1 gap-2">
            <div className="flex items-center text-zinc-300 space-x-1">
              <Clock size={14} className="text-zinc-500" />
              <span className="text-[13px] font-mono font-medium">
                {activity.time}
              </span>
            </div>

            {activity.clan && (
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider px-2 py-0.5 bg-zinc-800/50 rounded border border-zinc-700/50">
                {activity.clan}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
