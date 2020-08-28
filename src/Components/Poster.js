import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	font-size: 12px;
`;

const Image = styled.div`
	background-image: url(${(props) => props.bgUrl});
	height: 180px;
	background-size: cover;
	border-radius: 4px;
	background-position: center center;
	transition: opacity 0.1s linear;
`;

const Rating = styled.span`
	bottom: 5px;
	right: 5px;
	position: absolute;
	opacity: 0;
	transition: opacity 0.1s linear;
`;
const ImageContainer = styled.div`
	margin-bottom: 10px;
	position: relative;
	&:hover {
		${Image} {
			opacity: 0.3;
		}
		${Rating} {
			opacity: 1;
		}
	}
`;
const Title = styled.span`
	display: block;
	width: 100%;
	margin-bottom: 3px;
	position: absolute;
	bottom: 30px;
	text-shadow: 1px 1px 1px #000;
	background-color: rgba(0, 0, 0, 0.3);
	padding-left: 5px;
`;

const Year = styled.span`
	font-size: 10px;
	width: 100%;
	color: rgba(255, 255, 255, 0.8);
	text-shadow: 1px 1px 1px #000;
	background-color: rgba(0, 0, 0, 0.3);
	position: absolute;
	bottom: 23px;
	padding-left: 5px;
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
	<Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
		<Container>
			<ImageContainer>
				<Image
					bgUrl={
						imageUrl
							? `https://image.tmdb.org/t/p/w300${imageUrl}`
							: require("../assets/noPhotos.jpg")
					}
				/>
				<Title>
					{title.length > 18 ? `${title.substring(0, 18)}...` : title}
				</Title>
				<Year>{year}</Year>
				<Rating>
					<span role='img' aria-label='rating'>
						⭐️
					</span>{" "}
					{rating}/10
				</Rating>
			</ImageContainer>
		</Container>
	</Link>
);
Poster.propTypes = {
	id: PropTypes.number.isRequired,
	imageUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number,
	year: PropTypes.string,
	isMovie: PropTypes.bool,
};
export default Poster;
