import styles from './Page.module.scss';
import { useState, CSSProperties } from 'react';
import { Article } from 'components/article';
import { ArticleParamsForm } from 'components/article-params-form';
import {
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';

// Объявляю функцию для отображения и экспорта на другие страницы
export const Page = () => {
	const [styleArticle, setStyleArticle] = // создаю переменную styleArticle и функцию setStyleArticle
		useState<ArticleStateType>(defaultArticleState); // использую хук useState, изначальное состояние defaultArticleState которе соотв типу ArticleStateType

	//возвращаю отображение на странице
	return (
		<main // основной корневой элемент для содержимого компонента
			className={styles.main} // устанавливаю и импортирую стили для элемента
			style={
				{
					'--font-family': styleArticle.fontFamilyOption.value,
					'--font-size': styleArticle.fontSizeOption.value,
					'--font-color': styleArticle.fontColor.value,
					'--container-width': styleArticle.contentWidth.value,
					'--bg-color': styleArticle.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onChange={setStyleArticle} />
			<Article />
		</main>
	);
};

// ** Рендерит компонент ArticleParamsForm, передавая ему свойство onChange,  которое является функцией setStyleArticle.
// Это позволяет изменять состояние styleArticle в Page, когда параметры статьи изменяются в форме.
