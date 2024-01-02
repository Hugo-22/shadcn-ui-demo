import { Meta, StoryFn } from '@storybook/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { Button } from "@/components/ui/Button/button.tsx";
import { ArrowDown, ArrowUp, LineChartIcon, UsersIcon } from "lucide-react";

export default {
	title: 'UI/Card',
	component: Card,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs']
} as Meta;

type Story = StoryFn<typeof Card>

export const Basic: Story = () => {
	return <Card className="w-[350px]">
		<CardHeader>
			<CardTitle>This is the Card Title</CardTitle>
			<CardDescription>This is the Card Description. Within the Card Header.</CardDescription>
		</CardHeader>

		<CardContent>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eum laboriosam optio voluptas?
				Aliquid, deserunt ea esse fugiat id ipsa obcaecati quis repudiandae sequi sit, temporibus vel veniam
				voluptate. Animi.
			</p>
		</CardContent>

		<CardFooter className="flex justify-end gap-2.5">
			<Button variant="ghost">Cancel</Button>
			<Button>Agree</Button>
		</CardFooter>
	</Card>
}

export const Stats: Story = () => {
	return (
		<div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
			<Card className="relative">
				<CardContent
					className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
					<div className="absolute rounded-md bg-indigo-500 p-3">
						<UsersIcon className="h-6 w-6 text-white"/>
					</div>
					<p className="ml-16 truncate text-sm font-medium text-gray-500">Total Subscribers</p>
					<div className="ml-16 flex items-baseline pb-6 sm:pb-7">
						<p className="text-2xl font-semibold text-gray-900">71,897</p>
						<p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
							<ArrowUp className="h-5 w-5 flex-shrink-0 self-center text-green-500"/>
							<span className="sr-only"> Increased by </span>
							122
						</p>
					</div>
				</CardContent>
				<CardFooter className="absolute inset-x-0 bottom-0 bg-gray-50 rounded-b-lg px-4 py-4 sm:px-6">
					<div className="text-sm">
						<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> View all<span
							className="sr-only"> Total Subscribers stats</span></a>
					</div>
				</CardFooter>
			</Card>

			<Card className="relative">
				<CardContent
					className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
					<div className="absolute rounded-md bg-indigo-500 p-3">
						<UsersIcon className="h-6 w-6 text-white"/>
					</div>
					<p className="ml-16 truncate text-sm font-medium text-gray-500">Avg. Open Rate</p>
					<div className="ml-16 flex items-baseline pb-6 sm:pb-7">
						<p className="text-2xl font-semibold text-gray-900">58.16%</p>
						<p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
							<ArrowUp className="h-5 w-5 flex-shrink-0 self-center text-green-500"/>

							<span className="sr-only"> Increased by </span>
							5.4%
						</p>
					</div>
				</CardContent>
				<CardFooter className="absolute inset-x-0 bottom-0 bg-gray-50 rounded-b-lg px-4 py-4 sm:px-6">
					<div className="text-sm">
						<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> View all<span
							className="sr-only"> Avg. Open Rate stats</span></a>
					</div>
				</CardFooter>
			</Card>

			<Card className="relative">
				<CardContent
					className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
					<div className="absolute rounded-md bg-indigo-500 p-3">
						<UsersIcon className="h-6 w-6 text-white"/>
					</div>
					<p className="ml-16 truncate text-sm font-medium text-gray-500">Avg. Click Rate</p>
					<div className="ml-16 flex items-baseline pb-6 sm:pb-7">
						<p className="text-2xl font-semibold text-gray-900">24.57%</p>
						<p className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
							<ArrowDown className="h-5 w-5 flex-shrink-0 self-center text-red-500"/>
							<span className="sr-only"> Decreased by </span>
							3.2%
						</p>
					</div>
				</CardContent>
				<CardFooter className="absolute inset-x-0 bottom-0 bg-gray-50 rounded-b-lg px-4 py-4 sm:px-6">
					<div className="text-sm">
						<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> View all<span
							className="sr-only"> Avg. Click Rate stats</span></a>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
