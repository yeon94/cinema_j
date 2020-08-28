import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
	margin-bottom: 20px;
`;
const Title = styled.span`
	font-size: 14px;
	font-weight: 600;
`;

const Grid = styled.div`
	margin-top: 25px;
	display: grid;
	grid-template-columns: repeat(auto-fill, 125px);
	grid-gap: 25px;
	width: 100%;
`;
const Button = styled.button`
	width: 100%;
	height: 20px;
	position: absolute;
	bottom: 0;
	background-color: #f6c0d0;
	color: #1e3231;
	border: none;
	border-radius: 5px;
`;

const Section = ({ title, children }) => {
	const [viewBtn, setViewBtn] = useState({
		display: "block",
	});
	const [divStyle, setDivStyle] = useState({
		width: window.width,
		height: 250,
		overflow: "hidden",
		position: "relative",
	});

	const clickBtn = (target) => {
		setDivStyle({
			width: window.width,
			height: 460,
			overflow: "hidden",
			position: "relative",
		});
		setViewBtn({
			display: "none",
		});
	};

	return (
		<Container>
			<div style={divStyle}>
				<Title>{title}</Title>
				<Grid>{children}</Grid>
				<Button onClick={clickBtn} style={viewBtn}>
					View More
				</Button>
			</div>
		</Container>
	);
};
Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};
export default Section;
