import React from "react";
function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center" style={{marginTop: 0}}>
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; 
				{/** <{new Date().getFullYear()} **/}
				<a
					href="https://www.linkedin.com/in/david-moses-38a542167/"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
					style={{color: '#6B7280', fontWeight: '500', fontSize: '16px'}}
				>
					2021 MovieBox by Segun Moses
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
