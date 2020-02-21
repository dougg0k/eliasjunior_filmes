import { Link } from "gatsby";
import * as React from "react";
import ReactPlayer from "react-player";
import Typical from "react-typical";
import styled from "styled-components";
import { COLOR_1, COLOR_3, WHITE_COLOR } from "../../utils/colors";
import { HEADER_HEIGHT } from "../../utils/constants";
import { getResponsiveIframeSize, useWindowSize } from "../../utils/helpers";
import AssineButton from "../common/AssineButton";
import MainPhoto from "../common/MainPhoto";

const Container = styled.div`
	width: 100%;
	position: relative;
	background-color: ${COLOR_3};
	height: 100%;
	margin-top: ${HEADER_HEIGHT}px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	padding-top: 320px;
	padding-bottom: 100px;
	@media (max-width: 1370px) {
		flex-direction: column-reverse;
		padding-top: 200px;
	}
`;

const IframeContainer = styled.div`
	z-index: 10;
	margin-top: -100px;
	width: 45%;
	@media (max-width: 1370px) {
		width: unset;
		margin-top: 0;
	}
	@media (max-width: 820px) {
		margin-top: -50px;
	}
`;

const PlayerStyled = styled(ReactPlayer)`
	box-shadow: 0 0 10px ${COLOR_1};
`;

const ContentContainer = styled.div`
	height: 420px;
	width: 50%;
	z-index: 10;
	display: flex;
	flex-direction: column;
	height: 100%;
	align-items: center;
	justify-content: center;
	@media (max-width: 1370px) {
		margin-top: 50px;
		width: 100%;
	}
`;

const TextContainer = styled.div`
	background-color: ${COLOR_1};
	width: 85%;
	display: flex;
	box-shadow: 0 0 10px ${COLOR_1};
	flex-direction: column;
	padding: 20px 0;
	@media (max-width: 1370px) {
		width: 100%;
	}
`;

const StyledTypical = styled(Typical)`
	font-size: 2em;
	font-weight: 600;
	width: 100%;
	height: auto;
	color: ${WHITE_COLOR};
	display: block;
	height: 40px;
	text-decoration: underline;
`;

const AdditionalText = styled.span`
	font-size: 2em;
	font-weight: 600;
	color: ${WHITE_COLOR};
	margin-right: 8px;
	height: 40px;
`;

const SecondAdditionalText = styled.span`
	font-size: 2em;
	font-weight: 600;
	color: ${WHITE_COLOR};
	word-wrap: break-word;
	text-indent: 50px;
	padding-left: 150px;
	@media (max-width: 1370px) {
		text-indent: unset;
		padding-left: 50px;
	}
`;

const TopTextContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding-left: 50px;
`;

const ButtonContainer = styled.div`
	margin-top: 80px;
	display: flex;
	flex-direction: row;
	text-align: center;
`;

interface CommonButtonsProps {
	alternative: boolean;
}

const Button = styled(Link)`
	font-size: 1.5em;
	margin-left: 15px;
	padding: 10px 20px;
	border-radius: 5px;
	background-color: ${(props: CommonButtonsProps) =>
		props.alternative ? WHITE_COLOR : COLOR_1};
	color: ${(props: CommonButtonsProps) =>
		props.alternative ? COLOR_1 : WHITE_COLOR};
	outline: none;
	border: ${(props: CommonButtonsProps) =>
		props.alternative ? `2px solid ${COLOR_1}` : 0};
	text-decoration: none;
	&:hover {
		cursor: pointer;
	}
`;

const typicalSteps = [
	"Filmes",
	1000,
	"Series",
	1000,
	"Documentarios",
	1000,
	"Videoclipes",
	1000,
	"Cursos",
	1000,
	"Especiais",
	1000,
	"Entrevistas",
	1000,
];

function HeroSection() {
	const { width } = useWindowSize();
	const { responsiveHeight, responsiveWidth } = getResponsiveIframeSize(
		width || 0,
	);
	return (
		<Container>
			<MainPhoto />
			<ContentContainer>
				<TextContainer>
					<TopTextContainer>
						<AdditionalText>Temos</AdditionalText>
						<StyledTypical
							steps={typicalSteps}
							loop={Infinity}
							wrapper="span"
						/>
					</TopTextContainer>
					<SecondAdditionalText>
						da Rota, do GATE, do Canil e de outras unidades das nossas policias.
					</SecondAdditionalText>
				</TextContainer>
				<ButtonContainer>
					<AssineButton to="/inscricao" />
				</ButtonContainer>
				<ButtonContainer>
					<Button to="/assinante" alternative={false}>
						Videos para assinantes
					</Button>
					<Button to="/videosGratuitos" alternative>
						Videos para não assinantes
					</Button>
				</ButtonContainer>
			</ContentContainer>
			<IframeContainer>
				<PlayerStyled
					url="https://player.vimeo.com/video/372041420"
					width={responsiveWidth}
					height={responsiveHeight}
					controls
				/>
			</IframeContainer>
		</Container>
	);
}

export default HeroSection;
