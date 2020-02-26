import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Container from "../components/common/Container";
import VideoContainer from "../components/common/VideoContainer";
import VideoInformation from "../components/common/VideoInformation";
import VideoPlayer from "../components/common/VideoPlayer";
import Videos, { FilmeProps } from "../components/common/Videos";
import SEO from "../components/utils/Seo";
import { normalizeGraphQLData } from "../utils/helpers";

function DocumentariosPage() {
	const [
		selectedDocumentario,
		setSelectedDocumentario,
	] = React.useState<FilmeProps | null>(null);
	const [isTrailer, setIsTrailer] = React.useState<boolean>(true);
	const data = useStaticQuery(graphql`
		query DocumentariosQuery {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "documentarios" } } }
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
	const documentarios = normalizeGraphQLData(data.allMarkdownRemark.edges);
	return (
		<Container>
			<SEO title="Documentarios" />
			{selectedDocumentario && (
				<VideoContainer
					title={selectedDocumentario.title}
					pictureUrl={selectedDocumentario.additionalPicture}
				>
					<>
						<VideoPlayer
							vimeoUrl={selectedDocumentario.url}
							youtubeUrl={selectedDocumentario.trailerUrl}
							isYoutube={!!selectedDocumentario.trailerUrl && isTrailer}
						/>
						<VideoInformation
							title={selectedDocumentario.title}
							description={selectedDocumentario.description}
							firstOnClick={setIsTrailer.bind(null, false)}
							secondOnClick={setIsTrailer.bind(null, true)}
							isTrailer={isTrailer}
							showButton={!!selectedDocumentario.trailerUrl}
							mainButtonText="Assitir ao Documentario"
						/>
					</>
				</VideoContainer>
			)}
			<Videos
				videosMainTitle="Documentarios"
				videos={documentarios}
				onClick={setSelectedDocumentario}
				selectedItem={selectedDocumentario}
			/>
		</Container>
	);
}

export default DocumentariosPage;
