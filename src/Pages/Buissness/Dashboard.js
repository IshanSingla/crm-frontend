import React from "react";
import { useState } from "react";
import BarChart from "./components/barChart";
import { UserData } from "./components/data";

export default function Dashboard(chartdata) {
	const [userData, setUserData] = useState({
		labels: UserData.map((data) => data.year),
		datasets: [
			{
				label: "Users Gained",
				data: UserData.map((data) => data.userGain),
			},
		],
	});
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-6">
				<BarChart chartData={userData} />
			</div>
		</div>
	);
}
