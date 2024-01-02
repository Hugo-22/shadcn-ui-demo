import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card/card.tsx";
import { Input } from "@/components/ui/Form/input.tsx";
import { Button } from "@/components/ui/Button/button.tsx";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form/form.tsx";

const formSchema = z.object({
	email: z.string().email({message: "L'email n'est pas valide"}),
	password: z.string().min(8, {message: "Le mot de passe doit faire au moins 8 caractères"}),
});

export function SignInForm() {

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		}
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log({values});
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Connexion</CardTitle>
				<CardDescription>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</CardDescription>
			</CardHeader>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<CardContent className="space-y-2">
						<div className="space-y-1">
							<FormField
								control={form.control}
								name="email"
								render={({field}) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input type="email" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="space-y-1">
							<FormField
								control={form.control}
								name="password"
								render={({field}) => (
									<FormItem>
										<FormLabel>Mot de passe</FormLabel>
										<FormControl>
											<Input type="password" {...field}/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</CardContent>
					<CardFooter>
						<Button variant="outline" type="submit">Se connecter</Button>
					</CardFooter>
				</form>
			</Form>
		</Card>
	)
}
