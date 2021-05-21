import React from "react";
import { useHistory } from "react-router-dom";

import { PieChart } from "react-minimal-pie-chart";
import "./chart.css";

const Chart = () => {
	let history = useHistory();

	// TODO: iterpolate user data from API
	const data = [
		{ title: "Mandatory", value: 1200, color: "#E38627" },
		{ title: "Discretionary", value: 500, color: "#C13C37" },
		{ title: "Savings", value: 500, color: "#35D900" },
	];

	// const labelStyle = {
	// 	fontSize: "2pt",
	// 	fontWeight: "700",
	// 	fill: "#000000",
	// 	textDecoration: "underline",
	// 	cursor: "pointer",
	// };

	const segmentsStyle = { cursor: "pointer" };

	const onClick = (e, index) => {
		history.push(`/category/${data[index].title.toLowerCase()}`);
	};

	return (
		<div className="chart-container">
			<PieChart
				// data, click handler
				data={data}
				onClick={onClick}
				segmentsStyle={segmentsStyle}

				// chart
				animate={true}
				startAngle={75} // start of 1st segment
				totalValue={2500} // TODO: add user's monthly budget when API routes exist
				lineWidth={35} // makes the pie chart a donut chart
			/>

			<div className="chart-legend">
				<p>Mandatory: {data[0].value}</p>
				<p>Discretionary: {data[1].value}</p>
				<p>Savings: {data[2].value}</p>
			</div>
		</div>
	);
};

export default Chart;
