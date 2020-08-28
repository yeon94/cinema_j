import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
const Container = styled.div`
	height: calc(100vh - 50px);
	width: 100%;
	position: relative;
	padding: 50px;
`;
const Backdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	filter: blur(3px);
	opacity: 0.5;
	z-index: 0;
`;
const Content = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	z-index: 1;
	height: 100%;
`;
const Cover = styled.div`
	width: 30%;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	height: 100%;
	border-radius: 5px;
`;

const Data = styled.div`
	width: 70%;
	margin-left: 10px;
`;

const Title = styled.h3`
	font-size: 32px;
`;

const ItemContainer = styled.div`
	margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
	margin: 0 10px;
`;

const Overview = styled.p`
	font-size: 12px;
	opacity: 0.7;
	line-height: 1.5;
	width: 50%;
`;
const GoPage = styled.a`
	display: block;
	margin-top: 15px;
	font-size: 12px;
`;

const GovideoList = styled.ul`
	margin-top: 30px;
	font-size: 20px;
`;

const GoVideo = styled.li`
	margin-top: 10px;
	font-size: 12px;
	:first-child {
		margin-top: 30px;
	}
`;

const GovideoLink = styled.a``;

const DetailPresenter = ({ result, loading, error }) =>
	loading ? (
		<>
			<Helmet>
				<title>Loading | Cinema_J</title>
			</Helmet>
			<Loader />
		</>
	) : (
		<Container>
			<Helmet>
				<title>
					{result.original_title ? result.original_title : result.original_name}{" "}
					| Cinema_J
				</title>
			</Helmet>
			<Backdrop
				bgImage={
					result.backdrop_path
						? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
						: `https://image.tmdb.org/t/p/original${result.poster_path}`
				}
			/>
			<Content>
				<Cover
					bgImage={
						result.poster_path
							? `https://image.tmdb.org/t/p/original${result.poster_path}`
							: require("../../assets/noPhotos.jpg")
					}
				/>
				<Data>
					<Title>
						{result.original_title
							? result.original_title
							: result.original_name}
					</Title>
					<ItemContainer>
						<Item>
							{result.release_date
								? result.release_date.substring(0, 4)
								: result.first_air_date.substring(0, 4)}
						</Item>
						<Divider>•</Divider>
						<Item>
							{result.runtime ? result.runtime : result.episode_run_time[0]} min
						</Item>
						<Divider>•</Divider>
						<Item>
							{result.genres &&
								result.genres.map((genre, index) =>
									index === result.genres.length - 1
										? genre.name
										: `${genre.name} / `
								)}
						</Item>
					</ItemContainer>
					<Overview>{result.overview}</Overview>

					<GoPage href={result.homepage}>Go Home Page →</GoPage>
					<GoPage href={`https://www.imdb.com/title/${result.imdb_id}`}>
						Go Imdb page →
					</GoPage>
					{result.videos.results ? (
						<GovideoList>
							See Trailer
							{result.videos.results.map((video) => (
								<GoVideo key={video.key}>
									<GovideoLink
										href={`https://www.youtube.com/watch?v=${video.key}`}>
										- {video.name}
									</GovideoLink>
								</GoVideo>
							))}
						</GovideoList>
					) : null}
				</Data>
			</Content>
		</Container>
	);
DetailPresenter.propTypes = {
	result: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
};
export default DetailPresenter;
