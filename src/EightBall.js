import React, { useState } from "react";
import Tracker from "./Tracker";
import "./EightBall.css";

const EightBall = ({ answers }) => {
	const [color, setColor] = useState("black");
	const [text, setText] = useState("Think of a Question");
	const [greenCount, setGreenCount] = useState(0);
	const [goldenrodCount, setGoldenrodCount] = useState(0);
	const [redCount, setRedCount] = useState(0);

	const click = () => {
		const rand = Math.floor(Math.random() * answers.length);
		const newColor = answers[rand].color;
		setColor(newColor);
		setText(answers[rand].msg);
		const func = setFunctions[newColor];
		func(records[newColor] + 1);
	};

	const reset = () => {
		setText("Think of a Question");
		setColor("black");
		setGreenCount(0);
		setGoldenrodCount(0);
		setRedCount(0);
		records.green = 0;
		records.goldenrod = 0;
		records.red = 0;
	};

	const setFunctions = {
		green: setGreenCount,
		goldenrod: setGoldenrodCount,
		red: setRedCount,
	};

	const records = {
		green: greenCount,
		goldenrod: goldenrodCount,
		red: redCount,
	};
	return (
		<>
			<Tracker records={records} />
			<div className={`EightBall EightBall-${color}`} onClick={click}>
				<h1 className="EightBall-message">{text}</h1>
			</div>
			<button onClick={reset}>Reset</button>
		</>
	);
};

export default EightBall;
