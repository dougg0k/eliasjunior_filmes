import * as React from "react";
import styled from "styled-components";
import SEO from "../components/utils/Seo";
import { COLOR_3 } from "../utils/colors";
import { HEADER_HEIGHT } from "../utils/constants";

const Container = styled.div`
	width: 100%;
	position: relative;
	margin-top: ${HEADER_HEIGHT}px;
	background-color: ${COLOR_3};
	height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

function EspeciaisPage() {
	return (
		<Container>
			<SEO title="Especiais" />
		</Container>
	);
}

export default EspeciaisPage;
