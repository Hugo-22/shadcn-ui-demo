import * as React from "react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Check, PlusCircle } from "lucide-react";

type SelectableItem = {
	value: string | number
	label: string
	disabled?: boolean
	fixed?: boolean
}

type MultiSelectFilterProps = {
	title: string,
	options: SelectableItem[],
	defaultSelectedItems?: SelectableItem[],
	onChange: (selectedItems: SelectableItem[]) => void;
}

export function MultiSelectFilter(props: MultiSelectFilterProps) {
	const [selectedItems, setSelectedItems] = React.useState<SelectableItem[]>(props.defaultSelectedItems || []);

	React.useEffect(() => {
		props.onChange(selectedItems);
	}, [selectedItems, props.onChange, props]);

	const handleSelect = (item: SelectableItem) => {
		console.log('item', item)
		if (selectedItems.includes(item)) {
			setSelectedItems(selectedItems.filter((i) => i !== item))
		} else {
			setSelectedItems([...selectedItems, item])
		}
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline" size="sm" className="h-8 border-dashed">
					<PlusCircle className="mr-2 h-4 w-4"/>
					{/*<PlusCircledIcon className="mr-2 h-4 w-4" />*/}
					{props.title}
					{selectedItems.length > 0 && (
						<>
							<Separator orientation="vertical" className="mx-2 h-4"/>
							<Badge
								variant="secondary"
								className="rounded-sm px-1 font-normal lg:hidden"
							>
								{selectedItems.length}
							</Badge>
							<div className="hidden space-x-1 lg:flex">
								{selectedItems.length > 2 ? (
									<Badge
										variant="secondary"
										className="rounded-sm px-1 font-normal"
									>
										{selectedItems.length} selected
									</Badge>
								) : (
									selectedItems.map((option) => (
											<Badge
												variant="secondary"
												key={option.value}
												className="rounded-sm px-1 font-normal"
											>
												{option.label}
											</Badge>
										)
									)
								)}
							</div>
						</>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0" align="start">
				<Command>
					<CommandInput placeholder={props.title}/>
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup>
							{props.options.map((option) => {
								const isSelected = selectedItems.includes(option)
								return (
									<CommandItem
										key={option.value}
										onMouseDown={(e) => {
											e.preventDefault();
											e.stopPropagation();
										}}
										onSelect={() => handleSelect(option)}
									>
										<div
											className={cn(
												"mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
												isSelected
													? "bg-primary text-primary-foreground"
													: "opacity-50 [&_svg]:invisible"
											)}
										>
											<Check className="size-4"/>
										</div>
										<span>{option.label}</span>
									</CommandItem>
								)
							})}
						</CommandGroup>
						{selectedItems.length > 0 && (
							<>
								<CommandSeparator/>
								<CommandGroup>
									<CommandItem
										onSelect={() => setSelectedItems([])}
										className="justify-center text-center"
									>
										Clear filters
									</CommandItem>
								</CommandGroup>
							</>
						)}
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
