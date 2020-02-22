import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
const Container = styled.div``;

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
