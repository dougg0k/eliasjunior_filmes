import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import CommonVideos from "../components/common/CommonVideos";
import Container from "../components/common/Container";
import SEO from "../components/utils/Seo";
import { normalizeGraphQLData } from "../utils/helpers";

function MakingOfPage() {
	const data = useStaticQuery(graphql`
		query MakingOfQuery {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "makingof" } } }
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
	const makingOf = normalizeGraphQLData(data.allMarkdownRemark.edges);
	return (
		<Container>
			<SEO title="Making Of" />
			<CommonVideos videos={makingOf} />
		</Container>
	);
}

export default MakingOfPage;
