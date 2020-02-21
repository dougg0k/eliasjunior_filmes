import * as React from "react";
import styled from "styled-components";
import { COLOR_1, WHITE_COLOR } from "../../utils/colors";
import { footerData } from "../../utils/data";
import PhotoLogo from "../common/PhotoLogo";

const Container = styled.footer`
	width: 100%;
	height: 280px;
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
	margin-bottom: 30px;
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

function Footer() {
	return (
		<Container>
			<PhotoLogoContainer>
				<PhotoLogo />
			</PhotoLogoContainer>
			<LinksContainer>
				{footerData.map(({ link, text, icon: Icon }) => {
					const IconStyled = styled(Icon)`
						height: 35px;
						width: 35px;
					`;
					return (
						<Anchor
							key={text}
							href={link}
							target="_blank"
							rel="noreferrer"
							aria-label={text}
							disabled={!link || link.length === 0}
						>
							<IconStyled />
							<AnchorText>{text}</AnchorText>
						</Anchor>
					);
				})}
			</LinksContainer>
		</Container>
	);
}

export default Footer;
