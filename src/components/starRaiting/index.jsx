import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(currentIndex) {
        // console.log(`${currentIndex} handleClick`);
        setRating(currentIndex);
    }
    function handleMuseEnter(currentIndex) {
        // console.log(`${currentIndex} mouse enter`);
        setHover(currentIndex);
    }
    function handleMouseLeave(currentIndex) {
        // console.log(`${currentIndex} mouse leave`);
        setHover(0);
    }

    return (
        <div className="star-raiting flex flex-col bg-black text-white justify-center p-10">
            <div>
                {[...Array(noOfStars)].map((_, index) => {
                    index = index + 1;
                    return (
                        <FaStar
                            key={index}
                            className={`
                                    ${
                                        index <= (hover || rating)
                                            ? "text-yellow-500"
                                            : "text-white"
                                    }
                                        inline
                                
`}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMuseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            size={40}
                        />
                    );
                })}
            </div>
            <div className=" m-4 text-yellow-300">{`You gave ${rating} star`}</div>
            {rating >= 3 &&(
                
                <div className="flex flex-col gap-1">
                    {/* {console.log(`rated ${rating}`)} */}
                    <h3>Contact me to offer work :</h3>
                    <a href="mailto:asmittyagi.dev@gmail.com" >Email : <span className="text-orange-600 hover:text-blue-700 cursor-pointer ">asmittyagi.dev@gmail.com</span></a>
                    <a href="tel:6396591516" >Phone : <span className="text-orange-600 hover:text-blue-700 cursor-pointer ">6396591516</span></a>
                </div>
            ) }
        </div>
    );
}
