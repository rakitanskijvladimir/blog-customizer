import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
// Функция без параметров, которая ничего не возвращает (` эта строка определяет типOnClickпсевдоним типа для обработчика кликов:void).
export type OnClick = () => void;
// указываю тип и передаю 2 свойства
type ArrowButtonProps = {
	isOpen: boolean;
	onClick: OnClick;
};
// строка объявляет функциональный компонент с именем ArrowButton
//  принимает props типа ArrowButtonProps, которые деструктурируются для получения isOpen и onClick
export const ArrowButton = ({ isOpen, onClick }: ArrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			// атрибут className использует утилиту clsx для условного применения классов CSS:
			className={clsx(styles.container, { [styles.container_open]: isOpen })}
			// Обработчик события onClick устанавливается для свойства onClick компонента.
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: isOpen })}
			/>
		</div>
	);
};
