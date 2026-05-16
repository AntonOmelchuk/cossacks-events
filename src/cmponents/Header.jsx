const Header = ({ title, timezone }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 bg-zinc-900/70 border border-zinc-800 px-5 py-3 rounded-full shadow-xl backdrop-blur-sm w-full sm:w-auto">
    <span className="text-blue-400 font-bold text-xl">🇺🇦</span>
    <h1 className="text-lg sm:text-xl font-medium tracking-wider uppercase text-left">
      Cossacks <span className="text-zinc-500 font-light ml-2">{title}</span>
    </h1>
    <div className="h-4 w-px bg-zinc-700 mx-0 sm:mx-2"></div>
    <span className="text-xs text-zinc-400 uppercase tracking-tighter">
      {timezone === "kyiv" ? "GMT +3" : "GMT +0"}
    </span>
  </div>
);

export default Header;
