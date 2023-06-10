import type { Meta, StoryObj } from '@storybook/react';

import List from "../components/list/list";
import "../assets/settings.css";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof List >;

export default meta;
type Story = StoryObj<typeof meta>;

const mockText = "Mock Text";
//const mockFunction:VoidFunction = () => { console.log("Something to do") }

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ButtonStory: Story = {
  args: {
    listContent: mockText,
  },
};