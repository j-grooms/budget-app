import React from 'react';

import { PieChart } from 'react-minimal-pie-chart';
import './chart.css'

const Chart = () => {
	return (
		<PieChart
			data=
			{[
				{ title: "Mandatory", value: 1200, color: "#E38627" },
				{ title: "Discretionary", value: 500, color: "#C13C37" },
				{ title: "Savings", value: 500, color: "#35D900" },
			]}
            label={(data) => data.dataEntry.title}
			paddingAngle={2}
            style={{ position: "relative" }}
            labelStyle={{ fontSize: "4px", fill: "#ffffff"}}
            labelPosition={50}
        >
            <div className="chart-inner-text">
                <p>$2200</p>
            </div>
		</PieChart>
	);
};

export default Chart;
