import React from "react";
import "./Tracker.css";

const Tracker = ({ records }) => {
	return (
		<div className="Tracker">
			<div className="Tracker-col Tracker-green">
				<h1>Green: {records.green}</h1>
			</div>
			<div className="Tracker-col Tracker-goldenrod">
				<h1>Goldenrod: {records.goldenrod}</h1>
			</div>
			<div className="Tracker-col Tracker-red">
				<h1>Red: {records.red}</h1>
			</div>
		</div>
	);
};

export default Tracker;
