import type { Meta, StoryObj } from '@storybook/react';
import { ArrowButton } from './ArrowButton';
import { createElement, useState } from 'react';

// объявляю константу с именем meta типа Meta с указанием, что она относится к компоненту ArrowButton
const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

// объект meta экспортируется из этого модуля по умолчанию
export default meta;
type Story = StoryObj<typeof ArrowButton>; // определяю псевдоним типа Story, который расширяет StoryObj для конкретного компонента ArrowButton

// объявляею константу ArrowButtonStory и присваиваю объект, соответствующий типу Story.
export const ArrowButtonStory: Story = {
	render: () =>
		// Стрелочная функция возвращает JSX для рендеринга компонента
		createElement(() => {
			// внутри функции стрелки с помощью хука isOpen объявляется переменная состояния useState, инициализированная значением false
			const [isOpen, setIsOpen] = useState(false);
			// строка возвращает компонент ArrowButton Свойству isOpen передается значение состояния,
			// а свойству onClick присваивается функция, которая переключает состояние isOpen между true и false.
			return <ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />;
		}),
};
