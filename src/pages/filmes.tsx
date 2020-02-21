import { Router } from "@reach/router";
import * as React from "react";
import styled from "styled-components";
import SEO from "../components/utils/Seo";
import { HEADER_HEIGHT } from "../utils/constants";

const Container = styled.div`
	width: 100%;
	position: relative;
	margin-top: ${HEADER_HEIGHT}px;
	height: 100vh;
`;

function FilmesPage() {
	return (
		<Container>
			<SEO title="Filmes" />
			<Router basepath="/filmes">
				{/* <Route path="/" component={} /> */}
			</Router>
		</Container>
	);
}

export default FilmesPage;
