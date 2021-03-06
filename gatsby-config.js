const netlifyCmsPaths = {
	resolve: `gatsby-plugin-netlify-cms-paths`,
	options: {
		cmsConfig: `/static/admin/config.yml`,
	},
};

module.exports = {
	siteMetadata: {
		title: `Elias Junior Filmes`,
		description: `Filmes, series, documentarios, videoclipes, cursos, especiais e entrevista da Rota, do GATE, do Canil e de outras unidades das nossa policias.`,
		author: `Douglas Galdino`,
		siteUrl: `https://eliasjuniorfilmes.com.br`,
		keywords: `policia, rota, filmes, series, documentarios, videoclipes, cursos`,
		social: {
			facebook: `https://www.facebook.com/diretoreliasjunior/`,
			facebook_two: `https://www.facebook.com/rotaforcapolicial/`,
			youtube: `https://www.youtube.com/user/rotafilme`,
			youtube_two: `https://www.youtube.com/channel/UC3SsV_4GMU0yKmiKWx5jcug`,
			instagram: `https://www.instagram.com/diretoreliasjunior/?hl=pt-br`,
			instagram_two: `https://www.instagram.com/eliasjuniorfilmes/?hl=pt-br`,
			vimeo: `https://vimeo.com/eliasjuniorfilmes`,
		},
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-netlify`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-robots-txt`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/static/content`,
			},
		},
		`gatsby-plugin-react-svg`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				component: require.resolve(`./src/components/utils/Layout`),
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Elias Junior Filmes`,
				short_name: `Elias Junior Filmes`,
				start_url: `/`,
				background_color: `#282c34`,
				theme_color: `#282c34`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Open Sans`,
						variants: [`300`, `400`, `600`, `700`],
					},
				],
			},
		},
		`gatsby-plugin-remove-generator`,
		{
			resolve: "gatsby-plugin-eslint",
			options: {
				test: /\.ts$|\.tsx$/,
				exclude: /(node_modules|.cache|public)/,
				stages: ["develop"],
				options: {
					emitWarning: true,
					failOnError: false,
				},
			},
		},
	],
};
