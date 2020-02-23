import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Title from "./Title";

const MoviesContainers = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 25px 40px;
	justify-content: center;
	align-items: center;
`;

const MovieItem = styled.button`
	outline: none;
	border: 0;
	background: none;
	padding: 0;
	transform: perspective(100) rotateY(-2.5deg);
	margin-right: 15px;
	margin-bottom: 25px;
	&:hover {
		cursor: pointer;
		transform: none;
	}
`;

const MovieCover = styled.img`
	width: 220px;
	display: block;
`;

interface Props {
	videosMainTitle: string;
	videos: Array<FilmeProps>;
	onClick: Dispatch<SetStateAction<T | null>>;
}

export interface FilmeProps {
	title: string;
	url: string;
	additionalPicture?: string;
	cover: string;
	trailerUrl?: string;
	description: string;
}

function Videos({ videos, videosMainTitle, onClick }: Props) {
	return (
		<>
			<Title>{videosMainTitle}</Title>
			<MoviesContainers>
				{videos.map((item: FilmeProps) => (
					<MovieItem key={item.title} onClick={onClick.bind(null, item)}>
						<MovieCover src={item.cover} alt={item.title} />
					</MovieItem>
				))}
			</MoviesContainers>
		</>
	);
}

export default Videos;
