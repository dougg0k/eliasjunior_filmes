import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import Container from "../components/common/Container";
import VideoContainer from "../components/common/VideoContainer";
import VideoInformation from "../components/common/VideoInformation";
import VideoPlayer from "../components/common/VideoPlayer";
import SEO from "../components/utils/Seo";
import {
	COLOR_1,
	COLOR_10,
	COLOR_5,
	COLOR_6,
	COLOR_8,
	COLOR_9,
	WHITE_COLOR,
} from "../utils/colors";
import { normalizeGraphQLData } from "../utils/helpers";

const ContentChoiceContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding-bottom: 100px;
	padding-top: 30px;
`;

const Title = styled.h1`
	font-size: 1.5em;
	margin-bottom: 10px;
	text-align: center;
`;

const SubTitle = styled.h2`
	color: ${COLOR_9};
	font-size: 1.8em;
	margin: 0;
	margin-bottom: 10px;
	text-transform: uppercase;
`;

const ChoiceButton = styled.button`
	outline: none;
	border: 0;
	background-color: ${COLOR_1};
	color: ${COLOR_10};
	font-size: 1.4em;
	font-weight: 600;
	width: 400px;
	margin: 15px 0;
	padding: 20px 0;
	border-radius: 5px;
	&:hover {
		cursor: pointer;
		transform: translateY(4px);
		box-shadow: 0 5px ${COLOR_10};
	}
`;

const ContentContainer = styled.div``;

const EpisodesContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	padding: 50px;
	padding-top: 30px;
`;

const EpisodeButton = styled.button`
	outline: none;
	border: none;
	background-color: ${COLOR_8};
	color: ${WHITE_COLOR};
	padding: 50px;
	border-radius: 5px;
	margin: 15px;
	width: 200px;
	font-size: 1.2em;
	font-weight: 600;
	&:hover {
		cursor: pointer;
	}
`;

const SeasonTitle = styled.h1`
	font-size: 1.5em;
	text-align: center;
	margin: 0;
	color: ${COLOR_6};
`;

const BackButton = styled.button`
	outline: none;
	border: 2px solid ${COLOR_5};
	background-color: ${WHITE_COLOR};
	color: ${COLOR_5};
	padding: 5px 20px;
	font-size: 1.1em;
	font-weight: 600;
	border-radius: 5px;
	margin-top: 15px;
	&:hover {
		cursor: pointer;
	}
`;

const EpisodesChoiceTopContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 25px;
`;

interface SerieProps {
	title: string;
	description: string;
	url: string;
	trailerUrl?: string;
}

interface SeasonProps {
	title: string;
	episodes: Array<{}>;
}

function SeriesPage() {
	const [
		selectedSeason,
		setSelectedSeason,
	] = React.useState<SeasonProps | null>(null);
	const [
		selectedEpisode,
		setSelectedEpisode,
	] = React.useState<SerieProps | null>(null);
	const [isTrailer, setIsTrailer] = React.useState<boolean>(true);
	function resetSelection() {
		setSelectedEpisode(null);
		setSelectedSeason(null);
	}
	const data = useStaticQuery(graphql`
		query SeriesQuery {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "series" } } }
				sort: { order: ASC, fields: [frontmatter___createdAt] }
			) {
				edges {
					node {
						frontmatter {
							title
							episodes {
								title
								description
								url
								trailerUrl
							}
						}
					}
				}
			}
		}
	`);
	const series = normalizeGraphQLData(data.allMarkdownRemark.edges);
	return (
		<Container>
			<SEO title="Series" />
			{selectedSeason ? (
				<ContentContainer>
					{selectedEpisode && (
						<VideoContainer title={selectedEpisode.title}>
							<>
								<VideoPlayer
									vimeoUrl={selectedEpisode.url}
									youtubeUrl={selectedEpisode.trailerUrl}
									isYoutube={!!selectedEpisode.trailerUrl && isTrailer}
								/>
								<VideoInformation
									title={selectedEpisode.title}
									description={selectedEpisode.description}
									firstOnClick={setIsTrailer.bind(null, false)}
									secondOnClick={setIsTrailer.bind(null, true)}
									isTrailer={isTrailer}
									showButton={!!selectedEpisode.trailerUrl}
									mainButtonText="Assitir ao Episodio"
								/>
							</>
						</VideoContainer>
					)}
					<EpisodesChoiceTopContainer>
						<SeasonTitle>{selectedSeason.title}</SeasonTitle>
						<BackButton onClick={resetSelection}>
							Escolher outra temporada
						</BackButton>
					</EpisodesChoiceTopContainer>
					<EpisodesContainer>
						{selectedSeason.episodes.map((item: any) => (
							<EpisodeButton
								key={item.title}
								onClick={setSelectedEpisode.bind(null, item)}
							>
								{item.title}
							</EpisodeButton>
						))}
					</EpisodesContainer>
				</ContentContainer>
			) : (
				<ContentChoiceContainer>
					<Title>Serie</Title>
					<SubTitle>Rota a Força Policial</SubTitle>
					{series.map((item: SeasonProps) => (
						<ChoiceButton
							key={item.title}
							onClick={setSelectedSeason.bind(null, item)}
						>
							{item.title}
						</ChoiceButton>
					))}
				</ContentChoiceContainer>
			)}
		</Container>
	);
}

export default SeriesPage;
