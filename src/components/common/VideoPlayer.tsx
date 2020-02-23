import Vimeo from "@u-wave/react-vimeo";
import YouTube from "@u-wave/react-youtube";
import React from "react";
import styled from "styled-components";
import { COLOR_1 } from "../../utils/colors";
import {
	getResponsiveIframeSize,
	getYoutubeIdFromUrl,
	useWindowSize,
} from "../../utils/helpers";

interface PlayerContainerProps {
	responsiveWidth?: number;
	responsiveHeight?: number;
}

const PlayerContainer = styled.div`
	z-index: 10;
	display: flex;
	flex-direction: column;
	position: relative;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	width: ${(props: PlayerContainerProps) =>
		`${props.responsiveWidth}px` || "auto"};
	height: ${(props: PlayerContainerProps) =>
		`${props.responsiveHeight}px` || "auto"};
	box-shadow: 0 0 10px ${COLOR_1};
`;

const VimeoPlayerStyled = styled(Vimeo)`
	box-shadow: 0 0 10px ${COLOR_1};
	display: flex;
`;

const YoutubePlayerStyled = styled(YouTube)``;

interface Props {
	vimeoUrl?: string;
	youtubeUrl?: string;
	isYoutube: boolean;
}

function VideoPlayer({ vimeoUrl, youtubeUrl, isYoutube }: Props) {
	const { width } = useWindowSize();
	const { responsiveHeight, responsiveWidth } = getResponsiveIframeSize(
		width || 0,
		700,
		400,
	);
	return (
		<PlayerContainer
			responsiveWidth={responsiveWidth}
			responsiveHeight={responsiveHeight}
		>
			{isYoutube ? (
				<YoutubePlayerStyled
					video={getYoutubeIdFromUrl(youtubeUrl || "")}
					width={responsiveWidth}
					height={responsiveHeight}
					showRelatedVideos={false}
					showInfo={false}
				/>
			) : (
				<VimeoPlayerStyled
					video={vimeoUrl}
					width={responsiveWidth}
					height={responsiveHeight}
				/>
			)}
		</PlayerContainer>
	);
}

export default VideoPlayer;
