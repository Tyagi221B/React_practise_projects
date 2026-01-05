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
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Random Color Generator
      </h1>

      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <button
          className={`${
            colorType === "HEX" ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-600 hover:bg-gray-700"
          } px-6 py-3 text-white font-medium rounded-lg transition-colors`}
          onClick={() => setcolorType("HEX")}
        >
          Create HEX Color
        </button>
        <button
          className={`${
            colorType === "RGB" ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-600 hover:bg-gray-700"
          } px-6 py-3 text-white font-medium rounded-lg transition-colors`}
          onClick={() => setcolorType("RGB")}
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
