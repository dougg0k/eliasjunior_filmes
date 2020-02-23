import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import VideoContainer from "../components/common/VideoContainer";
import VideoInformation from "../components/common/VideoInformation";
import VideoPlayer from "../components/common/VideoPlayer";
import Videos, { FilmeProps } from "../components/common/Videos";
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
							hideButton={!!selectedDocumentario.trailerUrl}
						/>
					</>
				</VideoContainer>
			)}
			<Videos
				videosMainTitle="Documentarios"
				videos={documentarios}
				onClick={setSelectedDocumentario}
			/>
		</Container>
	);
}

export default DocumentariosPage;
