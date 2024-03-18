import React, { useEffect, useState } from "react";

function RandomColorGenerator() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#ffffff");

    const handleClick = (type) => {
        setTypeOfColor(type);
    };

    // useEffect(()=>{
    //     console.log(typeOfColor)
    // },[typeOfColor])

    const handleCreateRandomColor = () => {
        if (typeOfColor === "hex") {
            const randomColor =
                "#" + Math.floor(Math.random() * 16777215).toString(16);   //16777215 we are multilying by this number because by doing this it will generate the maximum possible value in hexadecimal which is FFFFFF . 
            setColor(randomColor);
        } else {
            const randomRed = Math.floor(Math.random() * 256);
            //in the rgb , the range is from 0 to 255 and math.random generates values between 0 to 1 where 1 is exclusive , that means the number will always be less than 256 , and that is what we want . 
            const randomGreen = Math.floor(Math.random() * 256);
            const randomBlue = Math.floor(Math.random() * 256);

            const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
            setColor(randomColor);
        }
    };

    return (
        <div className="wrapper w-screen h-screen bg-black flex justify-center items-center text-white">
            <div className="box w-1/2 h-4/5 rounded-md shadow-lg shadow-white flex flex-col p-10 items-center gap-8">
                <div className="title text-5xl mb-10">
                    Random Color Generator
                </div>
                <div className="container flex flex-col items-center border-2 border-white rounded-2xl h-4/6 w-3/4 gap-7">
                    <div className="buttonContainer flex justify-center items-center">

                        {/* Hex Button  */}

                        <button
                            onClick={() => handleClick("hex")}
                            className={`w-fit bg-green-600 cursor-pointer m-2 rounded px-2 py-1 hover:scale-105 ${typeOfColor === "hex" ? "bg-red-600 font-bold border-2 underline " : ""}`}
                        >
                            Hex
                        </button>

                        {/* RGB Button  */}

                        <button
                            onClick={() => handleClick("RGB")}
                            className=  {`w-fit bg-green-600 cursor-pointer m-2 rounded px-2 py-1 hover:scale-105 ${typeOfColor === "RGB" ? "bg-red-600 font-bold border-2 underline " : ""}`}
                        >
                            RGB
                        </button>

                        {/* Random Color Generator Button  */}

                        <button
                            onClick={handleCreateRandomColor}
                            className="w-fit bg-blue-600 cursor-pointer m-2 rounded hover:bg-blue-500 px-2 py-1 hover:scale-105"
                        >
                            Gererate Random Color
                        </button>
                    </div>
                    <div className="m-2 text-2xl hover:scale-105">{color}</div>

                    {/* screen  */}

                    <div
                        style={{ backgroundColor: color }}
                        className="screen h-1/3 w-1/3  rounded-md"
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default RandomColorGenerator;
