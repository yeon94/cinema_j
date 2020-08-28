import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	font-size: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #f6c0d0;
`;

export default () => (
	<Container>
		<span role='img' aria-label='Loading'>
			Loading... Please wait!
		</span>
	</Container>
);
