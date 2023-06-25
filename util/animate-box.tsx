import clsx from 'clsx';
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
	customClass?: string;
}
export default function Box(props: Box) {
	const { initial, ease, delay, children, customClass } = props;
	const control = useAnimation();
	const [ref, inView] = useInView();

	const exampleVariant = {
		hidden: { x: initial.x || 0, y: initial.y || 0, opacity: 0 },
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
			animate={control}
			ref={ref}
			transition={{ delay: delay || 1, ease: ease || 'easeIn' }}
			className={clsx(customClass)}>
			{children}
		</motion.div>
	);
}
