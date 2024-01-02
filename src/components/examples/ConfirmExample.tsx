import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/Button/button.tsx";
import { useState } from "react";


export function ConfirmExample() {
	const [open, setOpen] = useState(false);

	const wait = () => new Promise((resolve) => setTimeout(() => {
		setOpen(false);
		resolve('resolved');
	}, 1000));

	return (
		<AlertDialog open={open}>
			<AlertDialogTrigger onClick={() => setOpen(true)}>
			Open confirm
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete your account
						and remove your data from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel
						asChild>
						<Button variant="gold">Cancel</Button>
					</AlertDialogCancel>
					<AlertDialogAction
						variant="destructive"
						onClick={() => wait().then((res) => console.log(res))}>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
