import { useState } from 'react';

export function App() {
	const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);

	function toggleTheme() {
		setIsDarkModeEnabled(prevState => !prevState);
	}

	return (
		<div className={`${isDarkModeEnabled ? 'dark ' : ''}min-h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100`}>
			<h1>Hello, Tailwind!</h1>
			<button type="button" onClick={toggleTheme}>change theme</button>
		</div>
	);
}
