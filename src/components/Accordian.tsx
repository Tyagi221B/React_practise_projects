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
    setopenAccordianList([])
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <p className="text-4xl text-center mb-6">Accordian</p>
      <div className="flex gap-3 text-green-500">
        <div className="flex items-center mb-4">
          <input
            id="singleSelection"
            type="radio"
            name="selectionMode"
            checked={!isMultiSelect}
            onChange={() => setisMultiSelect(false)}
            className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
          />
          <label
            htmlFor="singleSelection"
            className="select-none ms-2 text-sm font-medium text-heading"
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
            className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
          />
          <label
            htmlFor="multiSelection"
            className="select-none ms-2 text-sm font-medium text-heading"
          >
            Multi Selection
          </label>
        </div>
        <button 
          onClick={handlereset}
          className="bg-red-900 p-2 rounded-4xl text-white cursor-pointer ">Reset</button>
      </div>
      {data.map((accord) => (
        <div
          key={accord.id}
          className="mb-2 border border-gray-300 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => handleOpen(accord.id)}
            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="font-semibold text-gray-900 text-left">
              {accord.question}
            </span>
            <span className="text-xl font-bold text-gray-900 ml-4">
              {isOpen === accord.id || openAccordianList.includes(accord.id) ? "-" : "+"}
            </span>
          </button>

          {isMultiSelect ? (
            <div>
              {openAccordianList.includes(accord.id) && (
                <div className="p-4 bg-white border-t border-gray-200">
                  <p className="text-gray-900">{accord.answer}</p>
                </div>
              )}
            </div>
          ) : (
            <div>
              {isOpen === accord.id && (
                <div className="p-4 bg-white border-t border-gray-200">
                  <p className="text-gray-900">{accord.answer}</p>
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
