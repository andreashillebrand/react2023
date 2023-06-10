import type { Meta, StoryObj } from '@storybook/react';

import ToDoApp from "../container/ToDoApp/ToDoApp";
import "../assets/settings.css";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'App/ToDoApp',
  component: ToDoApp,
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof ToDoApp >;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ToDo: Story = {
  args: {
    
  },
};


