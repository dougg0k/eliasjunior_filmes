import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

function SEO({ description = "", lang = "pt-br", meta = [], title = "" }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						siteUrl
						keywords
					}
				}
			}
		`,
	);

	const metaDescription = site.siteMetadata.description || description;
	const metaAuthor = site.siteMetadata.author || "";
	const metaTitle = title && title.length > 0 ? title : site.siteMetadata.title;
	const keywords = site.siteMetadata.keywords || "";

	return (
		<Helmet
			defer={false}
			htmlAttributes={{
				lang,
			}}
			bodyAttributes={{
				id: "main-body",
			}}
			title={metaTitle}
			titleTemplate={
				title && title.length > 0 ? `%s | ${site.siteMetadata.title}` : null
			}
			meta={[
				{
					name: `author`,
					content: metaAuthor,
				},
				{
					name: `description`,
					content: metaDescription,
				},
				{
					name: `keywords`,
					content: keywords,
				},
				{
					property: `og:title`,
					content: metaTitle,
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
					property: `og:url`,
					content: site.siteMetadata.siteUrl,
				},
			].concat(meta)}
		/>
	);
}

export default SEO;
