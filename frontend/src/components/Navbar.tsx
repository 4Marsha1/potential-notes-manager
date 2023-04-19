import React, { FunctionComponent, ReactElement } from "react";

const Navbar: FunctionComponent = (): ReactElement => {
	return (
		<div className="flex justify-between items-center bg-slate-800 text-gray-200 px-8 py-6">
			<span className="text-4xl font-extrabold leading-8">Notes Manager</span>
			<input
				type="text"
				placeholder="Filter by tags..."
				className="w-1/3 px-8 py-2 bg-slate-600 outline-none text-gray-100 text-md font-bold leading-6 rounded-lg"
			/>
		</div>
	);
};

export default Navbar;
