import { useState } from "react";

function RandomColorGenerator() {
  const [colorType, setcolorType] = useState<"HEX" | "RGB">("HEX");
  const [color, setcolor] = useState("");
  console.log(color);

  const handleRandomColorGeneration = () => {
    if (colorType === "HEX") {
      const randomColor =
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0");
      setcolor(randomColor);
    } else {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      setcolor(`rgb(${r},${g},${b})`);
    }
  };

  return (
    <div>
      <div className="flex">
        <button
          className={`${
            colorType === "HEX" ? "bg-red-500" : "bg-gray-600"
          } w-fit p-3 bg-gray-600 border-2 border-amber-300 rounded-3xl`}
          onClick={() => setcolorType("HEX")}
        >
          Create HEX Color
        </button>
        <button
          className={`${
            colorType === "RGB" ? "bg-red-500" : "bg-gray-600"
          } w-fit p-3 bg-gray-600 border-2 border-amber-300 rounded-3xl`}
          onClick={() => setcolorType("RGB")}
        >
          Create RGB Color
        </button>
        <button
          className={`w-fit p-3 bg-gray-600 border-2 border-amber-300 rounded-3xl`}
          onClick={() => handleRandomColorGeneration()}
        >
          Generate Random Color
        </button>
      </div>

      <div
        style={{ backgroundColor: color || "blanchedalmond" }}
        className=" w-32 h-32 text-black"
      >
        {color ? color : "Default Color"}
      </div>
    </div>
  );
}

export default RandomColorGenerator;
