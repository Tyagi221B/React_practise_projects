import Accordian from "./components/Accordian"
import RandomColorGenerator from "./components/RandomColorGenerator"

function App() {

  return (
    <div className="h-full py-8 flex flex-col items-center justify-center bg-black text-gray-100">
      <div className="text-4xl text-gray-400">This is a fresh start for getting my powers back.</div>
      <Accordian/>
      <RandomColorGenerator/>
    </div>
  )
}

export default App
