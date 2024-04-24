import "./App.css";
import Accordian from "./components/accordian";
import RandomColorGenerator from "./components/randomColorGenerator";
import StarRating from "./components/starRaiting";

function App() {

    return (
        <>
            <div>
                {/* Accordian component */}
                <Accordian />

                <div className="w-full border"></div>

                {/* Random Color Generator Component  */}
                <RandomColorGenerator />

                <div className="w-full border"></div>

                {/* Star Rating Project  */}
                <StarRating noOfStars={8} />

                <div className="w-full border"></div>
            </div>
        </>
    );
}

export default App;
