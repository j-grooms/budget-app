import React from "react";
import { useHistory } from 'react-router-dom';

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

	const labelStyle = {
		fontSize: "2pt",
		fontWeight: "700",
		fill: "#000000",
		textDecoration: "underline",
		cursor: "pointer",
	};

	const segmentsStyle = {cursor: "pointer"};

	const onClick = (e, index) => {
		history.push(`/category/${data[index].title.toLowerCase()}`)
	}

	return (
		// TODO: Build legend for chart?
		<PieChart
			// data, click handler
			data={data}
			onClick={onClick}
			segmentsStyle={segmentsStyle}

			// chart
			animate={true}
			startAngle={75} // start of 1st segment
			viewBoxSize={[150, 150]} // makes the resulting svg smaller
			totalValue={2800} // TODO: add user's monthly budget when API routes exist
			lineWidth={40} // makes the pie chart a donut chart


			// labels
			// label={(data) => data.dataEntry.title}
			// labelStyle={labelStyle}
			// labelPosition={78}
		/>
	);
};

export default Chart;
