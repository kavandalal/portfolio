'use client';
import React, { useRef, useEffect } from 'react';
import anime from 'animejs';
// import Image from 'next/image';
import { ReactSVG } from 'react-svg';

interface LineDrawingAnimation {
	svgPath: string;
}
const LineDrawingAnimation = ({ svgPath }: LineDrawingAnimation) => {
	const svgRef = useRef(null);
	// useEffect(() => {
	// 	const svgElement = svgRef.current;
	// 	console.log({ result: svgElement.querySelectorAll('path') });

	// 	const lineDrawingAnimation = anime({
	// 		targets: svgElement.querySelectorAll('path'),
	// 		strokeDashoffset: [anime.setDashoffset, 0],
	// 		easing: 'easeInOutSine',
	// 		duration: 2000,
	// 		delay: (el, i) => i * 100, // Delay between each path animation
	// 		direction: 'alternate',
	// 		loop: true,
	// 	});

	// 	return () => {
	// 		lineDrawingAnimation.pause();
	// 	};
	// }, []);

	return (
		// <div ref={svgRef}>
		// 	<Image src={svgPath} alt='' width={100} height={100} />
		// </div>

		<ReactSVG
			ref={svgRef}
			src={svgPath}
			beforeInjection={(svg) => {
				const paths = svg.querySelectorAll('path');
				anime({
					targets: paths,
					strokeDashoffset: [anime.setDashoffset, 0],
					easing: 'spring',
					duration: 2000,
					delay: (el, i) => i * 300, // Delay between each path animation
					direction: 'alternate',
					loop: true,
				});
			}}
			afterInjection={(svg) => {
				const paths = svg.querySelectorAll('path');
				paths.forEach((path) => {
					// Add animations or transitions for each path
				});
			}}
		/>
	);
};

export default LineDrawingAnimation;
