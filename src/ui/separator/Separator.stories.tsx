import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';

// Создаю объект meta, который содержит метаданные для компонента Separator.
// Meta<typeof Separator> указывает, что метаданные относятся к компоненту Separator.
// Свойство component указывает, какой компонент будет использоваться в историях (stories).
const meta: Meta<typeof Separator> = {
	component: Separator,
};

// Создаю тип Story, который представляет собой историю (story) для компонента Separator.
export default meta;
type Story = StoryObj<typeof Separator>;

export const SelectStory: Story = {
	render: () => {
		return <Separator />;
	},
};
