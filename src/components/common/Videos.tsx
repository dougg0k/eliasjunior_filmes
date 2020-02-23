import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { COLOR_1, COLOR_8 } from "../../utils/colors";
import Title from "./Title";

const MoviesContainers = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 25px 40px;
	justify-content: center;
	align-items: center;
`;

interface MovieItemProps {
	isSelected: boolean;
}

const MovieItem = styled.button`
	outline: none;
	border: 0;
	background: none;
	padding: 0;
	transform: ${(props: MovieItemProps) =>
		props.isSelected ? "none" : "perspective(100) rotateY(-2.5deg)"};
	margin-right: 15px;
	margin-bottom: 25px;
	border: ${(props: MovieItemProps) =>
		props.isSelected ? `4px solid ${COLOR_8}` : `1px solid ${COLOR_1}`};
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
	selectedItem: {} | null;
}

export interface FilmeProps {
	title: string;
	url: string;
	additionalPicture?: string;
	cover: string;
	trailerUrl?: string;
	description: string;
}

function Videos({ videos, videosMainTitle, onClick, selectedItem }: Props) {
	return (
		<>
			<Title>{videosMainTitle}</Title>
			<MoviesContainers>
				{videos.map((item: FilmeProps) => (
					<MovieItem
						isSelected={item === selectedItem}
						key={item.title}
						onClick={
							!selectedItem || selectedItem !== item
								? onClick.bind(null, item)
								: onClick.bind(null, null)
						}
					>
						<MovieCover src={item.cover} alt={item.title} />
					</MovieItem>
				))}
			</MoviesContainers>
		</>
	);
}

export default Videos;
