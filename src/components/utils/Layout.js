import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import GlobalStyle from "./GlobalStyle";
import SEO from "./Seo";

function Layout({ children }) {
	return (
		<>
			<GlobalStyle />
			<SEO />
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default Layout;
