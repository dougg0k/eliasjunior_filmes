import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import * as React from "react";
import styled from "styled-components";

const StyledImage = styled(Img)`
	border-radius: 50%;
`;

const PhotoLogo = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "photo_logo.webp" }) {
				childImageSharp {
					fluid(quality: 90) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	return <StyledImage fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default PhotoLogo;
