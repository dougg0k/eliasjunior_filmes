import Vimeo from "@u-wave/react-vimeo";
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import SEO from "../components/utils/Seo";
import {
	COLOR_1,
	COLOR_3,
	COLOR_5,
	COLOR_6,
	COLOR_7,
	WHITE_COLOR,
} from "../utils/colors";
import { HEADER_HEIGHT } from "../utils/constants";
import {
	getResponsiveIframeSize,
	normalizeGraphQLData,
	useWindowSize,
} from "../utils/helpers";

const Container = styled.div`
	width: 100%;
	position: relative;
	margin-top: ${HEADER_HEIGHT}px;
	padding-bottom: 50px;
	min-height: 60vh;
`;

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

const PlayerContainer = styled.div`
	z-index: 10;
	display: flex;
	flex-direction: column;
	position: relative;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
`;

const VimeoPlayerStyled = styled(Vimeo)`
	box-shadow: 0 0 10px ${COLOR_1};
	display: flex;
`;

const MovieTitle = styled.span`
	color: ${COLOR_5};
	font-size: 1.5em;
	font-weight: 600;
	text-align: center;
`;

const MovieDescription = styled.span`
	color: ${COLOR_6};
	font-size: 1em;
	font-weight: 500;
	text-align: center;
	width: 50%;
	padding-top: 10px;
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
	flex-direction: row;
	position: relative;
	justify-content: center;
	align-items: center;
	width: 700px;
`;

const SwitchButton = styled.button`
	outline: none;
	border: none;
	position: absolute;
	right: 0;
	background-color: ${WHITE_COLOR};
	color: ${COLOR_7};
	border: 2px solid ${COLOR_7};
	padding: 5px 15px;
	border-radius: 5px;
	font-size: 1.2em;
	font-weight: 600;
`;

interface FilmesProps {
	title: string;
	url: string;
	additionalPicture?: string;
	cover: string;
	trailerUrl?: string;
	description: string;
}

function FilmesPage() {
	const [selectedMovie, setSelectedMovie] = React.useState<FilmesProps | null>(
		null,
	);
	const data = useStaticQuery(graphql`
		query FilmesQuery {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "filmes" } } }
				sort: { order: ASC, fields: [frontmatter___createdAt] }
			) {
				edges {
					node {
						frontmatter {
							title
							description
							url
							trailerUrl
							cover
							additionalPicture
						}
					}
				}
			}
		}
	`);
	const movies = normalizeGraphQLData(data.allMarkdownRemark.edges);
	const { width } = useWindowSize();
	const { responsiveHeight, responsiveWidth } = getResponsiveIframeSize(
		width || 0,
		700,
		400,
	);
	return (
		<Container>
			<SEO title="Filmes" />
			{selectedMovie && (
				<MovieSelectedContainer>
					<MovieSelectedImg
						src={selectedMovie.additionalPicture}
						alt={selectedMovie.title}
					/>
					<PlayerContainer>
						<VimeoPlayerStyled
							video={selectedMovie.url}
							width={responsiveWidth}
							height={responsiveHeight}
						/>
					</PlayerContainer>
					<InformationContainer>
						<TopInformation>
							<MovieTitle>{selectedMovie.title}</MovieTitle>
							<SwitchButton>Visualizar Trailer</SwitchButton>
						</TopInformation>
						<MovieDescription>{selectedMovie.description}</MovieDescription>
					</InformationContainer>
				</MovieSelectedContainer>
			)}
			<Title>Filmes</Title>
			<MoviesContainers>
				{movies.map((item: FilmesProps) => (
					<MovieItem
						key={item.title}
						onClick={setSelectedMovie.bind(null, item)}
					>
						<MovieCover src={item.cover} alt={item.title} />
					</MovieItem>
				))}
			</MoviesContainers>
		</Container>
	);
}

export default FilmesPage;
