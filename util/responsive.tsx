import { useState, useEffect } from 'react';

interface useResponsive {
	type?: 'resize' | 'color';
	from?: 'up' | 'down';
	resolution?: 'lg' | 'md' | 'sm';
}
const useResponsive = ({ type = 'resize', from = 'down', resolution = 'sm' }: useResponsive) => {
	const [matches, setMatches] = useState(false);
	const key = from === 'down' ? 'max-width' : 'min-width';
	const res = resolution === 'lg' ? 1280 : resolution === 'md' ? 991 : 768;

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(${key}:${res}px)`);

		const handleChange = (event: MediaQueryListEvent) => {
			setMatches(event.matches);
		};

		mediaQuery.addEventListener('change', handleChange);
		setMatches(mediaQuery.matches);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, [res, key]);

	return matches;
};

export default useResponsive;
