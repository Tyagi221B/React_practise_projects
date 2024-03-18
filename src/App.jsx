import { useState } from 'react'
import './App.css'
import Accordian from './components/accordian'
import RandomColorGenerator from './components/randomColorGenerator'
import StarRating from './components/starRaiting'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div>

    {/* Accordian component */}
    <Accordian/>

    <div className='w-full border'></div>

    {/* Random Color Generator Component  */}
    <RandomColorGenerator/>

    <div className='w-full border'></div>

    {/* Star Rating Project  */}
    <StarRating noOfStars={5}/>

   </div>
   </>
  )
}

export default App
