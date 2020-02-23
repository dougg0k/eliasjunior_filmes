import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { COLOR_1 } from "../../utils/colors";

const Title = styled.h1`
	color: ${COLOR_1};
	text-align: center;
	padding-top: 20px;
	text-decoration: underline;
`;

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
	videos: Array<FilmesProps>;
	onClick: Dispatch<SetStateAction<T | null>>;
}

export interface FilmesProps {
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
				{videos.map((item: FilmesProps) => (
					<MovieItem key={item.title} onClick={onClick.bind(null, item)}>
						<MovieCover src={item.cover} alt={item.title} />
					</MovieItem>
				))}
			</MoviesContainers>
		</>
	);
}

export default Videos;
