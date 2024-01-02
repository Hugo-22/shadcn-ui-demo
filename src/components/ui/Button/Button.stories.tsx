import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './button';
import "./button.module.css";
import { Check, Fingerprint, Joystick } from "lucide-react";

export default {
	title: 'UI/Button',
	component: Button,
	argTypes: {
		variant: {
			defaultValue: { summary: 'default' },
		},
		size: {
			defaultValue: { summary: 'default' },
			control: {
				type: 'select',
			},
		}
	},
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs']
} as Meta<ButtonProps>;

type Story = StoryFn<ButtonProps>;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Primary',
};
Primary.storyName = "[Variant] - Primary"


export const Secondary = Template.bind({});
Secondary.args = {
	children: 'Secondary',
	variant: 'secondary',
};
Secondary.storyName = "[Variant] - Secondary"

export const Destructive = Template.bind({});
Destructive.args = {
	children: 'Destructive',
	variant: 'destructive',
};
Destructive.storyName = "[Variant] - Destructive"


export const Outline = Template.bind({});
Outline.args = {
	children: 'Outline',
	variant: 'outline',
};
Outline.storyName = "[Variant] - Outline"

export const Ghost = Template.bind({});
Ghost.args = {
	children: 'Ghost',
	variant: 'ghost',
};
Ghost.storyName = "[Variant] - Ghost"

export const Link = Template.bind({});
Link.args = {
	children: 'Link',
	variant: 'link',
};
Link.storyName = "[Variant] - Link"

export const Blue = Template.bind({});
Blue.args = {
	children: 'Blue',
	variant: 'blue',
};
Blue.storyName = "[Variant] - Blue"

export const Gold = Template.bind({});
Gold.args = {
	children: 'Gold',
	variant: 'gold',
};
Gold.storyName = "[Variant] - Gold"

export const Default = Template.bind({});
Default.args = {
	children: 'Default'
};
Default.storyName = "[Size] - Default"

export const Small = Template.bind({});
Small.args = {
	children: 'Small',
	size: 'sm',
};
Small.storyName = "[Size] - Small"

export const Large = Template.bind({});
Large.args = {
	children: 'Large',
	size: 'lg',
};
Large.storyName = "[Size] - Large"

export const Icon = Template.bind({});
Icon.args = {
	children: <Fingerprint />,
	size: 'icon',
};
Icon.storyName = "[Size] - Icon"

export const IconLeft = Template.bind({});
IconLeft.args = {
	children: [
		<Check className="mr-2" key="icon" />,
		'Done'
	],
};
IconLeft.storyName = "[Icon] - Left"

export const IconRight = Template.bind({});
IconRight.args = {
	children: [
		'Play',
		<Joystick className="ml-2" key="icon" />,
	],
};
IconRight.storyName = "[Icon] - Right"


export const Disabled = Template.bind({});
Disabled.args = {
	children: 'Disabled',
	disabled: true,
};
Disabled.storyName = "[State] - Disabled"

export const Loading = Template.bind({});
Loading.args = {
	loading: true
};
Loading.storyName = "[State] - Loading"

export const Add = Template.bind({});
Add.args = {
	children: 'Ajouter',
	variant: 'outline',
	actionIcon: 'add'
};
Add.storyName = "[Action] - Add"

export const View = Template.bind({});
View.args = {
	children: 'Voir',
	actionIcon: 'view'
};
View.storyName = "[Action] - View"

export const Edit = Template.bind({});
Edit.args = {
	children: 'Modifier',
	variant: 'outline',
	actionIcon: 'edit'
};
Edit.storyName = "[Action] - Edit"

export const Delete = Template.bind({});
Delete.args = {
	children: 'Supprimer',
	variant: 'destructive',
	actionIcon: 'delete'
};
Delete.storyName = "[Action] - Delete"


