import { Button } from "@/components/ui/Button/button.tsx";

const buttonVariants = [
	{variant: "default", loading: true},
	{variant: "secondary", label: "Secondary"},
	{variant: "destructive", label: "Destructive"},
	{variant: "outline", label: "Outline"},
	{variant: "link", label: "Link"},
	{variant: "ghost", label: "Ghost"},
	{variant: "blue", label: "Blue"},
	{variant: "gold", label: "Gold"},
]


export function ButtonList() {

	function capitalizer(word: string) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	return (
		<div className="grid grid-cols-4 place-content-center gap-2.5 p-10 h-screen">
			{buttonVariants.map(({variant, loading}) => (
				<Button loading={loading} key={variant} variant={variant}>
					{capitalizer(variant)}
				</Button>
			))}
		</div>
	)
}
