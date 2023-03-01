import { SvgXml } from "react-native-svg";
import React from "react";

export default function SplashImg() {
    const svgMarkup = `<svg width="172" height="149" viewBox="0 0 172 149" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M30.9789 110.693C30.8218 110.89 30.7826 111.125 30.9789 111.322C31.5286 111.832 32.4709 112.343 33.2562 112.343C33.4918 112.343 33.7273 112.264 33.8844 112.146C35.4157 111.047 37.6144 110.929 39.4598 111.125C40.7948 111.243 40.9518 108.887 39.9702 108.416C39.2635 108.102 38.9101 108.102 38.1641 108.102C35.8868 108.102 32.3139 108.927 30.9789 110.693ZM10.7189 128.166C17.1581 128.166 20.8882 122.551 20.8882 116.74C20.8882 115.837 20.26 115.484 19.5925 115.484C18.8857 115.484 18.1397 115.876 18.0612 116.426C17.5508 120.941 15.7839 125.26 10.6011 125.26C7.4208 125.26 5.33983 123.061 5.30057 120.195C5.26131 116.583 8.44165 112.107 16.7262 112.107C20.5348 112.107 24.0293 113.246 27.6415 114.384C23.99 119.214 16.844 134.212 10.876 134.212C8.40239 134.212 6.71406 131.817 6.04658 131.307C5.77173 131.11 5.49689 131.032 5.22204 131.032C4.24046 131.032 3.37666 132.21 4.00488 133.191C5.3791 135.39 8.08828 137 10.876 137C19.8673 137 25.3642 121.255 30.8218 115.405C33.6881 116.269 36.7114 116.976 40.0095 116.976C41.5015 116.976 45.8205 116.504 47.5088 115.091C48.5689 114.149 48.137 112.421 46.9199 112.421C46.7236 112.421 46.488 112.46 46.2524 112.578C43.7003 113.677 42.4831 114.031 39.931 114.031C31.3715 114.031 25.7176 109.162 16.0195 109.162C6.557 109.162 2.4736 115.091 2.4736 120.195C2.4736 124.514 5.49689 128.166 10.7189 128.166ZM30.7694 136.372C32.1829 136.372 33.9105 135.429 35.481 134.016C36.07 135.547 37.6012 136.45 38.9362 136.45C42.1558 136.45 43.6085 134.762 46.5533 129.579C46.9459 128.912 46.8674 128.362 46.1607 127.891C45.9251 127.734 45.6895 127.655 45.4147 127.655C44.9042 127.655 44.3546 127.969 44.0404 128.48C41.8417 132.092 40.546 133.545 39.211 133.545C38.465 133.545 38.1902 133.034 38.1902 132.681C38.1902 130.953 41.9595 124.122 43.4908 122.119C44.0404 121.373 43.4908 120.47 42.9018 120.156C42.6662 120.038 42.4306 119.999 42.1558 119.999C41.6846 119.999 41.1742 120.195 40.8994 120.627C40.5853 121.098 40.2712 121.609 39.9178 122.119C39.2503 120.549 37.9153 119.724 36.227 119.724C31.005 119.724 26.6467 126.203 26.2933 131.071C26.097 134.016 27.3535 136.372 30.7694 136.372ZM37.4442 125.457C37.4049 126.006 37.2086 126.634 36.973 127.263C35.9914 129.461 33.2037 133.466 30.6516 133.466C29.5522 133.466 29.0811 132.406 29.1596 130.993C29.3952 127.812 32.7326 122.63 35.7166 122.63C36.9338 122.63 37.562 123.729 37.4442 125.457ZM48.8128 120.431C46.5748 124.043 42.4521 130.011 42.4521 132.877C42.4521 135.272 44.3368 136.254 45.868 136.254C46.7318 136.254 47.7527 135.783 48.8521 135.037C48.695 135.351 48.5772 135.665 48.4594 135.901C45.9858 136.647 43.3944 137.432 40.803 139.042C38.9969 140.18 38.1331 141.829 38.1331 143.596C38.0939 145.795 39.7822 147.287 41.6276 147.287C45.8288 147.287 48.1061 144.067 49.8729 140.102C49.7551 139.434 48.4202 139.317 47.3601 139.474C54.1134 137.079 58.4716 136.018 62.1231 129.579C62.5158 128.912 62.4372 128.362 61.7305 127.891C61.4949 127.734 61.2593 127.655 60.9845 127.655C60.4741 127.655 59.9244 127.969 59.6103 128.48C57.5293 131.935 55.0164 133.545 52.268 134.644C55.252 128.794 56.587 124.985 60.2385 122.198C60.5526 122.001 60.6311 121.412 60.317 120.745C60.0422 120.156 59.4139 119.842 58.6287 120.117C57.1759 120.588 55.6446 122.355 54.2312 124.593C54.2312 124.593 54.1919 124.632 54.1919 124.671L53.9956 124.868C49.6373 132.171 46.4963 133.309 46.1036 133.309C45.711 133.309 45.4754 133.113 45.3969 132.799C45.1613 131.503 48.4594 126.399 51.4042 121.923C51.679 121.491 51.2864 120.47 50.6974 120.156C50.4619 120.038 50.2263 119.999 49.9514 119.999C49.4803 119.999 49.0091 120.156 48.8128 120.431ZM46.8104 139.67C45.4361 142.575 43.7871 144.342 41.981 144.342C41.3135 144.342 41.0779 143.91 41.0779 143.478C41.0779 142.811 41.4313 142.222 42.1773 141.712C43.1981 140.966 44.8865 140.337 46.8104 139.67ZM72.1918 110.262C69.9145 110.262 66.7734 115.091 63.7894 120.195C60.9231 125.142 58.4103 130.247 58.4103 132.799C58.4103 134.683 59.2741 136.45 61.944 136.45C65.7133 136.45 68.1869 133.074 69.6396 129.658C69.9537 128.912 69.8752 128.362 69.1685 127.891C68.9329 127.734 68.658 127.655 68.3439 127.655C67.7942 127.655 67.2446 127.93 67.0482 128.48C66.3415 130.325 64.1035 133.545 62.2188 133.545C61.4728 133.545 61.2372 133.113 61.2372 132.445C61.2372 129.893 70.5427 113.677 72.231 113.677C72.7807 113.677 72.7022 114.149 73.4874 114.149C73.9979 114.149 74.5476 113.638 74.5476 112.578C74.5476 110.89 73.2126 110.262 72.1918 110.262ZM71.3841 136.372C73.5828 136.372 75.546 135.194 77.1166 133.466C77.784 133.663 78.4908 133.741 79.2761 133.741C82.2601 133.741 83.8699 132.014 85.2441 129.579C85.6367 128.912 85.5582 128.362 84.8515 127.891C84.6159 127.734 84.3803 127.655 84.1055 127.655C83.595 127.655 83.0454 127.969 82.7312 128.48C81.9067 129.815 80.9251 130.914 79.2368 130.914L79.0012 130.875C78.9619 130.875 78.9227 130.875 78.8834 130.875C79.8257 129.108 80.3754 127.145 80.4147 125.378C80.454 121.687 78.5693 119.724 75.9779 119.724C70.7559 119.724 66.7117 126.203 66.6332 131.071C66.5939 134.016 68.0074 136.372 71.3841 136.372ZM75.4282 128.872C75.1534 128.637 74.8393 128.519 74.5644 128.519C73.5436 128.519 72.6798 129.776 73.308 130.757C73.5828 131.189 73.9362 131.621 74.3681 132.014C73.5043 132.877 72.4835 133.427 71.5411 133.427C70.1277 133.427 69.4994 132.445 69.5387 131.032C69.578 127.852 72.6405 122.63 75.6246 122.63C76.8417 122.63 77.5092 123.729 77.4699 125.457C77.4699 126.674 76.9595 128.166 76.2135 129.54C75.9387 129.344 75.7031 129.108 75.4282 128.872ZM87.7751 117.368C86.5186 117.368 86.3223 118.154 86.3223 118.978C86.3223 119.646 86.7935 120.156 87.7358 120.156C88.207 120.156 88.6389 120.234 88.9922 120.313C88.364 120.431 87.6965 120.588 87.3039 120.784C86.7542 121.569 82.9849 128.048 82.553 128.794C82.0819 129.422 83.2598 130.482 84.2021 130.482C84.5162 130.482 84.8303 130.364 85.0266 130.011C85.8511 128.598 88.2462 124.671 90.2879 121.02C91.1517 121.727 91.4266 122.787 91.4266 123.336C91.4266 125.103 88.0106 129.187 88.0106 132.877C88.0106 134.566 89.3063 136.411 91.2695 136.411C94.2928 136.411 95.7455 134.762 98.6903 129.579C99.0829 128.912 99.0044 128.362 98.2977 127.891C98.0621 127.734 97.8265 127.655 97.5517 127.655C97.0412 127.655 96.4916 127.969 96.1774 128.48C95.51 129.579 93.1934 133.466 91.7407 133.466C91.191 133.466 91.0339 133.152 90.9554 132.838C90.5235 130.6 94.3321 126.36 94.3321 123.219C94.3321 121.412 93.5861 119.449 91.7407 118.35C92.1726 117.447 92.5652 116.622 92.8793 115.955C93.0756 115.405 92.5259 114.895 92.0155 114.659C91.8192 114.581 91.6621 114.541 91.4658 114.541C90.9554 114.541 90.445 114.855 90.0131 115.523L88.9137 117.447C88.5603 117.408 88.1677 117.368 87.7751 117.368ZM106.81 122.944C107.045 122.944 107.242 123.022 107.242 123.572C107.242 125.81 103.472 130.129 101.156 134.88C100.881 135.822 101.666 136.333 102.412 136.333C102.726 136.333 103.08 136.215 103.237 135.979C105.122 133.074 112.699 122.944 115.566 122.944C115.801 122.944 115.998 123.022 115.998 123.572C115.998 125.692 111.404 130.364 111.404 133.466C111.404 135.508 113.092 136.45 114.898 136.45C117.686 136.45 119.728 134.487 122.515 129.579C122.908 128.912 122.829 128.362 122.123 127.891C121.887 127.734 121.651 127.655 121.377 127.655C120.866 127.655 120.317 127.969 120.002 128.48C119.06 130.011 117.018 133.466 114.977 133.466C114.82 133.466 114.584 133.309 114.584 133.034C114.584 130.953 119.335 126.203 119.335 122.865C119.335 121.334 118.236 119.92 116.39 119.92C114.113 119.92 112.268 121.727 110.54 123.415C110.54 123.219 110.579 123.022 110.579 122.865C110.579 121.334 109.441 119.92 107.595 119.92C106.496 119.92 105.161 120.274 103.355 121.923C103.59 121.491 103.119 120.47 102.569 120.156C102.334 120.038 102.02 119.96 101.745 119.96C101.274 119.96 100.842 120.156 100.685 120.431C98.0934 125.142 95.7768 128.912 92.9106 134.291C92.675 134.723 93.1069 135.744 93.6959 136.058C93.9315 136.175 94.2063 136.215 94.4811 136.215C94.9523 136.215 95.4235 136.058 95.5805 135.783C96.9155 133.348 98.1719 131.032 99.5069 128.676C100.842 126.949 104.807 122.944 106.81 122.944ZM123.867 136.372C125.28 136.372 127.008 135.429 128.578 134.016C129.167 135.547 130.699 136.45 132.034 136.45C135.253 136.45 136.706 134.762 139.651 129.579C140.043 128.912 139.965 128.362 139.258 127.891C139.023 127.734 138.787 127.655 138.512 127.655C138.002 127.655 137.452 127.969 137.138 128.48C134.939 132.092 133.643 133.545 132.308 133.545C131.562 133.545 131.288 133.034 131.288 132.681C131.288 130.953 135.057 124.122 136.588 122.119C137.138 121.373 136.588 120.47 135.999 120.156C135.764 120.038 135.528 119.999 135.253 119.999C134.782 119.999 134.272 120.195 133.997 120.627C133.683 121.098 133.369 121.609 133.015 122.119C132.348 120.549 131.013 119.724 129.324 119.724C124.102 119.724 119.744 126.203 119.391 131.071C119.194 134.016 120.451 136.372 123.867 136.372ZM130.542 125.457C130.502 126.006 130.306 126.634 130.07 127.263C129.089 129.461 126.301 133.466 123.749 133.466C122.65 133.466 122.178 132.406 122.257 130.993C122.493 127.812 125.83 122.63 128.814 122.63C130.031 122.63 130.659 123.729 130.542 125.457ZM159.422 110.262C156.438 110.262 151.53 119.174 149.881 122.158C149.174 120.549 147.8 119.724 146.111 119.724C140.85 119.724 136.727 126.203 136.57 131.071C136.453 134.016 137.827 136.372 141.203 136.372C142.578 136.372 144.187 135.508 145.68 134.173C146.308 135.587 147.76 136.411 149.056 136.411C152.276 136.411 153.729 134.762 156.673 129.579C157.066 128.912 156.987 128.362 156.281 127.891C156.045 127.734 155.809 127.655 155.535 127.655C155.024 127.655 154.475 127.969 154.16 128.48C151.962 132.092 150.666 133.545 149.331 133.545C148.585 133.545 148.31 133.034 148.31 132.681C148.31 130.247 157.694 113.677 159.422 113.677C159.971 113.677 159.893 114.149 160.717 114.149C161.189 114.149 161.778 113.638 161.778 112.578C161.778 110.89 160.403 110.262 159.422 110.262ZM147.486 125.457C147.407 128.48 143.599 133.466 141.007 133.466C139.908 133.466 139.397 132.406 139.437 130.993C139.554 127.812 142.735 122.63 145.68 122.63C146.936 122.63 147.564 123.729 147.486 125.457ZM163.607 119.763C157.992 119.763 153.752 125.967 153.752 130.404C153.752 134.683 156.736 136.333 160.113 136.333C164.942 136.333 168.515 133.584 170.792 129.54C171.185 128.872 171.106 128.323 170.4 127.812C170.164 127.655 169.928 127.616 169.693 127.616C169.143 127.616 168.633 127.891 168.279 128.441C166.512 131.346 163.764 133.545 160.23 133.545C158.424 133.545 156.893 132.799 156.736 130.639C160.859 131.189 167.298 128.205 167.298 123.69C167.298 121.53 165.806 119.763 163.607 119.763ZM157.246 127.773C158.267 125.221 160.662 122.708 163.136 122.708C164.078 122.708 164.471 123.101 164.471 123.611C164.471 125.81 159.484 128.166 157.246 127.773Z" fill="white"/>
	<path d="M93.4783 34.3198L86.6506 27.4922L96.1526 17.9902L102.98 24.8179L93.4783 34.3198Z" fill="white"/>
	<path d="M74.818 52.98L67.9904 46.1523L77.4923 36.6504L84.32 43.478L74.818 52.98Z" fill="white"/>
	<path d="M52.4121 62.2222C51.8483 62.7865 51.8483 63.7062 52.4121 64.2706L56.3109 68.1693C56.8752 68.7337 57.7949 68.7337 58.3593 68.1693L60.2085 66.3201L54.2615 60.373L52.4121 62.2222Z" fill="white"/>
	<path d="M58.6923 39.3178C58.6428 39.3178 58.5471 39.3299 58.4673 39.4091L52.611 45.2654C52.5312 45.3452 52.5197 45.4398 52.5197 45.4904C52.5197 45.541 52.5318 45.6356 52.611 45.7154L55.3386 48.4436L55.3392 48.4441L72.5238 65.6287C72.5254 65.6304 72.5254 65.6309 72.5271 65.6326L75.2525 68.358C75.3746 68.4784 75.5792 68.4784 75.7013 68.358L81.5588 62.5005C81.6803 62.379 81.6803 62.1732 81.5582 62.0511L58.9172 39.4087C58.8374 39.3295 58.7423 39.3174 58.6928 39.3174L58.6923 39.3178Z" fill="white"/>
	<path d="M50 53.7727L67.186 70.9686L71.3604 66.8048L54.1743 49.6104L50 53.7727Z" fill="white"/>
	<path d="M118.17 8.358C118.733 7.79365 118.733 6.87399 118.17 6.30962L114.271 2.41084C113.989 2.12867 113.617 1.9873 113.247 1.9873C112.876 1.9873 112.506 2.12867 112.223 2.41139L110.374 4.26066L116.321 10.2071L118.17 8.358Z" fill="white"/>
	<path d="M95.7159 2.61029C95.6554 2.54978 95.5734 2.51953 95.4909 2.51953C95.4089 2.51953 95.327 2.55033 95.2654 2.61084L89.4096 8.46718C89.288 8.58874 89.288 8.79445 89.4101 8.91656L112.051 31.5576C112.21 31.716 112.34 31.7182 112.5 31.5576L118.356 25.7013C118.436 25.6215 118.448 25.5269 118.448 25.4763C118.448 25.4257 118.436 25.3311 118.356 25.2513L95.7159 2.61029Z" fill="white"/>
	<path d="M103.783 0L99.6091 4.16266L116.805 21.3585L120.968 17.1959L103.783 0Z" fill="white"/>
	<path d="M96.1522 52.9801L67.99 24.8179L74.8176 17.9902L102.98 46.1525L96.1522 52.9801Z" fill="white"/>
	<path d="M58.7444 2.41126C58.4623 2.12854 58.0915 1.98828 57.7203 1.98828C57.3506 1.98828 56.9788 2.12964 56.6966 2.41181L52.7978 6.31059C52.2341 6.87494 52.2341 7.7946 52.7978 8.35897L54.6471 10.2082L60.5936 4.26179L58.7444 2.41126Z" fill="white"/>
	<path d="M81.5586 8.46775L75.7012 2.61029C75.6407 2.54978 75.5587 2.51953 75.4762 2.51953C75.3942 2.51953 75.3123 2.55033 75.2507 2.61084L63.9318 13.9302L55.3386 22.5246C55.3386 22.5246 55.338 22.5246 55.338 22.5252L52.6104 25.2534C52.5306 25.3332 52.519 25.4278 52.519 25.4784C52.519 25.529 52.5311 25.6236 52.6104 25.7034L58.4667 31.5597C58.6262 31.7192 58.756 31.7192 58.9155 31.5597L81.558 8.91866C81.6801 8.79545 81.6801 8.58974 81.5591 8.46818L81.5586 8.46775Z" fill="white"/>
	<path d="M71.3599 4.17322L67.1972 0L50.0013 17.1846L54.1646 21.3589L71.3599 4.17322Z" fill="white"/>
	<path d="M112.609 68.1705C113.173 68.7348 114.093 68.7348 114.657 68.1705L118.556 64.2717C119.12 63.7073 119.12 62.7877 118.556 62.2233L116.707 60.374L110.76 66.321L112.609 68.1705Z" fill="white"/>
	<path d="M89.4102 62.5L95.2666 68.3574C95.3887 68.4779 95.5933 68.4779 95.7154 68.3574L118.358 45.715C118.438 45.6352 118.449 45.5406 118.449 45.49C118.449 45.4394 118.437 45.3448 118.358 45.265L112.501 39.4087C112.422 39.3289 112.327 39.3174 112.277 39.3174C112.227 39.3174 112.131 39.3295 112.053 39.4081L89.4102 62.0506C89.2892 62.1721 89.2892 62.3779 89.4102 62.4994V62.5Z" fill="white"/>
	<path d="M99.6093 66.8041L103.772 70.9668L120.968 53.7822L116.805 49.6084L99.6093 66.8041Z" fill="white"/>
	</svg>
	`;
    const SvgImage = () => <SvgXml xml={svgMarkup} width="301px" />;
    return <SvgImage />;
}