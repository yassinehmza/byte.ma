"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const brandColors = {
  primary: "#ff0000",
  accent: "#d91807",
  dark: "#260101",
  border: "#510606"
};

const binarySequence = ["01100010", "01111001", "01110100", "01100101"];
const fullBinaryText = binarySequence.join(" ");
const firstBinaryGroupLength = binarySequence.slice(0, 2).join(" ").length;

const CyberMatrixHero = () => {
  const gridRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [showBinary, setShowBinary] = useState(true);
  const [finalVisible, setFinalVisible] = useState(false);
  const firstBinaryGroup = displayText.slice(0, firstBinaryGroupLength);
  const secondBinaryGroup = displayText
    .slice(firstBinaryGroupLength)
    .replace(/^\s/, "");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !showBinary) return;

    if (charIndex < fullBinaryText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayText((prev) => prev + fullBinaryText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 85);

      return () => clearTimeout(typingTimer);
    }

    const holdTimer = setTimeout(() => setShowBinary(false), 640);
    return () => clearTimeout(holdTimer);
  }, [charIndex, isClient, showBinary]);

  useEffect(() => {
    if (!isClient || showBinary || finalVisible) return;

    const revealTimer = setTimeout(() => setFinalVisible(true), 440);
    return () => clearTimeout(revealTimer);
  }, [finalVisible, isClient, showBinary]);

  useEffect(() => {
    if (!isClient || !gridRef.current) return;

    const grid = gridRef.current;
    const chars = "01";
    let columns = 0;
    let rows = 0;

    const createTile = () => {
      const tile = document.createElement("div");
      tile.classList.add("tile");

      tile.onclick = (event) => {
        const target = event.target;
        target.textContent = chars[Math.floor(Math.random() * chars.length)];
        target.classList.add("glitch");
        setTimeout(() => target.classList.remove("glitch"), 200);
      };

      return tile;
    };

    const createTiles = (quantity) => {
      Array.from(Array(quantity)).forEach(() => {
        grid.appendChild(createTile());
      });
    };

    const createGrid = () => {
      grid.innerHTML = "";

      const size = 50;
      columns = Math.floor(window.innerWidth / size);
      rows = Math.floor(window.innerHeight / size);

      grid.style.setProperty("--columns", columns);
      grid.style.setProperty("--rows", rows);

      createTiles(columns * rows);

      for (const tile of grid.children) {
        tile.textContent = chars[Math.floor(Math.random() * chars.length)];
      }
    };

    const radius = () => window.innerWidth / 4;

    const updateIntensityForPosition = (x, y) => {
      const influenceRadius = radius();

      for (const tile of grid.children) {
        const rect = tile.getBoundingClientRect();
        const tileX = rect.left + rect.width / 2;
        const tileY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(x - tileX, 2) + Math.pow(y - tileY, 2)
        );

        const intensity = Math.max(0, 1 - distance / influenceRadius);
        tile.style.setProperty("--intensity", intensity);
      }
    };

    const resetIntensity = () => {
      for (const tile of grid.children) {
        tile.style.setProperty("--intensity", 0);
      }
    };

    const handlePointerMove = (event) => {
      updateIntensityForPosition(event.clientX, event.clientY);
    };

    const handleTouchMove = (event) => {
      if (!event.touches || event.touches.length === 0) return;
      const primaryTouch = event.touches[0];
      updateIntensityForPosition(primaryTouch.clientX, primaryTouch.clientY);
    };

    const handleTouchStart = (event) => {
      if (!event.touches || event.touches.length === 0) return;
      const primaryTouch = event.touches[0];
      updateIntensityForPosition(primaryTouch.clientX, primaryTouch.clientY);
    };

    window.addEventListener("resize", createGrid);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", resetIntensity);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", resetIntensity);
    window.addEventListener("touchcancel", resetIntensity);

    createGrid();

    return () => {
      window.removeEventListener("resize", createGrid);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", resetIntensity);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", resetIntensity);
      window.removeEventListener("touchcancel", resetIntensity);
    };
  }, [isClient]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2 + 0.5,
        duration: 0.8,
        ease: "easeInOut"
      }
    })
  };

  const tileStyles = `
    #tiles {
      --intensity: 0;
      display: grid;
      grid-template-columns: repeat(var(--columns), 1fr);
      grid-template-rows: repeat(var(--rows), 1fr);
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
    }
    .tile {
      position: relative;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Courier New', Courier, monospace;
      font-size: 1.2rem;
      opacity: calc(0.28 + var(--intensity) * 0.72);
      color: rgba(255, 38, 38, calc(0.55 + var(--intensity) * 0.45));
      text-shadow: 0 0 calc(6px + var(--intensity) * 16px) rgba(255, 38, 38, calc(0.45 + var(--intensity) * 0.4));
      transform: scale(calc(1 + var(--intensity) * 0.22));
      transition: color 0.2s ease, text-shadow 0.2s ease, transform 0.2s ease, opacity 0.3s ease;
    }
    .tile.glitch {
      animation: glitch-anim 0.2s ease;
    }
    @keyframes glitch-anim {
      0% { transform: scale(1); color: ${brandColors.primary}; text-shadow: 0 0 6px ${brandColors.primary}; }
      50% { transform: scale(1.2); color: ${brandColors.accent}; text-shadow: 0 0 14px ${brandColors.primary}; }
      100% { transform: scale(1); color: ${brandColors.primary}; text-shadow: 0 0 6px ${brandColors.primary}; }
    }
  `;

  return (
    <div
      className={cn(
        "relative h-screen w-full bg-black flex flex-col items-center justify-start overflow-hidden"
      )}
      style={{ paddingTop: "1.5rem" }}
    >
      <div ref={gridRef} id="tiles"></div>

      <style>{tileStyles}</style>

      <motion.div
        custom={0}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex h-[60vh] w-full max-w-[92vw] items-center justify-center px-4 py-8 text-center sm:px-6 sm:py-12"
      >
        <AnimatePresence mode="wait">
          {showBinary && (
            <motion.div
              key="binary-sequence"
              initial={{ opacity: 0, y: 26, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -36, scale: 1.05, transition: { duration: 0.45, ease: "easeInOut" } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex w-full flex-col items-center gap-2 font-mono uppercase text-[#ff5b5b] drop-shadow-[0_0_28px_rgba(255,91,91,0.45)] sm:block sm:gap-0"
            >
              <span className="block w-full text-[clamp(1.4rem,4.5vw,3.4rem)] tracking-[0.1em] whitespace-nowrap sm:hidden">
                {firstBinaryGroup}
              </span>
              <span className="block w-full text-[clamp(1.4rem,4.5vw,3.4rem)] tracking-[0.1em] whitespace-nowrap sm:hidden">
                {secondBinaryGroup}
              </span>
              <span className="hidden w-full text-[clamp(1rem,4.4vw,3.8rem)] tracking-[0.08em] whitespace-nowrap sm:block">
                {displayText}
              </span>
            </motion.div>
          )}

          {finalVisible && (
            <motion.div
              key="byte-final"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex w-full flex-col items-center gap-5 text-center sm:gap-6"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  textShadow: "0 0 40px rgba(255,0,0,0.6), 0 0 90px rgba(255,0,0,0.35)"
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="block w-full font-black text-[clamp(4rem,19vw,15rem)] uppercase tracking-[0.18em] bg-clip-text text-transparent bg-gradient-to-b from-white via-[#ffeaea] to-[#ff3b3b]"
              >
                BYTE
              </motion.span>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                className="max-w-3xl text-[clamp(1rem,3.2vw,1.7rem)] font-semibold tracking-wide text-[#ffd6d6] drop-shadow-[0_0_18px_rgba(255,0,0,0.35)]"
              >
                From 0s and 1s to digital impact.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CyberMatrixHero;
