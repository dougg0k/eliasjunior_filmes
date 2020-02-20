/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react";
import GlobalStyles from "./src/components/utils/GlobalStyle";
import SEO from "./src/components/utils/Seo";

export const wrapRootElement = ({ element }) => {
	return (
		<React.Fragment>
			<GlobalStyles />
			<SEO />
			{element}
		</React.Fragment>
	);
};
