import React from "react";
import { getRandomHex } from "utils";

interface ColorListProps {
  itemLength: number;
  isPending: boolean;
}

function ColorList({ itemLength, isPending }: ColorListProps) {
  return (
    <div className="color-list" style={{ opacity: isPending ? 0.5 : 1 }}>
      {[...Array(Math.pow(2, itemLength))].map((_, index) => (
        <div
          key={index}
          className="color-list__item"
          style={{ backgroundColor: `#${getRandomHex()}` }}
        />
      ))}
    </div>
  );
}

export default ColorList;
