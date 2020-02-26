import React from "react";
import GlobalStyles from "./src/components/utils/GlobalStyle";
import LayoutHeaderFooter from "./src/components/utils/LayoutHeaderFooter";
import SEO from "./src/components/utils/Seo";

export const wrapRootElement = ({ element }) => {
	return (
		<React.Fragment>
			<GlobalStyles />
			<SEO />
			<LayoutHeaderFooter>{element}</LayoutHeaderFooter>
		</React.Fragment>
	);
};
