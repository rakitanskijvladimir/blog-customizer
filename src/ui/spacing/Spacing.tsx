import { ElementType } from 'react';
import { clsx } from 'clsx';
import styles from './index.module.scss';

// Создаю тип SpacingProps, который описывает пропсы (свойства) компонента Spacing.
type SpacingProps = {
	/** Тэг которым отрендерить отступ */
	as?: ElementType;
	/** Размер отступа */
	size?: 4 | 24 | 50 | 90 | 207;
};

// Экспортирую компонент Spacing, который принимает пропсы типа SpacingProps.
export const Spacing = ({ as: Tag = 'div', size = 4 }: SpacingProps) => {
	const className = clsx(styles[`size${size}`]);
	return <Tag className={className}></Tag>;
};
