import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
	width: 100%;
	height: 50px;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	border-bottom: 2px solid #f6c0d0;
	z-index: 10;
`;

const Logo = styled.h1`
	display: flex;
	justify-content: center;
	width: 100px;
	font-size: 16px;
	font-weight: 800;
	color: #f6c0d0;
`;

const List = styled.ul`
	height: 100%;
	display: flex;
	align-items: center;
`;

const Item = styled.li`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80px;
	font-size: 13px;
	background-color: ${(props) => (props.now ? "#F6C0D0" : "transparent")};
	color: ${(props) => (props.now ? "#1E3231" : "#F6C0D0")};
	transition: 0.3s linear;
`;

const SLink = styled(Link)``;

export default withRouter(({ location: { pathname } }) => (
	<Header>
		<List>
			<Logo now={pathname === "/"}>
				<SLink to='/'>CINEMA_J</SLink>
			</Logo>
			<Item now={pathname === "/"}>
				<SLink to='/'>Movies</SLink>
			</Item>
			<Item now={pathname === "/tv"}>
				<SLink to='/tv'>TV</SLink>
			</Item>
			<Item now={pathname === "/search"}>
				<SLink to='/search'>Search</SLink>
			</Item>
		</List>
	</Header>
));
