import * as React from "react";
import styled from "styled-components";
import SEO from "../components/utils/Seo";
import { HEADER_HEIGHT } from "../utils/constants";

const Container = styled.div`
	width: 100%;
	position: relative;
	height: 100vh;
	margin-top: ${HEADER_HEIGHT}px;
`;

function AssinantePage() {
	return (
		<Container>
			<SEO title="Assinante" />
		</Container>
	);
}

export default AssinantePage;
