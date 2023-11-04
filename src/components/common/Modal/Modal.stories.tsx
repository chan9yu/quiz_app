import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta = {
	title: 'Components/Common/Modal',
	component: Modal,
	tags: ['autodocs']
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Modal'
	}
};