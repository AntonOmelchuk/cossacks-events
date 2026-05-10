import {
  Clock,
  Crown,
  Shield,
  Sword,
  Skull,
  Trophy,
  Home,
  Users,
  Flame,
} from "lucide-react";

export const ACTIVITY_TYPES = Object.freeze({
  SIEGE: "siege",
  EPIC: "epic",
  BOSS: "boss",
  OLYMPIAD: "olympiad",
  CLAN_HALL: "clan_hall",
  TRAINING: "training",
  PVP: "pvp",
});

export const SIDES = Object.freeze({
  ATTACK: "attack",
  DEFENSE: "defense",
  NEUTRAL: "neutral",
});

// 2. Словник перекладів
export const TRANSLATIONS = {
  ua: {
    attack: "ШТУРМ ЗАМКУ",
    defense: "ОБОРОНА ЗАМКУ",
    epic: "EPIC BOSS",
    boss: "RAID BOSS",
    olympiad: "ОЛІМПІАДА",
    clan_hall: "КЛАН ХОЛЛ",
    training: "ЗБІР / ТРЕНУВАННЯ",
    pvp: "CLAN WAR / PVP",
  },
  en: {
    attack: "CASTLE ATTACK",
    defense: "CASTLE DEFENSE",
    epic: "EPIC BOSS",
    boss: "RAID BOSS",
    olympiad: "OLYMPIAD GAMES",
    clan_hall: "CLAN HALL BATTLE",
    training: "CLAN MEETING",
    pvp: "CLAN WAR / PVP",
  },
};

// 3. Основний конфігуратор стилів
export const ACTIVITY_CONFIG = {
  // Облоги (комбіновані ключі)
  [`${ACTIVITY_TYPES.SIEGE}_${SIDES.ATTACK}`]: {
    translationKey: "attack",
    icon: Sword,
    color: "red",
    theme: "from-red-600 to-red-900",
    glow: "shadow-red-500/20",
  },
  [`${ACTIVITY_TYPES.SIEGE}_${SIDES.DEFENSE}`]: {
    translationKey: "defense",
    icon: Shield,
    color: "blue",
    theme: "from-blue-600 to-blue-900",
    glow: "shadow-blue-500/20",
  },
  // Епіки
  [ACTIVITY_TYPES.EPIC]: {
    translationKey: "epic",
    icon: Crown,
    color: "amber",
    theme: "from-amber-400 to-amber-700",
    glow: "shadow-amber-500/40",
  },
  // Рейд Боси
  [ACTIVITY_TYPES.BOSS]: {
    translationKey: "boss",
    icon: Skull,
    color: "purple",
    theme: "from-purple-600 to-purple-900",
    glow: "shadow-purple-500/20",
  },
  // Олімпіада
  [ACTIVITY_TYPES.OLYMPIAD]: {
    translationKey: "olympiad",
    icon: Trophy,
    color: "sky",
    theme: "from-sky-400 to-indigo-600",
    glow: "shadow-sky-500/30",
  },
  // Клан Холли
  [ACTIVITY_TYPES.CLAN_HALL]: {
    translationKey: "clan_hall",
    icon: Home,
    color: "emerald",
    theme: "from-emerald-500 to-teal-700",
    glow: "shadow-emerald-500/20",
  },
  // Тренування / Збори
  [ACTIVITY_TYPES.TRAINING]: {
    translationKey: "training",
    icon: Users,
    color: "zinc",
    theme: "from-zinc-600 to-zinc-800",
    glow: "",
  },
  // PvP / Clan War
  [ACTIVITY_TYPES.PVP]: {
    translationKey: "pvp",
    icon: Flame,
    color: "orange",
    theme: "from-orange-500 to-red-600",
    glow: "shadow-orange-500/20",
  },
};
