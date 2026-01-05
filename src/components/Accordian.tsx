import { useState } from "react";
import data from "../data/accordian.data";

function Accordian() {
  const [isOpen, setisOpen] = useState<number | null>(null);
  const [isMultiSelect, setisMultiSelect] = useState(false);
  const [openAccordianList, setopenAccordianList] = useState<number[]>([]);

  const handleOpen = (id: number) => {
    if (isMultiSelect) {
      if (openAccordianList.includes(id)) {
        setopenAccordianList(openAccordianList.filter((s) => s !== id));
      } else {
        setopenAccordianList([...openAccordianList, id]);
      }
    } else {
      setisOpen(isOpen === id ? null : id);
    }
  };

  const handlereset = () => {
    setopenAccordianList([]);
    setisOpen(null);
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <h1 className="text-6xl font-bold text-center text-gray-200 mb-8 tracking-widest">Accordion</h1>

      <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex gap-6">
            <div className="flex items-center">
              <input
                id="singleSelection"
                type="radio"
                name="selectionMode"
                checked={!isMultiSelect}
                onChange={() => setisMultiSelect(false)}
                className="w-4 h-4 text-blue-600 cursor-pointer"
              />
              <label
                htmlFor="singleSelection"
                className="ms-2 text-sm font-medium text-gray-900 cursor-pointer"
              >
                Single Selection
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="multiSelection"
                type="radio"
                name="selectionMode"
                checked={isMultiSelect}
                onChange={() => setisMultiSelect(true)}
                className="w-4 h-4 text-blue-600 cursor-pointer"
              />
              <label
                htmlFor="multiSelection"
                className="ms-2 text-sm font-medium text-gray-900 cursor-pointer"
              >
                Multi Selection
              </label>
            </div>
          </div>
          <button
            onClick={handlereset}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
      {data.map((accord) => (
        <div
          key={accord.id}
          className="mb-3 border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => handleOpen(accord.id)}
            className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 text-left text-base">
              {accord.question}
            </span>
            <span className="text-2xl font-bold text-gray-700 ml-4 shrink-0">
              {(isMultiSelect ? (openAccordianList.includes(accord.id) ? "-" : "+") : (isOpen === accord.id) ? "-" : "+")}
            </span>
          </button>

          {isMultiSelect ? (
            <div>
              {openAccordianList.includes(accord.id) && (
                <div className="p-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{accord.answer}</p>
                </div>
              )}
            </div>
          ) : (
            <div>
              {isOpen === accord.id && (
                <div className="p-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{accord.answer}</p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordian;
