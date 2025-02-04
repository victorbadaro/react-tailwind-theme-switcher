import { colors } from '@/colors';
import useLocalStorage from '@/hooks/useLocalStorage';
import ReactSwitch from 'react-switch';

export function Header() {
	const [isDarkModeEnabled, setIsDarkModeEnabled] = useLocalStorage<boolean>('isDarkModeEnabled');

	return (
		<header className="flex items-center justify-between px-8 h-16 bg-lime-400 dark:bg-zinc-950 text-zinc-950 dark:text-lime-400">
			React Tailwind Theme Switcher

			<ReactSwitch
				checked={isDarkModeEnabled}
				onChange={() => setIsDarkModeEnabled(!isDarkModeEnabled)}
				checkedIcon={false}
				uncheckedIcon={false}
				width={40}
				height={10}
				handleDiameter={20}
				onColor={colors.lime[400]}
				offColor={colors.zinc[950]}
			/>
		</header>
	);
}
