import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import Container from "../components/common/Container";
import Title from "../components/common/Title";
import SEO from "../components/utils/Seo";
import { COLOR_1, COLOR_10 } from "../utils/colors";
import { normalizeGraphQLData } from "../utils/helpers";

const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0 50px;
`;

const ItemLink = styled(Link)`
	text-decoration: none;
	padding: 30px;
	font-size: 1.5em;
	font-weight: 600;
	background-color: ${COLOR_1};
	color: ${COLOR_10};
	margin: 30px;
	width: 150px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	border: 2px solid transparent;
	text-align: center;
	&:hover {
		border: 2px solid ${COLOR_1};
		background-color: ${COLOR_10};
		color: ${COLOR_1};
	}
`;

function AssinantePage() {
	const data = useStaticQuery(graphql`
		query AssinanteQuery {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "header" } } }
				sort: { order: ASC, fields: [frontmatter___createdAt] }
			) {
				edges {
					node {
						frontmatter {
							title
							path
						}
					}
				}
			}
		}
	`);
	const navigationItems = normalizeGraphQLData(data.allMarkdownRemark.edges);
	return (
		<Container>
			<SEO title="Assinante" />
			<Title>Pagina do Assinante</Title>
			<ContentContainer>
				{navigationItems.map(item => (
					<ItemLink key={item.path} to={item.path}>
						{item.title}
					</ItemLink>
				))}
			</ContentContainer>
		</Container>
	);
}

export default AssinantePage;
