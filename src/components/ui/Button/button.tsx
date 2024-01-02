import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import styles from "./button.module.css";
import { cn } from "@/lib/utils.ts"
import { PlusCircle, Eye, PenSquare, Trash2, Loader2 } from "lucide-react"

export const buttonVariants = cva(
	styles.base,
	{
		variants: {
			variant: {
				default: styles.primary,
				destructive: styles.destructive,
				outline: styles.outline,
				secondary: styles.secondary,
				ghost: styles.ghost,
				link: styles.link,
				blue: styles.blue,
				gold: styles.gold,
			},
			size: {
				default: styles.size_default,
				sm: styles.size_sm,
				lg: styles.size_lg,
				icon: styles.size_icon,
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean,
	loading?: boolean,
	loadingText?: string,
	actionIcon?: 'add' | 'view' | 'edit' | 'delete',
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			actionIcon,
			asChild = false,
			loading = false,
			loadingText = 'Chargement...',
			...props
		},
		ref
	) => {

		const disabled = loading || props.disabled;
		const Comp = asChild ? Slot : "button"

		const children = loading ? undefined : props.children;

		const iconComponents = {
			'add': PlusCircle,
			'view': Eye,
			'edit': PenSquare,
			'delete': Trash2,
		};

		const IconComp = actionIcon ? iconComponents[actionIcon] : undefined;

		return (
			<Comp
				className={cn(buttonVariants({variant, size, className}))}
				ref={ref}
				disabled={disabled}
				{...props}
			>
				{loading ? (
					<>
						<Loader2 className="mr-2 h-4 w-4 animate-spin"/>
						{loadingText}
					</>
				) : (
					<>
						{IconComp && <IconComp className="mr-2"/>}
						{children}
					</>
				)}
			</Comp>
		)
	}
)
Button.displayName = "Button"

export { Button }
