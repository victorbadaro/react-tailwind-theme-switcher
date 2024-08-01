import { Header } from './components/header';
import useLocalStorage from './hooks/useLocalStorage';

export function App() {
	const [isDarkModeEnabled] = useLocalStorage('isDarkModeEnabled', false);

	return (
		<div className={`${isDarkModeEnabled ? 'dark ' : ''}min-h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100`}>
			<Header />
			<h1>Hello, Tailwind!</h1>
		</div>
	);
}
