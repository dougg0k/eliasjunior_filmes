import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Container from "../components/common/Container";
import SEO from "../components/utils/Seo";

function SeriesPage() {
	const data = useStaticQuery(graphql`
		query SeriesQuery {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "series" } } }
				sort: { order: ASC, fields: [frontmatter___createdAt] }
			) {
				edges {
					node {
						frontmatter {
							title
							episodes {
								title
							}
						}
					}
				}
			}
		}
	`);
	console.log(data);
	return (
		<Container>
			<SEO title="Series" />
		</Container>
	);
}

export default SeriesPage;
