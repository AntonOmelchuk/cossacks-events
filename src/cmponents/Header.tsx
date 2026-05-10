const Header = ({ title }: { title: string }) => (
  <div className="flex items-center space-x-3 bg-zinc-900/50 border border-zinc-800 px-6 py-2 rounded-full shadow-lg">
    <span className="text-blue-400 font-bold text-xl">🇺🇦</span>
    <h1 className="text-xl font-medium tracking-wider uppercase">
      Cossacks <span className="text-zinc-500 font-light ml-2">{title}</span>
    </h1>
    <div className="h-4 w-px bg-zinc-700 mx-2"></div>
    <span className="text-xs text-zinc-500 uppercase tracking-tighter">
      GMT +3
    </span>
  </div>
);

export default Header;
