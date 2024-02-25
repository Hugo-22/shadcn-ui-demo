import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs/tabs.tsx"
import { Write } from "./write";
import { Preview } from "./preview";
// TODO: TabsList has an interesting tab focus. Need to investigate on it

const defaultText = `@mxkaske j'ai besoin de ton avis sur cette candidature \n\nSupports raw <code>html</code>.`

export function MentionTabs() {
	const [textValue, setTextValue] = React.useState(defaultText);

	return (
		<Tabs
			defaultValue="write"
			className="w-full"
		>
			<TabsList>
				<TabsTrigger value="write">Write</TabsTrigger>
				<TabsTrigger value="preview">Preview</TabsTrigger>
			</TabsList>
			<TabsContent value="write">
				<Write {...{textValue, setTextValue}} />
			</TabsContent>
			<TabsContent value="preview">
				<Preview {...{textValue}} />
			</TabsContent>
		</Tabs>
	);
}
