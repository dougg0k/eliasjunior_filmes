import { CartArrowDown } from "@styled-icons/fa-solid/CartArrowDown";
import { Link } from "gatsby";
import * as React from "react";
import styled, { keyframes } from "styled-components";
import { COLOR_5, WHITE_COLOR } from "../../utils/colors";

const jumpingKeyframe = keyframes`
	0% {
		transform: translateY(-50px);
		color: ${COLOR_5};
	}
	100% {
		transform: translateY(0);
		color: ${WHITE_COLOR};
	}
`;

const jumpingHoverKeyframe = keyframes`
	0% {
		transform: translateY(-50px);
		color: ${COLOR_5};
	}
	100% {
		transform: translateY(0);
		color: ${COLOR_5};
	}
`;

const IconStyled = styled(CartArrowDown)`
	animation: ${jumpingKeyframe} 2s infinite;
	animation-timing-function: ease-in-out;
	animation-fill-mode: forwards;
	height: 30px;
	width: 30px;
	margin-right: 15px;
	margin-left: -15px;
`;

const LinkStyled = styled(Link)`
	background-color: ${COLOR_5};
	outline: none;
	border: none;
	border-radius: 5px;
	color: ${WHITE_COLOR};
	font-weight: 700;
	font-size: 1.8em;
	padding: 10px 35px;
	display: flex;
	flex-direction: row;
	text-transform: uppercase;
	border: 2px solid transparent;
	text-decoration: none;
	transition: all 0.05s ease-in;
	&:hover {
		cursor: pointer;
		color: ${COLOR_5};
		background-color: ${WHITE_COLOR};
		border: 2px solid ${COLOR_5};
	}
	&:hover ${IconStyled} {
		animation: ${jumpingHoverKeyframe} 2s infinite;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const PriceText = styled.span`
	text-align: end;
	font-size: 1.1em;
	padding-top: 3px;
	font-weight: 600;
	color: ${COLOR_5};
`;

interface Props {
	to: string;
}

function AssineButton({ to }: Props) {
	return (
		<ButtonContainer>
			<LinkStyled to={to}>
				<IconStyled />
				Assine Aqui
			</LinkStyled>
			<PriceText>R$ 14,90 p/ mês</PriceText>
		</ButtonContainer>
	);
}

export default AssineButton;
