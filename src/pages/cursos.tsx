import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Container from "../components/common/Container";
import VideoContainer from "../components/common/VideoContainer";
import VideoInformation from "../components/common/VideoInformation";
import VideoPlayer from "../components/common/VideoPlayer";
import Videos, { FilmeProps } from "../components/common/Videos";
import SEO from "../components/utils/Seo";
import { normalizeGraphQLData } from "../utils/helpers";

function CursosPage() {
	const [selectedCurso, setSelectedCurso] = React.useState<FilmeProps | null>(
		null,
	);
	const [isTrailer, setIsTrailer] = React.useState<boolean>(true);
	const data = useStaticQuery(graphql`
		query CursosQuery {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "cursos" } } }
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
	const cursos = normalizeGraphQLData(data.allMarkdownRemark.edges);
	return (
		<Container>
			<SEO title="Cursos" />
			{selectedCurso && (
				<VideoContainer
					title={selectedCurso.title}
					pictureUrl={selectedCurso.additionalPicture}
				>
					<>
						<VideoPlayer
							vimeoUrl={selectedCurso.url}
							youtubeUrl={selectedCurso.trailerUrl}
							isYoutube={!!selectedCurso.trailerUrl && isTrailer}
						/>
						<VideoInformation
							title={selectedCurso.title}
							description={selectedCurso.description}
							firstOnClick={setIsTrailer.bind(null, false)}
							secondOnClick={setIsTrailer.bind(null, true)}
							isTrailer={isTrailer}
							hideButton={!!selectedCurso.trailerUrl}
						/>
					</>
				</VideoContainer>
			)}
			<Videos
				videosMainTitle="Cursos"
				videos={cursos}
				onClick={setSelectedCurso}
			/>
		</Container>
	);
}

export default CursosPage;
