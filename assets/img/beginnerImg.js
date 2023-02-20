import { SvgXml } from "react-native-svg";
import React from "react";

export default function BeginnerImg() {
    const svgMarkup = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0_193_1991)">
	<path d="M14.3156 26.5907L10.1962 30.0862C9.05864 31.0515 8.91898 32.7562 9.88425 33.8937L16.8754 42.1326C17.8406 43.2702 19.5453 43.4098 20.6829 42.4445L24.8023 38.949C25.9399 37.9837 26.0795 36.279 25.1143 35.1415L18.1231 26.9026C17.1579 25.765 15.4532 25.6254 14.3156 26.5907Z" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M32.8528 10.8607L28.7333 14.3562C27.5958 15.3215 27.4561 17.0262 28.4214 18.1637L35.4125 26.4026C36.3777 27.5402 38.0824 27.6798 39.22 26.7146L43.3394 23.219C44.477 22.2537 44.6166 20.5491 43.6514 19.4115L36.6603 11.1726C35.695 10.0351 33.9903 9.8954 32.8528 10.8607Z" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M21.6187 31.022L31.9173 22.2831" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	</g>
	<defs>
	<clipPath id="clip0_193_1991">
	<rect width="37.8186" height="37.8186" fill="white" transform="translate(0.115234 24.469) rotate(-40.3163)"/>
	</clipPath>
	</defs>
	</svg>	
	`;
    const SvgImage = () => <SvgXml xml={svgMarkup} width="90px" />;
    return <SvgImage />;
}
