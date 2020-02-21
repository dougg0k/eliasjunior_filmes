import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

function SEO({ description = "", lang = "en", meta = [], title = "" }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`,
	);

	const metaDescription = description || site.siteMetadata.description;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title && title.length > 0 ? title : site.siteMetadata.title}
			titleTemplate={
				title && title.length > 0 ? `%s | ${site.siteMetadata.title}` : null
			}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		/>
	);
}

export default SEO;
