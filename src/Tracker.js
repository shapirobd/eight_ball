import React from "react";

const Tracker = ({ records }) => {
	console.log(records);
	return (
		<div className="Tracker">
			<div className="Tracker-col">
				<h1>Green: {records.green}</h1>
			</div>
			<div className="Tracker-col">
				<h1>Goldenrod: {records.goldenrod}</h1>
			</div>
			<div className="Tracker-col">
				<h1>Red: {records.red}</h1>
			</div>
		</div>
	);
};

export default Tracker;
