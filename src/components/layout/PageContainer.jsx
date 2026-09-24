import React from 'react';

export const PageContainer = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-[#1a0c2e] flex flex-col relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#2d1552] blur-[150px] animate-glow-pulse pointer-events-none" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#33114a] blur-[150px] animate-glow-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[20%] right-[30%] w-[20vw] h-[20vw] rounded-full bg-yellow-600/10 blur-[100px] animate-glow-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
      
      {/* Subtle Felt/Diamond Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20L20 0Z' fill='%23d4af37' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col flex-1 w-full max-w-[1920px] mx-auto shadow-2xl bg-transparent h-full overflow-hidden">
        {children}
      </div>
    </div>
  );
};
