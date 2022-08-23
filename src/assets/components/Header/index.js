import React from "react";
import Nav from "../Nav";

function Header({ currentPage, changePage }) {
	return (
		<header className="flex-row px-2">
			<h1>
				<a href="/">Welcome</a>
			</h1>
			<Nav
				currentPage={currentPage}
				changePage={changePage}
			/>
		</header>
	);
}

export default Header;