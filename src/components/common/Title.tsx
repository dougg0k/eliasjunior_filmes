import * as React from "react";
import styled from "styled-components";
import { COLOR_1 } from "../../utils/colors";

const TitleStyled = styled.h1`
	color: ${COLOR_1};
	text-align: center;
	padding-top: 25px;
	text-decoration: underline;
`;

interface Props {
	children: React.ReactNode;
}

function Title({ children }: Props) {
	return <TitleStyled>{children}</TitleStyled>;
}

export default Title;
