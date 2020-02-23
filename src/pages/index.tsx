import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Container from "../components/common/Container";
import HeroSection from "../components/HeroSection";

function IndexPage() {
	const data = useStaticQuery(graphql`
		query MainPageQuery {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "indexPage" } } }
			) {
				edges {
					node {
						frontmatter {
							videoUrl
						}
					}
				}
			}
		}
	`);

	return (
		<Container>
			<HeroSection
				videoUrl={data.allMarkdownRemark.edges[0].node.frontmatter.videoUrl}
			/>
		</Container>
	);
}

export default IndexPage;
