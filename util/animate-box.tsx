import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Box {
	initial: {
		x?: number;
		y?: number;
	};
	ease?: string;
	delay?: number;
	children: React.ReactNode;
}
export default function Box(props: Box) {
	const { initial, ease, delay, children } = props;
	const control = useAnimation();
	const [ref, inView] = useInView();

	const exampleVariant = {
		hidden: { x: 0, y: 0, ...initial, opacity: 0 },
		visible: { x: 0, y: 0, opacity: 1 },
	};

	useEffect(() => {
		if (inView) {
			control.start('visible');
		} else {
			control.start('hidden');
		}
	}, [control, inView]);

	return (
		<motion.div
			variants={exampleVariant}
			// initial={{ x: 0 , y : 0 , ...initial, opacity: 0 }}
			// animate={{ x: 0, y: 0, opacity: 1 }}
			initial='hidden'
			// animate='visible'
			ref={ref}
			animate={control}
			transition={{ delay: delay || 1, ease: ease || 'easeIn' }}>
			{children}
		</motion.div>
	);
}
