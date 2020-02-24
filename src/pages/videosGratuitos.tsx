import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import CommonVideos from "../components/common/CommonVideos";
import Container from "../components/common/Container";
import Title from "../components/common/Title";
import SEO from "../components/utils/Seo";
import { COLOR_1, WHITE_COLOR } from "../utils/colors";

const ItemContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	flex-direction: column;
`;

const SubTitle = styled.h2`
	background-color: ${COLOR_1};
	color: ${WHITE_COLOR};
	text-align: center;
	text-transform: capitalize;
	padding: 10px 0;
`;

function VideosGratuitosPage() {
	const data = useStaticQuery(graphql`
		query VideosGratuitosQuery {
			allMarkdownRemark(
				filter: { frontmatter: { freeContent: { eq: true } } }
			) {
				nodes {
					parent {
						... on File {
							relativeDirectory
							childMarkdownRemark {
								frontmatter {
									title
									url
								}
							}
						}
					}
				}
			}
		}
	`);
	const freeData = data.allMarkdownRemark.nodes
		.map((item: any) => {
			const collectionName = item.parent.relativeDirectory;
			const objData = item.parent.childMarkdownRemark.frontmatter;
			return {
				[collectionName]: objData,
			};
		})
		.reduce((acc: any, curr: any) => {
			for (const key in curr) {
				const value = curr[key];
				if (Object.prototype.hasOwnProperty.call(acc, key)) {
					acc[key].push(value);
				} else {
					acc[key] = [value];
				}
			}
			return acc;
		}, {});
	return (
		<Container>
			<SEO title="Videos Gratuitos" />
			<Title>Pagina do Não Assinante</Title>
			{Object.keys(freeData).map(key => {
				const value = freeData[key];
				return (
					<ItemContainer key={key}>
						<SubTitle>{key}</SubTitle>
						<CommonVideos videos={value} />
					</ItemContainer>
				);
			})}
		</Container>
	);
}

export default VideosGratuitosPage;
