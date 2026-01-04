import { useState } from "react";
import data from "../data/accordian.data";

function Accordian() {
  const [isOpen, setisOpen] = useState<number | null>(null);

  const handleOpen = (id : number) => {
    console.log(id)
    setisOpen(isOpen === id ? null : id)
  }
  return (
    <div className="w-full max-w-3xl mx-auto p-4"> 
      <p className="text-4xl text-center mb-6">Accordian</p>
      {data.map((accord) => (
        <div key={accord.id} className="mb-2 border border-gray-300 rounded-lg overflow-hidden">
          <button
            onClick={() => handleOpen(accord.id)}
            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="font-semibold text-gray-900 text-left">{accord.question}</span>
            <span className="text-xl font-bold text-gray-900 ml-4">{isOpen === accord.id ? '-' : '+'}</span>
          </button>

          {isOpen === accord.id && (
            <div className="p-4 bg-white border-t border-gray-200">
              <p className="text-gray-900">{accord.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordian;
