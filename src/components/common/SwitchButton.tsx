import { SwitchVideo } from "@styled-icons/material/SwitchVideo";
import * as React from "react";
import styled from "styled-components";
import { COLOR_8, COLOR_9, WHITE_COLOR } from "../../utils/colors";

interface SwitchButtonProps {
	isAlt?: boolean;
	onClick: () => void;
	children: React.ReactNode;
}

const SwitchButtonStyled = styled.button`
	outline: none;
	border: none;
	position: relative;
	right: 0;
	background-color: ${WHITE_COLOR};
	color: ${(props: SwitchButtonProps) => (props.isAlt ? COLOR_8 : COLOR_9)};
	border: 2px solid
		${(props: SwitchButtonProps) => (props.isAlt ? COLOR_8 : COLOR_9)};
	padding: 5px 15px;
	border-radius: 5px;
	font-size: 1em;
	font-weight: 600;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 15px;
	&:hover {
		cursor: pointer;
		background-color: ${(props: SwitchButtonProps) =>
			props.isAlt ? COLOR_8 : COLOR_9};
		color: ${WHITE_COLOR};
	}
	@media (max-width: 768px) {
		font-size: 1.2em;
	}
`;

const StyledSwitchVideoIcon = styled(SwitchVideo)`
	width: 25px;
	height: 25px;
	padding-right: 5px;
	margin-top: 1px;
`;

function SwitchButton({ onClick, isAlt, children }: SwitchButtonProps) {
	return (
		<SwitchButtonStyled onClick={onClick} isAlt={isAlt}>
			<StyledSwitchVideoIcon />
			{children}
		</SwitchButtonStyled>
	);
}

export default SwitchButton;
