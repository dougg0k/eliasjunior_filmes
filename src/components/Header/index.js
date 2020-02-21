import { Link } from "gatsby";
import * as React from "react";
import useModal from "react-hooks-use-modal";
import styled from "styled-components";
import { Close } from "styled-icons/material/Close";
import { COLOR_1, COLOR_4, COLOR_6, WHITE_COLOR } from "../../utils/colors";
import { HEADER_HEIGHT, RESPONSIVE_HEADER_WIDTH } from "../../utils/constants";
import { headerData } from "../../utils/data";
import { useWindowSize } from "../../utils/helpers";
import Logo from "../common/Logo";

const Container = styled.header`
	width: 100%;
	height: ${HEADER_HEIGHT}px;
	background-color: ${COLOR_1};
	position: fixed;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 8px 6px -6px ${COLOR_4};
	z-index: 100;
`;

const HeaderOptionsContainer = styled.nav`
	margin-right: 25px;
`;

const HeaderUl = styled.ul`
	display: flex;
	flex-direction: row;
	@media (max-width: ${RESPONSIVE_HEADER_WIDTH}px) {
		flex-direction: column;
	}
`;

const HeaderLi = styled.li`
	list-style: none;
	margin-right: 15px;
	@media (max-width: ${RESPONSIVE_HEADER_WIDTH}px) {
		margin-top: 25px;
	}
`;

const StyledLink = styled(Link)`
	color: ${WHITE_COLOR};
	font-weight: 600;
	font-size: 1.1em;
	text-decoration: none;
	transition: 0.3s;
	&:hover {
		background-color: ${WHITE_COLOR};
		color: ${COLOR_1};
		border-radius: 2px;
		padding: 2px 10px;
		transition: 0.3s;
	}
`;

const LogoStyledLink = styled(Link)`
	text-decoration: none;
`;

const LogoContainer = styled.div`
	margin-left: 50px;
`;

const SideBar = styled.div`
	background-color: ${COLOR_6};
	left: 0;
	top: 0;
	bottom: 0;
	max-width: 300px;
	width: 250px;
	height: 100vh;
	z-index: 150;
	position: fixed;
	padding-top: 50px;
	padding-left: 40px;
`;

const MobileButton = styled.button`
	margin-right: 30px;
	background: none;
	outline: none;
	border: 2px solid ${WHITE_COLOR};
	width: 50px;
	height: 35px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	color: ${WHITE_COLOR};
	&:active {
		background-color: ${WHITE_COLOR};
		color: ${WHITE_COLOR};
	}
`;

const IconBar = styled.span`
	height: 2px;
	margin: 2px 0;
	background-color: ${WHITE_COLOR};
	width: 22px;
`;

const CloseIconStyled = styled(Close)`
	color: ${WHITE_COLOR};
	height: 30px;
	width: 30px;
`;

function NavMenu() {
	return (
		<HeaderUl>
			{headerData.map(option => (
				<HeaderLi key={option.title}>
					<StyledLink to={option.path}>{option.title}</StyledLink>
				</HeaderLi>
			))}
		</HeaderUl>
	);
}

function HeaderLogo() {
	return (
		<LogoStyledLink to="/">
			<Logo />
		</LogoStyledLink>
	);
}

function Header() {
	const [Modal, open, close, isOpen] = useModal("modal-id", true);
	const { width } = useWindowSize();
	return (
		<>
			<Modal>
				<SideBar>
					<HeaderLogo />
					<NavMenu />
				</SideBar>
			</Modal>
			<Container>
				<LogoContainer>
					<HeaderLogo />
				</LogoContainer>
				{width && width < RESPONSIVE_HEADER_WIDTH ? (
					<MobileButton onClick={open} aria-label="Mobile menu">
						{isOpen ? (
							<CloseIconStyled />
						) : (
							<>
								<IconBar />
								<IconBar />
								<IconBar />
							</>
						)}
					</MobileButton>
				) : (
					<HeaderOptionsContainer>
						<NavMenu />
					</HeaderOptionsContainer>
				)}
			</Container>
		</>
	);
}

export default Header;
