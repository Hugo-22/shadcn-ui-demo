import { Meta, StoryFn } from '@storybook/react';
import {Skeleton} from "./skeleton"

export default {
	title: 'UI/Skeleton',
	component: Skeleton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs']
} as Meta;

type Story = StoryFn<typeof Skeleton>

export const ExampleOne: Story = () => (
	<div className="flex items-center space-x-4">
		<Skeleton className="h-12 w-12 rounded-full" />
		<div className="space-y-2">
			<Skeleton className="h-4 w-[250px]" />
			<Skeleton className="h-4 w-[200px]" />
		</div>
	</div>
);
ExampleOne.storyName = "Example 1"

export const ExampleTwo: Story = () => (
	<div className="flex flex-col space-y-4">
		<Skeleton className="h-4 w-[350px]" />
		<Skeleton className="h-4 w-[250px]" />
		<Skeleton className="h-4 w-[200px]" />
	</div>
);
ExampleTwo.storyName = "Example 2"

export const ExampleThree: Story = () => (
	// create card with image skeleton
	<div className="flex flex-col space-y-4">
		<Skeleton className="h-64 w-full rounded-md" />
		<div className="w-[350px] space-y-4">
			<Skeleton className="h-4 w-[200px]" />
			<Skeleton className="h-4 w-[250px]" />
			<Skeleton className="h-4 w-[350px]" />
		</div>
	</div>

);
ExampleThree.storyName = "Example 3"
