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
	return (
		<div
			className={`EightBall EightBall-${color}`}
			onClick={() => {
				setText(genRandText(color));
			}}
		>
			<h1 className="EightBall-message">{text}</h1>
		</div>
	);
};

export default EightBall;
