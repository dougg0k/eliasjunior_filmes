import * as React from "react";
import styled from "styled-components";
import { COLOR_1, WHITE_COLOR } from "../../utils/colors";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: -8px;
`;

const LeftSideLogo = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`;

const RightSideLogo = styled.div`
	margin-left: 2px;
`;

const LeftTopText = styled.span`
	color: ${WHITE_COLOR};
	font-size: 1.5em;
	font-weight: 700;
`;

const LeftBottomText = styled.span`
	background-color: ${WHITE_COLOR};
	color: ${COLOR_1};
	border-radius: 5px;
	font-size: 1.3em;
	padding: 2px 10px;
	font-weight: 700;
`;

const RightText = styled.span`
	color: ${WHITE_COLOR};
	font-weight: 700;
	font-size: 2em;
`;

function Logo() {
	return (
		<Container>
			<LeftSideLogo>
				<LeftTopText>Elias</LeftTopText>
				<LeftBottomText>Junior</LeftBottomText>
			</LeftSideLogo>
			<RightSideLogo>
				<RightText>Filmes</RightText>
			</RightSideLogo>
		</Container>
	);
}

export default Logo;
