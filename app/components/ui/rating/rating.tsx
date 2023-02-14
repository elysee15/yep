import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Star } from "../avatar";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={twMerge(
              "cursor-pointer border-none bg-transparent outline-none",
              index <= ((rating && hover) || hover)
                ? "text-yellow-500"
                : "text-[#ccc]"
            )}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <Star
              fill={
                index <= ((rating && hover) || hover)
                  ? "rgb(234 179 8 / var(--tw-text-opacity))"
                  : "transparent"
              }
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
