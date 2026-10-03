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

  const isTerminal = machineData?.machineType === "TERMINAL";
  const spribeGames = MOCK_GAMES.filter((g) => g.category === "Spribe").slice(
    0,
    13,
  );

  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden bg-black">
      <MachineHeader />

      <div className="flex-grow flex flex-col overflow-hidden pb-4">
        {/* Search Bar */}
        {!isTerminal && (
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        )}

        {/* Scrollable Main Area */}
        <div
          className="flex-grow overflow-y-auto custom-scrollbar"
          style={{ transform: "translateZ(0)", willChange: "transform" }}
        >
          {isTerminal ? (
            <div className="px-6 py-10 max-w-[1800px] mx-auto w-full relative">
              {/* Luxury Background Glows for Terminal View */}
              <div className="absolute top-0 left-[20%] w-[30vw] h-[30vw] rounded-full bg-yellow-600/5 blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 right-[20%] w-[30vw] h-[30vw] rounded-full bg-winbet-light/10 blur-[120px] pointer-events-none" />

              <div className="relative z-10 bg-[#0a0a0a]/80 backdrop-blur-md rounded-3xl border border-[#f97316]/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-gradient-to-b from-[#fdba74] to-[#ea580c] rounded-full" />
                    <h2 className="text-2xl md:text-3xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#ffedd5] to-[#f97316] tracking-widest uppercase font-bold drop-shadow-md">
                      Popular Games
                    </h2>
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#f97316]/30 via-[#f97316]/10 to-transparent ml-8" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-5">
                  {spribeGames.map((game) => (
                    <GameCard
                      key={game.id}
                      game={game}
                      onClick={setActiveGame}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>

      {/* Game Launch Modal */}
      <Modal
        isOpen={!!activeGame}
        onClose={() => setActiveGame(null)}
        className="max-w-md !p-2" // Reduced width to max-w-md
      >
        <div className="relative rounded-2xl overflow-hidden mb-6 group border border-[#f97316]/20 shadow-2xl bg-[#0a0a0a]">
          {/* Game Image Background */}
          {activeGame?.image && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url("${activeGame.image}")` }}
            ></div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/30"></div>

          <div className="relative z-10 p-6 flex flex-col items-center justify-center min-h-[320px] text-center">
            {/* Play Button Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-[#fdba74] to-[#ea580c] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(249,115,22,0.4)] cursor-pointer hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-black border-b-[10px] border-b-transparent ml-2"></div>
            </div>

            <div className="text-[#fdba74] tracking-[0.3em] uppercase text-xs font-bold mb-3 drop-shadow-md">
              {activeGame?.category || "GAME AREA"}
            </div>

            <h3 className="text-3xl font-black text-white mb-6 drop-shadow-lg tracking-tight">
              {activeGame?.title || "Demo Game"}
            </h3>

            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-gradient-to-r from-black/90 to-[#111111]/90 border border-[#f97316]/30 backdrop-blur-md shadow-[0_8px_16px_rgba(0,0,0,0.6)] group-hover:border-[#f97316]/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f97316]/20 to-transparent flex items-center justify-center border border-[#f97316]/20">
                <Wallet size={18} className="text-[#fdba74]" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">
                  Available Amount
                </span>
                <span className="text-xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fdba74] to-[#f97316] leading-none tracking-tight">
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
            className="flex-1 py-4 text-lg font-bold bg-gradient-to-r from-[#ea580c] via-[#fdba74] to-[#ea580c] text-[#03120c] border-transparent hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:brightness-110 transition-all"
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
          background: rgba(249, 115, 22, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 0.5);
        }
      `}</style>
    </div>
  );
};
