import React from "react";
import { Animate } from "react-animate-mount";
import styled from "styled-components";
import { COLOR_1, COLOR_3 } from "../../utils/colors";

const MovieSelectedContainer = styled.div`
	display: flex;
	box-shadow: 0px 5px 5px -5px ${COLOR_1};
	justify-content: center;
	background-color: ${COLOR_3};
	flex-direction: column;
	position: relative;
	align-items: center;
	padding: 80px 0;
`;

const MovieSelectedImg = styled.img`
	object-fit: contain;
	top: 0;
	position: absolute;
	display: block;
`;

interface Props {
	children: React.ReactNode;
	title?: string;
	pictureUrl?: string;
	show: boolean;
}

function VideoContainer({
	children,
	title = "",
	pictureUrl,
	show = false,
}: Props) {
	return (
		<Animate show={show} duration={500}>
			<MovieSelectedContainer>
				{pictureUrl && <MovieSelectedImg src={pictureUrl} alt={title} />}
				{children}
			</MovieSelectedContainer>
		</Animate>
	);
}

export default VideoContainer;
