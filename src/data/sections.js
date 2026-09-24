export const SECTIONS_CONFIG = [
  {
    id: "hot-games",
    title: "Hot Games",
    icon: "Flame",
    category: "Hot Games",
    featured: {
      bgColor: "bg-[#e11d48]", // rose-600
      badge: "TRENDING",
      title: "Hot Games",
      stats: [
        { value: "450,210", label: "Players online", badge: "hot" },
        { value: "542,000 INR", label: "Recent payout" },
        { value: "85,410", label: "Active sessions" }
      ]
    }
  },
  {
    id: "live-dealers",
    title: "Best Live dealers",
    icon: "Video",
    category: "Live Games",
    featured: {
      bgColor: "bg-[#0ea5e9]", // cyan-500
      badge: "AWESOME",
      title: "Live Dealers",
      stats: [
        { value: "230,253", label: "Total rounds for today", badge: "live" },
        { value: "201", label: "Active tables" },
        { value: "BET ON TEEN PATTI", label: "Top table/games" },
        { value: "45,272,948 INR", label: "Highest win of the day" }
      ],
      image: "placeholder-live" 
    }
  },
  {
    id: "casino",
    title: "Casino",
    icon: "Diamond",
    categories: ["Casino", "Table Games"],
    featured: {
      bgColor: "bg-[#f59e0b]", // amber-500
      badge: "AWESOME",
      title: "TOP Casino Games",
      stats: [
        { value: "1,058,471", label: "Spins this week" },
        { value: "122,928,000 INR", label: "Highest win" },
        { value: "48,240,000 INR", label: "Highest jackpot" }
      ],
      image: "placeholder-casino"
    }
  },
  {
    id: "crash-games",
    title: "Crash games",
    icon: "Rocket",
    category: "Spribe", 
    categories: ["Spribe", "Turbo", "Crash Game"],
    featured: {
      bgColor: "bg-[#ef4444]", // red-500
      badge: "AWESOME",
      title: "Crash games",
      topRightBadge: "x100",
      stats: [
        { value: "116,334", label: "Total rounds for today", badge: "live" },
        { value: "AVIATOR", label: "Top game" },
        { value: "37,789,475 INR", label: "Highest win of the day" },
        { value: "73,736,464 INR", label: "Highest jackpot" }
      ],
      image: "placeholder-crash"
    }
  }
];
