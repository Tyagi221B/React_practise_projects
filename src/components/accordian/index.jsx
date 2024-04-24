import { useState } from "react";
import data from "./data";

export default function Accordian() {
	const [selected, setSelected] = useState(null);
	const [enableMultipleSelection, setEnableMultipleSelection] =
		useState(false);
	const [multiple, setMultiple] = useState([]);

	function handleSingleSelection(getCurrentId) {
		setSelected((prevSelected) =>
			prevSelected === getCurrentId ? null : getCurrentId
		);
	}

	function handleMultiSelection(getCurrentId) {
		let copyMultiple = [...multiple];
		const findIndexofCurrentId = copyMultiple.indexOf(getCurrentId);
		// console.log(findIndexofCurrentId);
		if (findIndexofCurrentId === -1) copyMultiple.push(getCurrentId);
		else copyMultiple.splice(findIndexofCurrentId, 1);

		setMultiple(copyMultiple);
	}

	function handleReset() {
		setSelected(null);
		setMultiple([]);
	}
    
	return (
		<div className="wrapper h-full pb-10 bg-black text-white flex flex-col justify-center items-center">
			<div className="Heading text-8xl relative top-0 text-amber-800">
				Accordian
			</div>
			<div>
				{
					<div className="flex mb-6 mt-6 items-center">
						<div className="mx-2 p-2 border border-white rounded-md hover:bg-orange-700">
							<input
								className="mx-2 "
								type="checkbox"
								checked={!enableMultipleSelection}
								onChange={() =>
									setEnableMultipleSelection(false)
								}
							/>
							<button
								onClick={() =>
									setEnableMultipleSelection(false)
								}
							>
								Enable Single Selection
							</button>
						</div>
						<div className="mx-2 p-2 border border-white rounded-md hover:bg-orange-700">
							<input
								className="mx-2 "
								type="checkbox"
								checked={enableMultipleSelection}
								onChange={() =>
									setEnableMultipleSelection(true)
								}
							/>
							<button
								onClick={() => setEnableMultipleSelection(true)}
							>
								Enable Multiple Selection
							</button>
						</div>
						<div className="">
							<button
								onClick={handleReset}
								className="bg-red-700 cursor-pointer rounded-md hover:bg-red-500 ml-3 px-4 py-1"
							>
								Reset
							</button>
						</div>
					</div>
				}
			</div>
			<div className="accordian border-2 border-white py-2 px-2 w-1/2">
				{data && data.length > 0 ? (
					data.map((dataItem) => (
						<div
							key={dataItem.id}
							className="item cursor-pointer border border-slate-400 m-2 py-2 px-2"
						>
							<div
								onClick={
									enableMultipleSelection
										? () =>
												handleMultiSelection(
													dataItem.id
												)
										: () =>
												handleSingleSelection(
													dataItem.id
												)
								}
								className="title flex justify-between"
							>
								<h3>{dataItem.question}</h3>
								<button className="w-fit bg-blue-700 px-1 rounded-md hover:underline hover:scale-105 font-bold py-1">
									{" "}
									{selected === dataItem.id ||
									multiple.indexOf(dataItem.id) !== -1
										? "Shrink"
										: "Expand"}
								</button>
							</div>
							{enableMultipleSelection
								? multiple.indexOf(dataItem.id) !== -1 && (
										<div className="bg-green-700 rounded-md px-1">
											{" "}
											{dataItem.answer}
										</div>
								)
								: selected == dataItem.id && (
										<div className="bg-green-700 rounded-md px-1">
											{dataItem.answer}
										</div>
								)}
						</div>
					))
				) : (
					<div>No data found</div>
				)}
			</div>
		</div>
	);
}
