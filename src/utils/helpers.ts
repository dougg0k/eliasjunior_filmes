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

export function getResponsiveIframeSize(width: number, height: number) {
	let responsiveWidth = 600;
	let responsiveHeight = 400;
	if (width && width < 900) {
		const minusInPx = width < 480 ? 30 : 100;
		responsiveWidth = Number(width - minusInPx);
	}
	if (width && width < 500) {
		responsiveHeight = height * 1.75;
	}
	return { responsiveWidth, responsiveHeight };
}
