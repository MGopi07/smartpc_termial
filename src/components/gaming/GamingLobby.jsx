import React, { useState } from "react";
import { Gamepad2, MapPin, Wallet } from "lucide-react";
import { useMachine } from "../../context/MachineContext";
import { MOCK_GAMES } from "../../data/games";
import { SECTIONS_CONFIG } from "../../data/sections";
import { GameCategories } from "./GameCategories";
import { GameCard } from "./GameCard";
import { GameSection } from "./GameSection";
import { MachineHeader } from "../layout/MachineHeader";
import { SearchBar } from "./SearchBar";
import { HeroBanner } from "./HeroBanner";
import { LiveWinsTicker } from "./LiveWinsTicker";
import { Modal } from "../common/Modal";
import { Button } from "../common/Button";

export const GamingLobby = () => {
  const { machineData, balance, simulateHardwareDeposit } = useMachine();
  const [activeCategory, setActiveCategory] = useState("All Games");
  const [activeGame, setActiveGame] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const isDev = import.meta.env.DEV;

  // Filter logic
  const isSearchActive = searchQuery.trim().length > 0;

  const searchResults = MOCK_GAMES.filter((g) =>
    g.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const displaySections = SECTIONS_CONFIG.filter((section) => {
    if (activeCategory === "All Games") return true;
    return (
      section.title === activeCategory ||
      section.category === activeCategory ||
      (section.categories && section.categories.includes(activeCategory))
    );
  });

  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden bg-[#0c0e10]">
      <MachineHeader />

      <div className="flex-grow flex flex-col overflow-hidden pb-4">
        {/* Search Bar */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Scrollable Main Area */}
        <div
          className="flex-grow overflow-y-auto custom-scrollbar"
          style={{ transform: "translateZ(0)", willChange: "transform" }}
        >
          {/* Hero Banner */}
          <HeroBanner />

          {/* Live Wins Ticker */}
          <LiveWinsTicker />

          {/* Category Navigation (Quick Links) */}
          <div className="mb-6">
            <GameCategories
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>

          {/* Main Content Area */}
          <div className="pb-12">
            {isSearchActive ? (
              <div className="px-4 max-w-[1800px] mx-auto">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Search Results
                </h2>
                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {searchResults.map((game) => (
                      <GameCard
                        key={game.id}
                        game={game}
                        onClick={setActiveGame}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-slate-400 text-center py-20">
                    No games found for "{searchQuery}"
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {displaySections.map((section) => {
                  // Get games for this section
                  const sectionGames = MOCK_GAMES.filter((g) => {
                    if (section.categories)
                      return section.categories.includes(g.category);
                    return g.category === section.category;
                  });
                  // If we need more games for visual completeness, we can fill with random ones, but let's just use what we have.
                  const gamesToDisplay =
                    sectionGames.length > 0
                      ? sectionGames
                      : MOCK_GAMES.slice(0, 8);

                  return (
                    <GameSection
                      key={section.id}
                      section={section}
                      games={gamesToDisplay}
                      onGameClick={setActiveGame}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* DEV Hardware Simulator */}
      {isDev && machineData?.machineType === "TERMINAL" && (
        <div className="fixed top-24 right-6 bg-[#110820]/90 border border-[#d4af37]/50 p-4 rounded-xl z-50 shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl text-center text-[#d4af37]">
          <div className="text-[10px] font-mono mb-3 tracking-[0.2em] text-[#d4af37]/60 uppercase">
            DEV SIMULATOR
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => simulateHardwareDeposit(50)}
              className="px-3 py-2 bg-[#d4af37]/10 hover:bg-[#d4af37]/20 border border-[#d4af37]/30 rounded font-mono text-sm transition-colors text-[#f9d976]"
            >
              + N$50
            </button>
            <button
              onClick={() => simulateHardwareDeposit(100)}
              className="px-3 py-2 bg-[#d4af37]/10 hover:bg-[#d4af37]/20 border border-[#d4af37]/30 rounded font-mono text-sm transition-colors text-[#f9d976]"
            >
              + N$100
            </button>
            <button
              onClick={() => simulateHardwareDeposit(200)}
              className="px-3 py-2 bg-[#d4af37]/10 hover:bg-[#d4af37]/20 border border-[#d4af37]/30 rounded font-mono text-sm transition-colors text-[#f9d976]"
            >
              + N$200
            </button>
          </div>
        </div>
      )}

      {/* Game Launch Modal */}
      <Modal
        isOpen={!!activeGame}
        onClose={() => setActiveGame(null)}
        className="max-w-md !p-2" // Reduced width to max-w-md
      >
        <div className="relative rounded-2xl overflow-hidden mb-6 group border border-white/10 shadow-2xl bg-[#0a0512]">
          {/* Game Image Background */}
          {activeGame?.image && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url("${activeGame.image}")` }}
            ></div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0512] via-[#0a0512]/80 to-[#0a0512]/30"></div>

          <div className="relative z-10 p-6 flex flex-col items-center justify-center min-h-[320px] text-center">
            {/* Play Button Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-[#f9d976] to-[#aa8c2c] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(212,175,55,0.4)] cursor-pointer hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-[#110820] border-b-[10px] border-b-transparent ml-2"></div>
            </div>

            <div className="text-[#f9d976] tracking-[0.3em] uppercase text-xs font-bold mb-3 drop-shadow-md">
              {activeGame?.category || "GAME AREA"}
            </div>

            <h3 className="text-3xl font-black text-white mb-6 drop-shadow-lg tracking-tight">
              {activeGame?.title || "Demo Game"}
            </h3>

            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#110820]/90 to-[#1a1025]/90 border border-[#d4af37]/30 backdrop-blur-md shadow-[0_8px_16px_rgba(0,0,0,0.6)] group-hover:border-[#d4af37]/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-transparent flex items-center justify-center border border-[#d4af37]/20">
                <Wallet size={18} className="text-[#f9d976]" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">
                  Available Amount
                </span>
                <span className="text-xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-[#f9d976] to-[#d4af37] leading-none tracking-tight">
                  N$ {balance.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 px-2 mb-2">
          <Button
            variant="secondary"
            onClick={() => setActiveGame(null)}
            className="flex-1 py-4 text-lg font-bold border-white/10 hover:bg-white/5"
          >
            Back to Lobby
          </Button>
          <Button
            onClick={() => {}}
            className="flex-1 py-4 text-lg font-bold bg-gradient-to-r from-[#aa8c2c] via-[#f9d976] to-[#aa8c2c] text-[#03120c] border-transparent hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:brightness-110 transition-all"
          >
            Play Now
          </Button>
        </div>
      </Modal>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(5, 24, 16, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.5);
        }
      `}</style>
    </div>
  );
};
