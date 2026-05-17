const Header = ({ title, timezone }) => (
  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-zinc-900/70 border border-zinc-800 px-4 sm:px-5 py-3 rounded-2xl sm:rounded-full shadow-xl backdrop-blur-sm w-full sm:w-auto text-center sm:text-left">
    {/* Головний контент: Прапор + Назва */}
    <div className="flex items-center gap-2">
      <span className="text-xl">🇺🇦</span>
      <h1 className="text-base sm:text-xl font-medium tracking-wider uppercase">
        Cossacks{" "}
        <span className="text-zinc-500 font-light ml-1 sm:ml-2">{title}</span>
      </h1>
    </div>

    {/* Адаптивний роздільник: горизонтальний на мобілках, вертикальний на десктопі */}
    <div className="h-px w-full sm:h-4 sm:w-px bg-zinc-800 sm:bg-zinc-700 my-1 sm:my-0 sm:mx-2"></div>

    {/* Таймзона */}
    <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider sm:tracking-tighter font-medium bg-zinc-800/40 sm:bg-transparent px-2.5 py-0.5 sm:p-0 rounded-md sm:rounded-none">
      {timezone === "kyiv" ? "GMT +3" : "GMT +0"}
    </span>
  </div>
);

export default Header;
