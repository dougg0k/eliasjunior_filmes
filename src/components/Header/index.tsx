import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import useModal from "react-hooks-use-modal";
import styled, { keyframes } from "styled-components";
import { DownArrowAlt } from "styled-icons/boxicons-regular/DownArrowAlt";
import { Close } from "styled-icons/material/Close";
import {
	COLOR_1,
	COLOR_4,
	COLOR_5,
	COLOR_6,
	WHITE_COLOR,
} from "../../utils/colors";
import { HEADER_HEIGHT, RESPONSIVE_HEADER_WIDTH } from "../../utils/constants";
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
	display: flex;
	flex-direction: row;
	position: relative;
`;

const HeaderUl = styled.ul`
	display: flex;
	flex-direction: row;
	margin-right: 180px;
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
	margin-right: 230px;
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
	@media (max-width: 550px) {
		margin-right: 165px;
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

const iconKeyframe = keyframes`
	0% {
		transform: translate(-15px, -7px) rotate(-35deg);
	}
	100% {
		transform: translate(0, 0) rotate(-35deg);
	}
`;

const IconStyled = styled(DownArrowAlt)`
	height: 50px;
	width: 50px;
	left: 5px;
	top: -20px;
	position: absolute;
	transform: rotate(-35deg);
`;

const ButtonAssine = styled(Link)`
	background-color: ${COLOR_5};
	text-decoration: none;
	color: ${WHITE_COLOR};
	padding: 10px 40px;
	top: 35px;
	position: fixed;
	right: 10px;
	border-radius: 5px;
	border-top-right-radius: 0;
	border-top-left-radius: 0;
	font-size: 1.5em;
	font-weight: 600;
	width: min-content;
	text-align: center;
	box-shadow: 0 0 5px ${COLOR_5};
	display: flex;
	flex-direction: row;
	margin-right: 5px;
	@media (max-width: 550px) {
		padding: 10px 15px;
	}
	&:hover ${IconStyled} {
		animation: ${iconKeyframe} 1.2s infinite;
		animation-timing-function: ease-in-out;
		animation-fill-mode: forwards;
	}
`;

interface NavProps {
	data: [{ node: { frontmatter: { title: string; path: string } } }];
}

function NavMenu({ data }: NavProps) {
	return (
		<HeaderUl>
			{data.map(item => {
				const option = item.node.frontmatter;
				return (
					<HeaderLi key={option.title}>
						<StyledLink to={option.path}>{option.title}</StyledLink>
					</HeaderLi>
				);
			})}
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
	const [Modal, open, _, isOpen] = useModal("modal-id", true);
	const { width } = useWindowSize();
	const data = useStaticQuery(graphql`
		query HeaderQuery {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "header" } } }
				sort: { order: ASC, fields: [frontmatter___createdAt] }
			) {
				edges {
					node {
						frontmatter {
							title
							path
						}
					}
				}
			}
		}
	`);
	return (
		<>
			<Modal>
				<SideBar>
					<HeaderLogo />
					<NavMenu data={data.allMarkdownRemark.edges} />
				</SideBar>
			</Modal>
			<Container>
				<LogoContainer>
					<HeaderLogo />
				</LogoContainer>
				{width && width <= RESPONSIVE_HEADER_WIDTH ? (
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
						<NavMenu data={data.allMarkdownRemark.edges} />
					</HeaderOptionsContainer>
				)}
				<ButtonAssine to="/inscricao">
					<IconStyled />
					Assinar Conteudo
				</ButtonAssine>
			</Container>
		</>
	);
}

export default Header;
