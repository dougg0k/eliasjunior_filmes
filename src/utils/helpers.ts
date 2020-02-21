import { useEffect, useState } from "react";

export function useWindowSize() {
	const isClient = typeof window === "object";

	function getSize() {
		return {
			width: isClient ? window.innerWidth : undefined,
			height: isClient ? window.innerHeight : undefined,
		};
	}

	const [windowSize, setWindowSize] = useState(getSize);

	useEffect(() => {
		if (!isClient) {
			return;
		}

		function handleResize() {
			setWindowSize(getSize());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
}

export function getResponsiveIframeSize(width: number) {
	let responsiveWidth = 700;
	let responsiveHeight = 400;
	if (width < 1550) {
		responsiveWidth = 600;
		responsiveHeight = 340;
	}
	if (width < 1370) {
		responsiveWidth = 800;
		responsiveHeight = 450;
	}
	if (width < 830) {
		responsiveWidth = 600;
		responsiveHeight = 340;
	}
	if (width < 700) {
		responsiveWidth = width - 85;
	}
	if (width < 675) {
		responsiveHeight = 320;
	}
	if (width < 635) {
		responsiveWidth = width - 85;
		responsiveHeight = 300;
	}
	if (width < 600) {
		responsiveHeight = 290;
	}
	if (width < 580) {
		responsiveHeight = 270;
	}
	if (width < 550) {
		responsiveHeight = 270;
		responsiveWidth = width - 55;
	}
	if (width < 515) {
		responsiveHeight = 250;
	}
	if (width < 485) {
		responsiveHeight = 240;
	}
	if (width < 465) {
		responsiveHeight = 230;
		responsiveWidth = width - 35;
	}
	if (width < 430) {
		responsiveHeight = 210;
		responsiveWidth = width - 50;
	}
	if (width < 405) {
		responsiveHeight = 190;
	}
	if (width < 370) {
		responsiveHeight = 180;
	}
	if (width < 350) {
		responsiveHeight = 170;
	}
	if (width < 335) {
		responsiveHeight = 160;
	}
	return { responsiveWidth, responsiveHeight };
}

export function scrollToTop() {
	window.scroll({ top: 0, behavior: "smooth" });
}
