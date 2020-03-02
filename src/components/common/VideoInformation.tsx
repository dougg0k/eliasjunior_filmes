import React from "react";
import styled from "styled-components";
import { COLOR_5, COLOR_6 } from "../../utils/colors";
import SwitchButton from "./SwitchButton";

const Title = styled.span`
	color: ${COLOR_5};
	font-size: 1.6em;
	font-weight: 600;
	text-align: center;
`;

const Description = styled.span`
	color: ${COLOR_6};
	font-size: 1em;
	font-weight: 500;
	text-align: justify;
	line-height: 1.25;
	width: 50%;
	padding-top: 10px;
	@media (max-width: 1200px) {
		width: 60%;
	}
	@media (max-width: 768px) {
		width: 80%;
	}
	@media (max-width: 600px) {
		width: 60%;
	}
	@media (max-width: 440px) {
		width: 50%;
	}
`;

const InformationContainer = styled.div`
	margin-top: 25px;
	display: flex;
	flex-direction: column;
	position: relative;
	justify-content: center;
	align-items: center;
`;

const TopInformation = styled.div`
	display: flex;
	flex-direction: column-reverse;
	position: relative;
	justify-content: center;
	align-items: center;
	width: 700px;
`;

interface Props {
	title?: string;
	description?: string;
	firstOnClick: () => void;
	secondOnClick: () => void;
	isTrailer: boolean;
	showButton?: boolean;
	mainButtonText?: string;
}

function VideoInformation({
	title = "",
	description,
	firstOnClick,
	secondOnClick,
	isTrailer,
	showButton = true,
	mainButtonText = "",
}: Props) {
	return (
		<InformationContainer>
			<TopInformation>
				<Title>{title}</Title>
				{showButton &&
					(isTrailer ? (
						<SwitchButton onClick={firstOnClick} isAlt={isTrailer}>
							{mainButtonText}
						</SwitchButton>
					) : (
						<SwitchButton onClick={secondOnClick} isAlt={isTrailer}>
							Assistir ao Trailer
						</SwitchButton>
					))}
			</TopInformation>
			<Description>{description}</Description>
		</InformationContainer>
	);
}

export default VideoInformation;
