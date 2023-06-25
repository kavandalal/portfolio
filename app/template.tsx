'use client';
import './globals.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Add the imported icons to the library
library.add(fas);

export default function RootTemplate({ children }: { children: React.ReactNode }) {
	return children;
}
