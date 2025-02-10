import { ElementType, ReactNode } from 'react';
import { FontFamiliesClasses } from 'src/constants/articleProps';

import styles from './index.module.scss';

type TextProps = {
	/** Сам текст для вывода */
	children: ReactNode;
	/** Тэг которым отрендерить текст */
	as?: ElementType;
	/** Булевая пропса, должен ли текст меняться в зависимости от конфига */
	dynamic?: boolean;
	/** Размер шрифта */
	size?: 12 | 18 | 22 | 25 | 31 | 38 | 45;
	/** Вес шрифта */
	weight?: 400 | 800;
	/** Стиль шрифта */
	fontStyle?: 'italic' | 'normal';
	/** Булевая пропса, отвечающая должен ли текст быть в верхнем регистре */
	uppercase?: boolean;
	/** Выравнивание текста */
	align?: 'center' | 'left';
	/** font-family текста */
	family?: FontFamiliesClasses;
	/** Булевая пропса, делает динамическим только семью шрифтов и цвет */
	dynamicLite?: boolean;
};

export const Text = ({
	children,
	as: Tag = 'div',
	size = 18,
	dynamic = false,
	weight = 400,
	fontStyle = 'normal',
	uppercase = false,
	align = 'left',
	family = 'open-sans',
	dynamicLite = false,
}: TextProps) => {
	const className = `
  ${styles.text}
  ${styles[`size${size}`]}
  ${dynamic ? styles.dynamic : ''}
  ${styles[`weight${weight}`]}
  ${styles[fontStyle]}
  ${uppercase ? styles.uppercase : ''}
  ${styles[align]}
  ${styles[family]}
  ${dynamicLite ? styles.dynamicLite : ''}
`.trim();
	return <Tag className={className}>{children}</Tag>;
};
