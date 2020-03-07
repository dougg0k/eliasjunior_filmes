import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { StyledIcon } from "styled-icons/types";
import { COLOR_1, WHITE_COLOR } from "../../utils/colors";
import {
	addIconsToItems,
	getCurrentYear,
	normalizeGraphQLData,
} from "../../utils/helpers";
import PhotoLogo from "../common/PhotoLogo";

const Container = styled.footer`
	width: 100%;
	height: 350px;
	background-color: ${COLOR_1};
	position: relative;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	z-index: 90;
	@media (max-width: 1370px) {
		height: auto;
		padding-top: 20px;
		padding-bottom: 20px;
	}
`;

const PhotoLogoContainer = styled.div`
	width: 120px;
	height: auto;
	margin-bottom: 20px;
`;

const LinksContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: 100px;
	flex-direction: column;
	width: 60%;
	@media (max-width: 1370px) {
		width: 100%;
		height: auto;
	}
`;

interface AnchorProps {
	disabled: boolean;
}

const Anchor = styled.a`
	color: ${WHITE_COLOR};
	padding: 5px;
	text-decoration: none;
	width: 300px;
	display: flex;
	align-items: center;
	align-self: center;
	pointer-events: ${({ disabled }: AnchorProps) =>
		disabled ? "none" : "auto"};
	@media (max-width: 1370px) {
		width: auto;
	}
`;

const AnchorText = styled.span`
	margin-left: 5px;
`;

const FooterTitle = styled.span`
	color: ${WHITE_COLOR};
	font-size: 1.2em;
	padding: 10px 0;
`;

const BottomMessage = styled.span`
	color: ${WHITE_COLOR};
	font-size: 1em;
	font-size: 600;
	margin-top: 5px;
	margin-right: 5px;
`;

const BottomContainer = styled.div`
	display: flex;
	flex-direction: row;
	text-align: center;
	padding-bottom: 20px;
	padding-top: 20px;
	@media (max-width: 500px) {
		flex-direction: column;
	}
`;

interface FooterProps {
	url: string;
	text: string;
	icon: StyledIcon;
}

function Footer() {
	const data = useStaticQuery(graphql`
		query FooterQuery {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "footer" } } }
				sort: { order: ASC, fields: [frontmatter___createdAt] }
			) {
				edges {
					node {
						frontmatter {
							text
							url
						}
					}
				}
			}
		}
	`);
	const footerData = addIconsToItems(
		normalizeGraphQLData(data.allMarkdownRemark.edges),
	);
	const currentYear = getCurrentYear();
	return (
		<Container>
			<FooterTitle>Diretor Elias Junior</FooterTitle>
			<PhotoLogoContainer>
				<PhotoLogo />
			</PhotoLogoContainer>
			<LinksContainer>
				{footerData.map(({ url, text, icon: Icon }: FooterProps) => {
					const IconStyled = styled(Icon)`
						height: 35px;
						width: 35px;
					`;
					return (
						<Anchor
							key={text}
							href={url}
							target="_blank"
							rel="noreferrer"
							aria-label={text}
							disabled={!url || url.length === 0}
						>
							<IconStyled />
							<AnchorText>{text}</AnchorText>
						</Anchor>
					);
				})}
			</LinksContainer>
			<BottomContainer>
				<BottomMessage>
					Copyright &copy; {currentYear} HDV Studio Cine Video LTDA.
				</BottomMessage>
				<BottomMessage>Todos os Direitos Reservados.</BottomMessage>
			</BottomContainer>
		</Container>
	);
}

export default Footer;
