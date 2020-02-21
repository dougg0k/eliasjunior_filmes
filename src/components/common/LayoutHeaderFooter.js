import React from "react";
import Footer from "../Footer";
import Header from "../Header";

function LayoutHeaderFooter({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutHeaderFooter;
