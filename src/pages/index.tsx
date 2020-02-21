import * as React from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";

const Container = styled.div``;

function IndexPage() {
	return (
		<Container id="index-page">
			<HeroSection />
		</Container>
	);
}

export default IndexPage;
