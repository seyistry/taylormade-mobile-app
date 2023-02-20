import { SvgXml } from "react-native-svg";
import React from "react";

export default function IntermediateImg() {
    const svgMarkup = `<svg width="74" height="58" viewBox="0 0 74 58" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0_574_889)">
	<path d="M14.5499 26.7532L10.4305 30.2488C9.2929 31.2141 9.15323 32.9188 10.1185 34.0563L17.1096 42.2952C18.0749 43.4328 19.7796 43.5724 20.9171 42.6071L25.0366 39.1116C26.1741 38.1463 26.3138 36.4416 25.3485 35.3041L18.3574 27.0652C17.3921 25.9276 15.6875 25.788 14.5499 26.7532Z" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M33.0873 11.023L28.9678 14.5186C27.8303 15.4839 27.6906 17.1885 28.6559 18.3261L35.647 26.565C36.6122 27.7025 38.3169 27.8422 39.4545 26.8769L43.5739 23.3814C44.7115 22.4161 44.8511 20.7114 43.8859 19.5739L36.8948 11.335C35.9295 10.1974 34.2248 10.0578 33.0873 11.023Z" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M21.8528 31.1843L32.1514 22.4454" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	</g>
	<g clip-path="url(#clip1_574_889)">
	<path d="M34.3161 30.7064L30.1967 34.2019C29.0591 35.1672 28.9195 36.8719 29.8847 38.0094L36.8759 46.2483C37.8411 47.3859 39.5458 47.5255 40.6834 46.5603L44.8028 43.0647C45.9404 42.0994 46.08 40.3948 45.1147 39.2572L38.1236 31.0183C37.1584 29.8808 35.4537 29.7411 34.3161 30.7064Z" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M52.8532 14.9764L48.7338 18.4719C47.5962 19.4372 47.4566 21.1419 48.4219 22.2795L55.413 30.5183C56.3782 31.6559 58.0829 31.7956 59.2205 30.8303L63.3399 27.3347C64.4775 26.3695 64.6171 24.6648 63.6519 23.5272L56.6607 15.2883C55.6955 14.1508 53.9908 14.0111 52.8532 14.9764Z" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M41.6191 35.1377L51.9178 26.3988" stroke="white" stroke-width="1.88062" stroke-linecap="round" stroke-linejoin="round"/>
	</g>
	<defs>
	<clipPath id="clip0_574_889">
	<rect width="37.8186" height="37.8186" fill="white" transform="translate(0.350098 24.6313) rotate(-40.3163)"/>
	</clipPath>
	<clipPath id="clip1_574_889">
	<rect width="37.8186" height="37.8186" fill="white" transform="translate(20.1157 28.5847) rotate(-40.3163)"/>
	</clipPath>
	</defs>
	</svg>	
	`;
    const SvgImage = () => <SvgXml xml={svgMarkup} width="90px" />;
    return <SvgImage />;
}
