import { useState } from "react";
import data from "../data/accordian.data";

function Accordian() {
  const [isOpen, setisOpen] = useState<number | null>(null);

  const handleOpen = (id : number) => {
    console.log(id)
    setisOpen(isOpen === id ? null : id)
  }
  return (
    <div>
      {data.map((accord) => (
        <div key={accord.id}>
          <div className="flex m-4">

            <div className="flex border border-red-500 w-32 justify-center items-center">{accord.question}</div>
            <button onClick={() => handleOpen(accord.id)} className="border border-pink-300 hover:bg-pink-300 hover:text-black">+</button>
          </div>
          <div >{isOpen === accord.id && <p className="border border-amber-300">{accord.answer}</p>}</div>
        </div>
      ))}
    </div>
  );
}

export default Accordian;
