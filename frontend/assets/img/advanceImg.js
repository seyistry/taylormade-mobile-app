import { SvgXml } from "react-native-svg";
import React from "react";

export default function AdvanceImg() {
    const svgMarkup = `<svg width="93" height="61" viewBox="0 0 93 61" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0_574_890)">
	<path d="M33.5499 29.7535L29.4305 33.249C28.2929 34.2143 28.1532 35.919 29.1185 37.0565L36.1096 45.2954C37.0749 46.433 38.7796 46.5727 39.9171 45.6074L44.0366 42.1118C45.1741 41.1466 45.3138 39.4419 44.3485 38.3043L37.3574 30.0654C36.3921 28.9279 34.6875 28.7882 33.5499 29.7535Z" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M52.0873 14.0233L47.9678 17.5188C46.8303 18.4841 46.6906 20.1888 47.6559 21.3263L54.647 29.5652C55.6122 30.7028 57.3169 30.8424 58.4545 29.8772L62.5739 26.3816C63.7115 25.4163 63.8511 23.7117 62.8859 22.5741L55.8948 14.3352C54.9295 13.1977 53.2248 13.058 52.0873 14.0233Z" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M40.8528 34.1846L51.1514 25.4457" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	</g>
	<g clip-path="url(#clip1_574_890)">
	<path d="M14.575 26.5909L10.4556 30.0865C9.31804 31.0517 9.17838 32.7564 10.1437 33.894L17.1348 42.1328C18.1 43.2704 19.8047 43.4101 20.9423 42.4448L25.0617 38.9492C26.1993 37.984 26.3389 36.2793 25.3737 35.1417L18.3825 26.9028C17.4173 25.7653 15.7126 25.6256 14.575 26.5909Z" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M33.1125 10.8607L28.9931 14.3562C27.8555 15.3215 27.7159 17.0262 28.6811 18.1637L35.6722 26.4026C36.6375 27.5402 38.3422 27.6798 39.4797 26.7146L43.5992 23.219C44.7367 22.2537 44.8764 20.5491 43.9111 19.4115L36.92 11.1726C35.9548 10.0351 34.2501 9.8954 33.1125 10.8607Z" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M21.8781 31.022L32.1767 22.2831" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	</g>
	<g clip-path="url(#clip2_574_890)">
	<path d="M53.3161 33.7064L49.1967 37.2019C48.0591 38.1672 47.9195 39.8719 48.8847 41.0094L55.8759 49.2483C56.8411 50.3859 58.5458 50.5255 59.6834 49.5603L63.8028 46.0647C64.9404 45.0994 65.08 43.3948 64.1147 42.2572L57.1236 34.0183C56.1584 32.8808 54.4537 32.7411 53.3161 33.7064Z" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M71.8532 17.9764L67.7338 21.4719C66.5962 22.4372 66.4566 24.1419 67.4219 25.2795L74.413 33.5183C75.3782 34.6559 77.0829 34.7956 78.2205 33.8303L82.3399 30.3347C83.4775 29.3695 83.6171 27.6648 82.6519 26.5272L75.6607 18.2883C74.6955 17.1508 72.9908 17.0111 71.8532 17.9764Z" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M60.6191 38.1377L70.9178 29.3988" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	</g>
	<defs>
	<clipPath id="clip0_574_890">
	<rect width="37.8186" height="37.8186" fill="white" transform="translate(19.3501 27.6316) rotate(-40.3163)"/>
	</clipPath>
	<clipPath id="clip1_574_890">
	<rect width="37.8186" height="37.8186" fill="white" transform="translate(0.374512 24.469) rotate(-40.3163)"/>
	</clipPath>
	<clipPath id="clip2_574_890">
	<rect width="37.8186" height="37.8186" fill="white" transform="translate(39.1157 31.5847) rotate(-40.3163)"/>
	</clipPath>
	</defs>
	</svg>	
	`;
    const SvgImage = () => <SvgXml xml={svgMarkup} width="90px" />;
    return <SvgImage />;
}
