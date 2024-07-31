import { useState } from 'react';
import { Header } from './components/header';

export function App() {
	const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);

	function toggleTheme() {
		setIsDarkModeEnabled(prevState => !prevState);
	}

	return (
		<div className={`${isDarkModeEnabled ? 'dark ' : ''}min-h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100`}>
			<Header
				isDarkModeEnabled={isDarkModeEnabled}
				toggleTheme={toggleTheme}
			/>
			<h1>Hello, Tailwind!</h1>
		</div>
	);
}
