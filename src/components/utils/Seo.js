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
					}
				}
			}
		`,
	);

	const metaDescription = site.siteMetadata.description || description;
	const metaAuthor = site.siteMetadata.author || "";
	const metaTitle = title && title.length > 0 ? title : site.siteMetadata.title;

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
			].concat(meta)}
		/>
	);
}

export default SEO;
