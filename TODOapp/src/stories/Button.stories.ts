import type { Meta, StoryObj } from '@storybook/react';

import Button from "../components/button/Button";
import "../assets/settings.css";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof Button >;

export default meta;
type Story = StoryObj<typeof meta>;

const mockText = "Mock Text";
const mockFunction:VoidFunction = () => { alert("Do Something") }

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ButtonStory: Story = {
  args: {
    click_fn: mockFunction,
    text: mockText
    
  },
};