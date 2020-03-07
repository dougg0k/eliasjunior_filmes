import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare";
import { CameraMovie } from "@styled-icons/boxicons-regular/CameraMovie";
import { Whatsapp } from "@styled-icons/fa-brands/Whatsapp";
import { Vimeo } from "@styled-icons/icomoon/Vimeo";
import { Youtube2 } from "@styled-icons/icomoon/Youtube2";
import { SocialInstagram } from "@styled-icons/typicons/SocialInstagram";
import { useEffect, useState } from "react";
import { StyledIcon } from "styled-icons/types";

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

export function getResponsiveIframeSize(
	width: number,
	initialWidth = 700,
	initialHeight = 400,
) {
	let responsiveWidth = initialWidth;
	let responsiveHeight = initialHeight;
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

export function scrollToTop(): void {
	window.scroll({ top: 0, behavior: "smooth" });
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export function normalizeGraphQLData(
	arr: [{ node: { frontmatter: {} } }],
): any[] {
	return arr.map(item => item.node.frontmatter);
}

export function removeProtocolAndDomainFromUrl(url: string) {
	return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
}

export function addIconsToItems(arr: Array<{ text: string; url: string }>) {
	return arr.map(item => {
		const emptyObj: { icon: StyledIcon } = { icon: CameraMovie };
		const formatLink = item.url ? removeProtocolAndDomainFromUrl(item.url) : "";
		if (formatLink.startsWith("youtube")) {
			emptyObj.icon = Youtube2;
		}
		if (formatLink.startsWith("instagram")) {
			emptyObj.icon = SocialInstagram;
		}
		if (formatLink.startsWith("facebook")) {
			emptyObj.icon = FacebookSquare;
		}
		if (formatLink.startsWith("vimeo")) {
			emptyObj.icon = Vimeo;
		}
		if (!item.url || item.url.length <= 0) {
			emptyObj.icon = Whatsapp;
		}
		return { ...item, ...emptyObj };
	});
}

export function getYoutubeIdFromUrl(url: string) {
	const [a, , b] = url
		.replace(/(>|<)/gi, "")
		.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
	if (b !== undefined) {
		return b.split(/[^0-9a-z_-]/i)[0];
	} else {
		return a;
	}
}

export function getCurrentPath(): string {
	return typeof window !== "undefined" ? window.location.href : "";
}

export function getCurrentYear(): number {
	return new Date().getFullYear();
}
