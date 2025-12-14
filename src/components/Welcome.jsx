import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const setupTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      fontVariationSettings: `'wght' ${weight}`,
      ease: "power2.out",
      duration,
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 2000);

      const weight = min + (max - min) * intensity;
      animateLetter(letter, weight);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetter(letter, base, 0.3);
    });
  };
  container.addEventListener("mouseleave", handleMouseLeave);
  container.addEventListener("mousemove", handleMouseMove);

  return () => {
    container.removeEventListener("mouseleave", handleMouseLeave);
    container.removeEventListener("mousemove", handleMouseMove);
  };
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ 
        fontVariationSettings: `'wght' ${baseWeight}`,
        color: 'inherit' // This ensures it inherits the parent's color
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

function Welcome() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const titleCleanup = setupTextHover(subtitleRef.current, "subtitle");
    const subtitleCleanUp = setupTextHover(titleRef.current, "title");
    return () => {
      subtitleCleanUp();
      titleCleanup();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef} style={{ color: 'var(--text-primary)' }}>
        {renderText(
          "Hey, Im Tabarak! Welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>
      <h1 ref={titleRef} className="mt-7" style={{ color: 'var(--text-primary)' }}>
        {renderText("portfolio.", "text-9xl italic font-georama", 400)}
      </h1>

      {/* <div className="small-screen">
        <p>This Portfolio is designed for desktop/tabled screens only.</p>
      </div> */}
    </section>
  );
}

export default Welcome;