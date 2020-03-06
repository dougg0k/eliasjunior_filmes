import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-background-image";
import * as React from "react";
import styled from "styled-components";

const StyledImg = styled(Img)`
	position: unset !important;
	background-size: contain;
	background-position: top;
	background-repeat: no-repeat;
	z-index: 0;
`;

const MainPhoto = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "banner.jpg" }) {
				childImageSharp {
					fluid(quality: 100, maxWidth: 2200) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	return <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default MainPhoto;
