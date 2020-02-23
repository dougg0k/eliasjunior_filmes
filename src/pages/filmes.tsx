import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Container from "../components/common/Container";
import VideoContainer from "../components/common/VideoContainer";
import VideoInformation from "../components/common/VideoInformation";
import VideoPlayer from "../components/common/VideoPlayer";
import Videos, { FilmeProps } from "../components/common/Videos";
import SEO from "../components/utils/Seo";
import { normalizeGraphQLData } from "../utils/helpers";

function FilmesPage() {
	const [selectedMovie, setSelectedMovie] = React.useState<FilmeProps | null>(
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
				selectedItem={selectedMovie}
			/>
		</Container>
	);
}

export default FilmesPage;
