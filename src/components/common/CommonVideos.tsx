import * as React from "react";
import styled from "styled-components";
import { COLOR_5 } from "../../utils/colors";
import { removeProtocolAndDomainFromUrl } from "../../utils/helpers";
import VideoPlayer from "./VideoPlayer";

const CommonVideoContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 50px;
	padding-top: 20px;
	justify-content: center;
	align-items: center;
`;

const CommonVideoItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px;
`;

const CommonVideoTitle = styled.span`
	font-size: 1.1em;
	font-weight: 600;
	color: ${COLOR_5};
	margin-bottom: -5px;
`;

export interface CommonVideoProps {
	title: string;
	url: string;
}

interface Props {
	videos: Array<CommonVideoProps>;
}

function CommonVideos({ videos }: Props) {
	return (
		<CommonVideoContainer>
			{videos.map(item => {
				const formattedUrl = removeProtocolAndDomainFromUrl(item.url);
				const isYoutubeMain = formattedUrl.startsWith("youtube");
				return (
					<CommonVideoItem key={item.title}>
						<CommonVideoTitle>{item.title}</CommonVideoTitle>
						<VideoPlayer
							isYoutube={isYoutubeMain}
							youtubeUrl={item.url}
							vimeoUrl={item.url}
							initialWidth={426}
							initialHeight={240}
						/>
					</CommonVideoItem>
				);
			})}
		</CommonVideoContainer>
	);
}

export default CommonVideos;
