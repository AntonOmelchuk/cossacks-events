import { useState } from "react";
import { Crown, Shield, Sword } from "lucide-react";
import Card from "./cmponents/Card";
import { ACTIVITY_TYPES, SIDES } from "./utils/config";
import { TRANSLATIONS } from "./utils/translates";
import LanguageToggle from "./cmponents/LanguageToggle";
import Header from "./cmponents/Header";
import { getAdjustedActivities } from "./utils/helpers";

const DATE_TITLE = "11.05 - 17.05";

const activities = [
  {
    date: "15",
    time: "17:00",
    title: "Fortress of Resistance",
    clan: "FightClub",
    icon: Shield,
    type: ACTIVITY_TYPES.SIEGE,
    side: SIDES.DEFENSE,
  },
  {
    title: "Olympiad Games",
    type: ACTIVITY_TYPES.OLYMPIAD,
    date: "15",
    time: "20:30",
  },
  {
    date: "11",
    time: "17:00",
    title: "Devastated Castle",
    clan: "Kriminalides",
    icon: Sword,
    type: ACTIVITY_TYPES.SIEGE,
    side: SIDES.ATTACK,
  },
  {
    title: "Olympiad Games",
    type: ACTIVITY_TYPES.OLYMPIAD,
    date: "11",
    time: "20:30",
  },
  {
    date: "13",
    time: "17:00",
    title: "Bandit Stronghold",
    clan: "Cartel",
    icon: Shield,
    type: ACTIVITY_TYPES.SIEGE,
    side: SIDES.DEFENSE,
  },
  {
    date: "11",
    time: "00:00",
    title: "Rainbow Spring Chateau",
    clan: "NoldoR",
    icon: Sword,
    type: ACTIVITY_TYPES.SIEGE,
    side: SIDES.ATTACK,
  },
  {
    date: "14",
    time: "18:00",
    title: "Wild Beast Reserve",
    clan: "OrzelBialy",
    icon: Sword,
    type: ACTIVITY_TYPES.SIEGE,
    side: SIDES.ATTACK,
  },
  {
    date: "12",
    time: "21:00",
    title: "Fortress of the Dead",
    clan: "DreamzTeam",
    icon: Shield,
    type: ACTIVITY_TYPES.SIEGE,
    side: SIDES.DEFENSE,
  },
  {
    date: "16",
    time: "20:00",
    title: "Baium",
    icon: Crown,
    type: ACTIVITY_TYPES.EPIC,
    side: SIDES.NEUTRAL,
  },
  {
    date: "17",
    time: "18:00",
    title: "Rune",
    icon: Sword,
    type: ACTIVITY_TYPES.SIEGE,
    side: SIDES.ATTACK,
  },
];

const days = [
  { label: "mon", date: "11" },
  { label: "tue", date: "12" },
  { label: "wed", date: "13" },
  { label: "thu", date: "14" },
  { label: "fri", date: "15" },
  { label: "sat", date: "16" },
  { label: "sun", date: "17" },
];

const ActivityDashboard = () => {
  const [lang, setLang] = useState(localStorage.getItem("language") || "ua");
  const [timezone, setTimezone] = useState("server"); // 'server' (+0) або 'kyiv' (+3)

  const t = TRANSLATIONS[lang];
  const todayDate = String(new Date().getDate());

  const adjustedActivities = getAdjustedActivities(activities, timezone);

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 font-sans">
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12 max-w-500 mx-auto w-full px-2">
        <div className="flex-1 flex justify-center sm:justify-start">
          <Header title={DATE_TITLE} timezone={timezone} />
        </div>

        <div className="flex items-center gap-4 content-center flex-wrap sm:flex-nowrap">
          {/* Timezone Switcher */}
          <div className="flex bg-zinc-900 border border-zinc-800 p-1 rounded-xl text-xs md:text-sm">
            <button
              onClick={() => setTimezone("server")}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                timezone === "server"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {t.serverTime}
            </button>
            <button
              onClick={() => setTimezone("kyiv")}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                timezone === "kyiv"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {t.kievTime}
            </button>
          </div>

          <LanguageToggle lang={lang} setLang={setLang} />
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 max-w-500 gap-6 mx-auto w-full">
        {days.map((day) => {
          const isToday = day.date === todayDate;
          const isPast = Number(day.date) < Number(todayDate);

          return (
            <div
              key={day.label}
              className={`flex flex-col space-y-4 transition duration-300 ${isPast ? "opacity-50" : "opacity-100"}`}
            >
              {/* Day Header */}
              <div
                className={`flex items-center justify-between space-x-2 px-3 py-2 mb-2 h-12 border rounded-2xl transition-colors duration-300 ${
                  isToday
                    ? "bg-blue-500/10 border-blue-400/20"
                    : "border-transparent"
                }`}
              >
                <span className="text-xl font-bold uppercase">
                  {t.days[day.label]}
                </span>
                <span className="text-zinc-300 text-xl font-light">
                  {day.date}
                </span>
              </div>

              {/* Cards Container */}
              <div className="flex flex-col space-y-4">
                {adjustedActivities
                  .filter((act) => act.date === day.date)
                  .map((activity, idx) => (
                    <Card
                      key={idx}
                      activity={activity}
                      lang={lang}
                      isToday={isToday}
                    />
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityDashboard;
