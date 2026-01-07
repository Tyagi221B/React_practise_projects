import { useState } from "react";

function RandomColorGenerator() {
  const [colorType, setcolorType] = useState<"HEX" | "RGB">("HEX");
  const [color, setcolor] = useState("");
  console.log(color);

  const rgbToHex = (rgb: string): string => {
    const match = rgb.match(/rgb\((\d+),(\d+),(\d+)\)/);
    if (!match) return "#000000";
    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  const hexToRgb = (hex: string): string => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return "rgb(0,0,0)";
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `rgb(${r},${g},${b})`;
  };

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
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Random Color Generator
      </h1>

      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <button
          className={`${
            colorType === "HEX" ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-600 hover:bg-gray-700"
          } px-6 py-3 text-white font-medium rounded-lg transition-colors`}
          onClick={() => {
            setcolorType("HEX");
            if (color && color.startsWith("rgb")) {
              setcolor(rgbToHex(color));
            }
          }}
        >
          Create HEX Color
        </button>
        <button
          className={`${
            colorType === "RGB" ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-600 hover:bg-gray-700"
          } px-6 py-3 text-white font-medium rounded-lg transition-colors`}
          onClick={() => {
            setcolorType("RGB");
            if (color && color.startsWith("#")) {
              setcolor(hexToRgb(color));
            }
          }}
        >
          Create RGB Color
        </button>
        <button
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"
          onClick={() => handleRandomColorGeneration()}
        >
          Generate Random Color
        </button>
      </div>

      <div
        style={{ backgroundColor: color || "#f5f5f5" }}
        className="w-full h-80 rounded-xl shadow-lg flex flex-col items-center justify-center text-2xl font-semibold border-2 border-gray-300"
      >
        <p className="bg-white bg-opacity-90 px-6 py-3 rounded-lg shadow-md text-black">
          {color ? color : "Click Generate to Create a Color"}
        </p>
      </div>
    </div>
  );
}

export default RandomColorGenerator;
