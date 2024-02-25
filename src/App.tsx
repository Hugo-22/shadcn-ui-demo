import { TabsLogin } from "@/components/examples/TabsLogin.tsx";
import { MultiSelect } from "@/components/ui/MultiSelect";
import { MultiSelectFilter } from "@/components/ui/MultiSelectFilter";
import { MentionTabs } from "@/components/MentionFeature/MentionTabs.tsx";


type option = {
	value: string | number
	label: string;
	disabled?: boolean;
	fixed?: boolean;
	group?: string;
};

const LEVELS = [
	{
		value: 0,
		label: "Level 0",
	},
	{
		value: 1,
		label: "Level 1",
	},
	{
		value: 2,
		label: "Level 2",
	},
	{
		value: 3,
		label: "Level 3",
	},
	{
		value: 4,
		label: "Level 4",
	},
	{
		value: 5,
		label: "Level 5",
	},
	{
		value: 6,
		label: "Level 6",
	},
	{
		value: 7,
		label: "Level 7",
	},
] satisfies option[];


const FRAMEWORKS = [
	{
		value: "next.js",
		label: "Next.js",
		fixed: true,
		group: "Popular",
	},
	{
		value: "sveltekit",
		label: "SvelteKit",
		group: "Popular",
	},
	{
		value: "nuxt.js",
		label: "Nuxt.js",
		fixed: true,
		group: "Popular",
	},
	{
		value: "remix",
		label: "Remix",
		group: "Popular",
	},
	{
		value: "astro",
		label: "Astro",
		group: "Popular",
	},
	{
		value: "wordpress",
		label: "WordPress",
		group: "Popular",
	},
	{
		value: "express.js",
		label: "Express.js",
		disabled: true,
		group: "Backend",
	},
	{
		value: "nest.js",
		label: "Nest.js",
		group: "Backend",
	}
] satisfies option[];


function App() {

	return <>
		<div className="h-screen flex items-center justify-center">
			{/*<div className="w-96">*/}
			{/*	<MultiSelect*/}
			{/*		maxSelected={3}*/}
			{/*		onChange={(items) => console.log(items)}*/}
			{/*		items={FRAMEWORKS}*/}
			{/*	/>*/}
			{/*</div>*/}

			{/*<div className="w-96">*/}
			{/*	<MultiSelectFilter*/}
			{/*		onChange={(items) => console.log(items)}*/}
			{/*		options={LEVELS}*/}
			{/*		title={'Level'}*/}
			{/*	/>*/}
			{/*</div>*/}
			{/*<TabsLogin/>*/}
			<MentionTabs />
		</div>
	</>
}

export default App
