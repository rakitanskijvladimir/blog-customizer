import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Page } from './components/page';
import './styles/index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<Page />
	</StrictMode>
);
