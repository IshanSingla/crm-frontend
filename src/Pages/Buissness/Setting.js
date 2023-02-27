import { useEffect, useState } from "react";
import { BuissnessApi } from "../../Api";
import { toast } from "react-toastify";

export default function Settings() {
	const [data, setData] = useState();
	useEffect(() => {
		BuissnessApi().then((publicApi) => {
			publicApi
				.get(`/`)
				.then((res) => {
					setData(res.data.buissness);
				})
				.catch((err) => {
					toast.error(err.message);
				});
		});
	}, []);
	return data ? (
		<div className="settings">
			<div className="w-[100%] flex justify-center">
				<div className="w-fit bg-white shadow-xl rounded-2xl">
					<div className="p-5 h-full">
						<div className="grid-cols-2 grid gap-10">
							<div className="name font-bold">Name</div>
							<div className="value">{data.buissnessName}</div>
						</div>

						<div className="grid grid-cols-2 gap-10">
							<div className="name font-bold">Email</div>
							<div className="value">{data.buissnessContact.email}</div>
						</div>

						<div className="grid grid-cols-2 gap-10">
							<div className="name font-bold">Phone Number</div>
							<div className="value">
								+{data.buissnessContact.phone.code}{" "}
								{data.buissnessContact.phone.number}
							</div>
						</div>

						<div className="grid grid-cols-2 gap-10">
							<div className="name font-bold">buissness Gst</div>
							<div className="value">{data.buissnessGst}</div>
						</div>

						<div className="grid grid-cols-2 gap-10">
							<div className="name font-bold">buissness Pan</div>
							<div className="value">{data.buissnessPan}</div>
						</div>

						<div className="grid grid-cols-2 gap-10">
							<div className="name font-bold">buissness Address</div>
							<div className="value">{data.buissnessAddress ?? "None"}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className="h-fit justify-center items-center flex ">Loader</div>
	);
}
