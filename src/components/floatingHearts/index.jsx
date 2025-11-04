import React, { useState } from "react";
import { HeartContainer, Heart, FloatingHeartElement } from "./styles";

const FloatingHeart = () => {
  const [hearts, setHearts] = useState([]);

  const spawnHearts = () => {
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));

    setHearts((prev) => [...prev, ...newHearts]);

    // Remove hearts after animation completes
    setTimeout(() => {
      setHearts((prev) =>
        prev.filter((heart) => !newHearts.some((h) => h.id === heart.id))
      );
    }, 2500);
  };

  return (
    <HeartContainer>
      <Heart onClick={spawnHearts} />
      {hearts.map((heart) => (
        <FloatingHeartElement
          key={heart.id}
          $left={heart.left}
          $top={heart.top}
        />
      ))}
    </HeartContainer>
  );
};

export default FloatingHeart;
