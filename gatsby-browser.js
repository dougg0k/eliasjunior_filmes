import React from "react";
import LayoutHeaderFooter from "./src/components/common/LayoutHeaderFooter";
import GlobalStyles from "./src/components/utils/GlobalStyle";
import SEO from "./src/components/utils/Seo";

export const wrapRootElement = ({ element }) => {
	return (
		<React.Fragment>
			<GlobalStyles />
			<SEO />
			<div id="modal-id" />
			<LayoutHeaderFooter>{element}</LayoutHeaderFooter>
		</React.Fragment>
	);
};
