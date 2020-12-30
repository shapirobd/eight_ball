import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
	const [color, setColor] = useState("black");
	const [text, setText] = useState("Think of a Question");

	const genRandText = () => {
		const rand = Math.floor(Math.random() * answers.length);
		setColor(answers[rand].color);
		return answers[rand].msg;
	};

	const reset = () => {
		setText("Think of a Question");
		setColor("black");
	};

	return (
		<>
			<div
				className={`EightBall EightBall-${color}`}
				onClick={() => {
					setText(genRandText(color));
				}}
			>
				<h1 className="EightBall-message">{text}</h1>
			</div>
			<button onClick={reset}>Reset</button>
		</>
	);
};

export default EightBall;
