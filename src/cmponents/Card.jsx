import { Clock, Crown, Shield, Sword } from "lucide-react";
import { getSideStyles, TRANSLATIONS } from "../helpers";

const Card = ({ activity }) => {
  const lang = localStorage.getItem("language") || "ua";
  const t = TRANSLATIONS[lang];
  const styles = getSideStyles(activity);

  return (
    <div
      className={`relative ${styles.bg} border ${styles.border} ${styles.shadow} rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02]`}
    >
      {/* Верхня мітка (ЕПІК / АТАКА / ЗАХИСТ) */}
      <div
        className={`text-[10px] font-black ${styles.text} mb-3 tracking-[0.2em] flex items-center space-x-1`}
      >
        <span
          className={`w-2.5 h-2.5 rounded-full ${styles.iconBg} animate-pulse`}
        ></span>
        <span>{t[activity.type]}</span>
      </div>

      <div className="flex items-center space-x-3">
        <div
          className={`w-9 h-9 ${styles.iconBg} rounded-lg flex items-center justify-center shadow-lg text-white`}
        >
          {/* Вибір іконки залежно від типу */}
          {activity.type === "epic" ? (
            <Crown size={18} />
          ) : activity.type === "attack" ? (
            <Sword size={18} />
          ) : (
            <Shield size={18} />
          )}
        </div>

        <div>
          <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-tight">
            {activity.title}
          </h4>

          <div className="flex items-center mt-2">
            <div className="flex items-center text-zinc-300 space-x-1">
              <Clock size={16} />
              <span className="text-4 font-mono">{activity.time}</span>
            </div>
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest ml-2">
              {activity.clan}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
