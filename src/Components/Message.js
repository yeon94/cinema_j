import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Text = styled.span``;

const Message = ({ text, color }) => (
	<Container>
		<Text color={color}>{text}</Text>
	</Container>
);

Message.prototype = {
	color: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default Message;
