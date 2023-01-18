import React from "react";
import { Outlet } from "react-router-dom";
import LogoHeader from "./mainpage/LogoHeader";
import HeaderNav from "./mainpage/HeaderNav";

const Header = () => {
	return (
		<>
			<LogoHeader />
			<HeaderNav />
			<Outlet />
		</>
	);
};

export default Header;
