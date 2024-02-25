import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "@/lib/utils.ts";

type SelectableItem = {
	value: string;
	label: string;
	disabled?: boolean;
	fixed?: boolean;
};

type MultiSelectProps = {
	items: SelectableItem[];
	defaultSelectedItems?: SelectableItem[];
	onChange: (selectedItems: SelectableItem[]) => void;
	maxSelected?: number;
	placeholder?: string;
	className?: string;
};

const MultiSelect = React.memo(({
	                                items,
	                                defaultSelectedItems = [],
	                                onChange,
	                                maxSelected,
	                                placeholder = "Select items...",
	                                className,
                                }: MultiSelectProps) => {
	const [selectedItems, setSelectedItems] = React.useState<SelectableItem[]>(defaultSelectedItems);
	const [open, setOpen] = React.useState(false);
	const [inputValue, setInputValue] = React.useState("");
	const inputRef = React.useRef<HTMLInputElement>(null);

	React.useEffect(() => {
		onChange(selectedItems);
	}, [selectedItems, onChange]);

	const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
		const input = inputRef.current;
		if (input) {
			if ((e.key === "Delete" || e.key === "Backspace") && input.value === "") {
				setSelectedItems((prevSelectedItems) => {
					// Trouve le dernier élément non fixé en remontant à partir de la fin
					const indexToRemove = [...prevSelectedItems].reverse().findIndex(item => !item.fixed);
					if (indexToRemove !== -1) { // S'assure qu'un élément non fixé a été trouvé
						const newSelectedItems = [...prevSelectedItems];
						newSelectedItems.splice(newSelectedItems.length - 1 - indexToRemove, 1); // Supprime l'élément non fixé trouvé
						onChange(newSelectedItems); // Notifie le changement
						return newSelectedItems;
					}
					return prevSelectedItems; // Retourne la liste inchangée si aucun élément non fixé n'est trouvé
				});
			} else if (e.key === "Escape") {
				input.blur();
				setOpen(false);
			}
		}
	}, [onChange]);

	const handleSelect = (item: SelectableItem) => {
		if (!maxSelected || selectedItems.length < maxSelected) {
			const newSelectedItems = [...selectedItems, item];
			setSelectedItems(newSelectedItems);
			setInputValue("");
		}
	};

	const handleUnselect = (item: SelectableItem) => {
		const newSelectedItems = selectedItems.filter(selectedItem => selectedItem.value !== item.value);
		setSelectedItems(newSelectedItems);
	};

	const selectables = items.filter(item => !selectedItems.map(selectedItem => selectedItem.value).includes(item.value));

	return (
		<Command className={`overflow-visible bg-transparent ${className}`} onKeyDown={handleKeyDown}>
			<div
				className="group border border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
				<div className="flex gap-1 flex-wrap">
					{selectedItems.map((item) => (
						<Badge
							key={item.value}
							variant="secondary"
							className="data-[disabled]:bg-muted-foreground data-[disabled]:text-muted data-[disabled]:hover:bg-muted-foreground data-[fixed]:text-black/50"
							data-fixed={item.fixed}
							data-disabled={item.disabled}
						>
							{item.label}
							<button
								className={cn(
									'ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2',
									(item.disabled || item.fixed) && 'hidden',
								)}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										handleUnselect(item);
									}
								}}
								onMouseDown={(e) => {
									e.preventDefault();
									e.stopPropagation();
								}}
								onClick={() => handleUnselect(item)}
							>
								<X className="h-3 w-3 text-muted-foreground hover:text-foreground"/>
							</button>
						</Badge>
					))}
					<CommandPrimitive.Input
						ref={inputRef}
						value={inputValue}
						onValueChange={setInputValue}
						onBlur={() => setOpen(false)}
						onFocus={() => setOpen(true)}
						placeholder={placeholder}
						className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
					/>
				</div>
			</div>
			{maxSelected && <div className="flex justify-end p-1">
                <span className="text-sm text-gray-500">{selectedItems.length}/{maxSelected}</span>
            </div>}

			<div className="relative mt-2">
				{open && selectables.length > 0 && (
					<div
						className="absolute w-full z-10 -top-7 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
						<CommandGroup className="h-full overflow-auto">
							{selectables.map((item) => (
								<CommandItem
									key={item.value}
									disabled={item.disabled}
									onMouseDown={(e) => {
										e.preventDefault();
										e.stopPropagation();
									}}
									onSelect={() => handleSelect(item)}
									className="cursor-pointer"
								>
									{item.label}
								</CommandItem>
							))}
						</CommandGroup>
					</div>
				)}
			</div>
		</Command>
	);
});

export { MultiSelect };
