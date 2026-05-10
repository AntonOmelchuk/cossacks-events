import { useState } from "react";
import { Crown, Shield, Sword } from "lucide-react";
import Fortress_of_Resistance_Image from "./assets/Fortress_of_Resistance.png";
import Devastated_Castle_Image from "./assets/Devastated_Castle.png";
import Bandit_Stronghold_Image from "./assets/Bandit_Stronghold.png";
import Rainbow_Spring_Chateau_Image from "./assets/Rainbow_Spring_Chateau.png";
import Wild_Beast_Reserve_Image from "./assets/Wild_Beast_Reserve.png";
import Fortress_of_the_Dead_Image from "./assets/Fortress_of_the_Dead.png";
import Baium from "./assets/Baium.png";
import Rune from "./assets/Rune.png";
import Card from "./cmponents/Card";
import { ACTIVITY_TYPES, SIDES } from "./utils/config";
import { TRANSLATIONS } from "./utils/translates";
import LanguageToggle from "./cmponents/LanguageToggle";
import Header from "./cmponents/Header";

// Дані для заповнення
const DATE_TITLE = "11.05 - 17.05";

const activities = [
  {
    date: "15",
    time: "20:00",
    title: "Fortress of Resistance",
    clan: "FightClub",
    icon: Shield,
    image: Fortress_of_Resistance_Image,
    type: ACTIVITY_TYPES.SIEGE,
    side: SIDES.DEFENSE,
  },
  {
    title: "Olympiad Games",
    type: ACTIVITY_TYPES.OLYMPIAD,
    date: "15",
    time: "23:30",
  },
  {
    date: "11",
    time: "20:00",
    title: "Devastated Castle",
    clan: "Kriminalides",
    icon: Sword,
    image: Devastated_Castle_Image,
    type: ACTIVITY_TYPES.SIEGE,
    side: SIDES.ATTACK,
  },
  {
    title: "Olympiad Games",
    type: ACTIVITY_TYPES.OLYMPIAD,
    date: "11",
    time: "23:30",
  },
  {
    date: "13",
    time: "20:00",
    title: "Bandit Stronghold",
    clan: "Cartel",
    icon: Shield,
    image: Bandit_Stronghold_Image,
    type: ACTIVITY_TYPES.SIEGE,
    side: SIDES.DEFENSE,
  },
  {
    date: "11",
    time: "00:00",
    title: "Rainbow Spring Chateau",
    clan: "NoldoR",
    icon: Sword,
    image: Rainbow_Spring_Chateau_Image,
    type: ACTIVITY_TYPES.SIEGE,
    side: SIDES.ATTACK,
  },
  {
    date: "14",
    time: "21:00",
    title: "Wild Beast Reserve",
    clan: "OrzelBialy",
    icon: Sword,
    image: Wild_Beast_Reserve_Image,
    type: ACTIVITY_TYPES.SIEGE,
    side: SIDES.ATTACK,
  },
  {
    date: "12",
    time: "00:00",
    title: "Fortress of the Dead",
    clan: "DreamzTeam",
    icon: Shield,
    image: Fortress_of_the_Dead_Image,
    type: ACTIVITY_TYPES.SIEGE,
    side: SIDES.DEFENSE,
  },
  {
    date: "16",
    time: "23:00",
    title: "Baium",
    icon: Crown,
    image: Baium,
    type: ACTIVITY_TYPES.EPIC,
    side: SIDES.NEUTRAL,
  },
  {
    date: "17",
    time: "21:00",
    title: "Rune",
    icon: Sword,
    image: Rune,
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
  const [lang, setLang] = useState(localStorage.getItem("language") || "ua"); // Стан мови
  const t = TRANSLATIONS[lang]; // Поточні переклади

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 font-sans">
      {/* Header */}
      <div className="flex justify-center mb-12">
        <Header title={DATE_TITLE} />

        <LanguageToggle lang={lang} setLang={setLang} />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-7 max-w-500 gap-4 mx-auto">
        {days.map((day) => (
          <div key={day.label} className="flex flex-col space-y-4">
            {/* Day Header */}
            <div className="flex items-center space-x-2 px-2 mb-2">
              <span className="text-xl font-bold uppercase">
                {t.days[day.label]},
              </span>
              <span className="text-zinc-300 text-xl font-light">
                {day.date}
              </span>
            </div>

            {/* Cards Container */}
            <div className="flex flex-col space-y-4">
              {activities
                .filter((act) => act.date === day.date)
                .map((activity, idx) => (
                  <Card key={idx} activity={activity} lang={lang} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityDashboard;
