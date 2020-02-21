/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import GlobalStyles from "./src/components/utils/GlobalStyle";
import SEO from "./src/components/utils/Seo";

export const wrapRootElement = ({ element }) => {
	return (
		<React.Fragment>
			<GlobalStyles />
			<SEO />
			<div id="modal-id" />
			<Header />
			{element}
			<Footer />
		</React.Fragment>
	);
};
