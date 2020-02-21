import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import SEO from "../components/utils/Seo";
import { COLOR_6 } from "../utils/colors";
import { HEADER_HEIGHT } from "../utils/constants";

const Container = styled.div`
	width: 100%;
	position: relative;
	height: 70vh;
	margin-top: ${HEADER_HEIGHT}px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const H1 = styled.h1`
	font-size: 3em;
	color: ${COLOR_6};
`;

const H2 = styled.h2`
	font-size: 2.5em;
	margin-top: 10px;
	color: ${COLOR_6};
`;

const StyledLink = styled(Link)`
	color: ${COLOR_6};
	border: 2px solid ${COLOR_6};
	padding: 10px 25px;
	border-radius: 5px;
	text-decoration: none;
	font-size: 1.5em;
`;

function NotFoundPage() {
	return (
		<Container>
			<SEO title="404" />
			<H1>404</H1>
			<H2>Pagina Não Existe</H2>
			<StyledLink to="/">Ir para pagina inicial</StyledLink>
		</Container>
	);
}

export default NotFoundPage;
