import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <div
      className="
      pointer-events-none
      fixed
      z-0
      h-96
      w-96
      rounded-full
      bg-blue-500/10
      blur-3xl
      "
      style={{
        left: position.x - 200,
        top: position.y - 200,
      }}
    />
  );
}