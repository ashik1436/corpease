import React from 'react';
import ErrorBoundary from './ErrorBoundary';

function useCountUp(target: number, start: boolean, duration = 3000) {
	const [count, setCount] = React.useState(0);
	React.useEffect(() => {
		if (!start) return;
		let startTimestamp: number | null = null;
		const step = (timestamp: number) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			setCount(Math.floor(progress * target));
			if (progress < 1) {
				requestAnimationFrame(step);
			} else {
				setCount(target);
			}
		};
		requestAnimationFrame(step);
		// eslint-disable-next-line
	}, [start, target, duration]);
	return count;
}

const StatCard: React.FC<{
	label: string;
	value: number;
	display: string;
	color: string;
	start: boolean;
}> = ({ label, value, display, color, start }) => {
	const count = useCountUp(value, start);
	let shown = display;
	const isDarkBg = color?.includes('#A37B5F') || color?.includes('#7A5944');

	if (display?.endsWith('M+')) {
		shown = `${(count / 1_000_000).toFixed(count === value ? 0 : 1)}M+`;
	} else if (display?.endsWith('K+')) {
		shown = `${(count / 1_000).toFixed(count === value ? 0 : 1)}K+`;
	} else if (display?.endsWith('L+')) {
		shown = `${(count / 100_000).toFixed(count === value ? 0 : 1)}L+`;
	} else {
		shown = `${count}`;
	}

	return (
		<div
			className={`flex flex-col items-center justify-center rounded-2xl shadow-lg px-6 py-8 bg-gradient-to-br ${color} min-w-[140px] max-w-[200px] mx-auto mb-4 md:mb-0`}
			style={{ backdropFilter: 'blur(8px)', opacity: 0.95 }} // Added background blur and increased opacity
		>
			<div className="text-4xl md:text-5xl font-extrabold text-brown-800 mb-2 animate-pulse">
				{shown}
			</div>
			<div className={`text-lg md:text-xl font-semibold text-center ${isDarkBg ? 'text-beige-100' : 'text-brown-700'}`}> 
				{label}
			</div>
		</div>
	);
};

const WrappedStatCard: React.FC<{ label: string; value: number; display: string; color: string; start: boolean }> = (props) => (
  <ErrorBoundary>
    <StatCard {...props} />
  </ErrorBoundary>
);

export default WrappedStatCard;
