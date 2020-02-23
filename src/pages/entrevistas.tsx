import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import CommonVideos from "../components/common/CommonVideos";
import Container from "../components/common/Container";
import Title from "../components/common/Title";
import SEO from "../components/utils/Seo";
import { normalizeGraphQLData } from "../utils/helpers";

function EntrevistasPage() {
	const data = useStaticQuery(graphql`
		query EntrevistasQuery {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "entrevistas" } } }
				sort: { order: ASC, fields: [frontmatter___createdAt] }
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
	const entrevistas = normalizeGraphQLData(data.allMarkdownRemark.edges);
	return (
		<Container>
			<SEO title="Entrevistas" />
			<Title>Entrevistas</Title>
			<CommonVideos videos={entrevistas} />
		</Container>
	);
}

export default EntrevistasPage;
