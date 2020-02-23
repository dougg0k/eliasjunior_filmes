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
	text-align: center;
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
	title: string;
	description: string;
	firstOnClick: () => void;
	secondOnClick: () => void;
	isTrailer: boolean;
	hideButton?: boolean;
}

function VideoInformation({
	title,
	description,
	firstOnClick,
	secondOnClick,
	isTrailer,
	hideButton = false,
}: Props) {
	return (
		<InformationContainer>
			<TopInformation>
				<Title>{title}</Title>
				{hideButton &&
					(isTrailer ? (
						<SwitchButton onClick={firstOnClick} isAlt={isTrailer}>
							Assistir o Filme
						</SwitchButton>
					) : (
						<SwitchButton onClick={secondOnClick} isAlt={isTrailer}>
							Assistir o Trailer
						</SwitchButton>
					))}
			</TopInformation>
			<Description>{description}</Description>
		</InformationContainer>
	);
}

export default VideoInformation;
