import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// Создаею объект meta, который содержит метаданные для компонента Button.
const meta: Meta<typeof Button> = {
	// указывает, что метаданные относятся к компоненту Button.
	component: Button, // Свойство component указывает, какой компонент будет использоваться в историях.
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
	// Создается тип Story, который представляет собой историю (story) для компонента Button.
	render: () => {
		return (
			// возвращаю 2 компонента массив с объектами
			<>
				<Button
					title='Сбросить'
					type='reset'
					onClick={() => alert('клик на кнопку сбросить')}
				/>
				<Button
					title='Применить'
					type='submit'
					onClick={() => alert('клик на кнопку применить')}
				/>
			</>
		);
	},
};
