import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import CommonVideos from "../components/common/CommonVideos";
import Container from "../components/common/Container";
import SEO from "../components/utils/Seo";
import { normalizeGraphQLData } from "../utils/helpers";

function PalestrasPage() {
	const data = useStaticQuery(graphql`
		query PalestrasQuery {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "palestras" } } }
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
	const palestras = normalizeGraphQLData(data.allMarkdownRemark.edges);
	return (
		<Container>
			<SEO title="Palestras" />
			<CommonVideos videos={palestras} />
		</Container>
	);
}

export default PalestrasPage;
