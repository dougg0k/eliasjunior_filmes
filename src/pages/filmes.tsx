import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import VideoContainer from "../components/common/VideoContainer";
import VideoInformation from "../components/common/VideoInformation";
import VideoPlayer from "../components/common/VideoPlayer";
import Videos, { FilmesProps } from "../components/common/Videos";
import SEO from "../components/utils/Seo";
import { HEADER_HEIGHT } from "../utils/constants";
import { normalizeGraphQLData } from "../utils/helpers";

const Container = styled.div`
	width: 100%;
	position: relative;
	margin-top: ${HEADER_HEIGHT}px;
	padding-bottom: 50px;
	min-height: 60vh;
`;

function FilmesPage() {
	const [selectedMovie, setSelectedMovie] = React.useState<FilmesProps | null>(
		null,
	);
	const [isTrailer, setIsTrailer] = React.useState<boolean>(true);
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
	return (
		<Container>
			<SEO title="Filmes" />
			{selectedMovie && (
				<VideoContainer
					title={selectedMovie.title}
					pictureUrl={selectedMovie.additionalPicture}
				>
					<>
						<VideoPlayer
							vimeoUrl={selectedMovie.url}
							youtubeUrl={selectedMovie.trailerUrl}
							isYoutube={!!selectedMovie.trailerUrl && isTrailer}
						/>
						<VideoInformation
							title={selectedMovie.title}
							description={selectedMovie.description}
							firstOnClick={setIsTrailer.bind(null, false)}
							secondOnClick={setIsTrailer.bind(null, true)}
							isTrailer={isTrailer}
							hideButton={!!selectedMovie.trailerUrl}
						/>
					</>
				</VideoContainer>
			)}
			<Videos
				videosMainTitle="Filmes"
				videos={movies}
				onClick={setSelectedMovie}
			/>
		</Container>
	);
}

export default FilmesPage;
