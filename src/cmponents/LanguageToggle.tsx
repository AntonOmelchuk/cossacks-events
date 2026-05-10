const LanguageToggle = ({
  lang,
  setLang,
}: {
  lang: string;
  setLang: (lang: string) => void;
}) => (
  <div className="flex absolute right-30 bg-zinc-900 p-1 rounded-lg border border-zinc-800">
    <button
      onClick={() => {
        setLang("ua");
        localStorage.setItem("language", "ua");
      }}
      className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${lang === "ua" ? "bg-zinc-700 text-white" : "text-zinc-500 hover:text-zinc-300"}`}
    >
      UA
    </button>
    <button
      onClick={() => {
        setLang("en");
        localStorage.setItem("language", "en");
      }}
      className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${lang === "en" ? "bg-zinc-700 text-white" : "text-zinc-500 hover:text-zinc-300"}`}
    >
      EN
    </button>
  </div>
);

export default LanguageToggle;
