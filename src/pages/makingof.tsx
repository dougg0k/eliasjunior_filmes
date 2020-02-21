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

const Mensagem = styled.p`
	font-size: 2.2em;
	font-weight: 600;
	text-align: center;
`;

function MakingOfPage() {
	return (
		<Container>
			<SEO title="Making Of" />
			<Mensagem>Pagina em Construção</Mensagem>
		</Container>
	);
}

export default MakingOfPage;
