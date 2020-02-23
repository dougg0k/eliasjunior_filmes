import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import CommonVideos from "../components/common/CommonVideos";
import Container from "../components/common/Container";
import Title from "../components/common/Title";
import SEO from "../components/utils/Seo";
import { normalizeGraphQLData } from "../utils/helpers";

function VideoClipesPage() {
	const data = useStaticQuery(graphql`
		query VideoClipesQuery {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "videoclipes" } } }
				sort: { order: DESC, fields: [frontmatter___createdAt] }
			) {
				edges {
					node {
						frontmatter {
							title
							url
						}
					}
				}
			}
		}
	`);
	const videoclipes = normalizeGraphQLData(data.allMarkdownRemark.edges);
	return (
		<Container>
			<SEO title="Videoclipes" />
			<Title>Videoclipes</Title>
			<CommonVideos videos={videoclipes} title="Videoclipes" />
		</Container>
	);
}

export default VideoClipesPage;
