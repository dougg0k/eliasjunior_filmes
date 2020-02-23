import * as React from "react";
import styled from "styled-components";
import { HEADER_HEIGHT } from "../../utils/constants";

const ContainerStyled = styled.div`
	width: 100%;
	position: relative;
	margin-top: ${HEADER_HEIGHT}px;
	padding-bottom: 50px;
	min-height: 60vh;
`;

interface Props {
	children: React.ReactNode;
}

function Container({ children }: Props) {
	return (
		<ContainerStyled>
			<>{children}</>
		</ContainerStyled>
	);
}

export default Container;
