import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card/card.tsx";
import { Input } from "@/components/ui/Form/input.tsx";
import { Button } from "@/components/ui/Button/button.tsx";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form/form.tsx";

const formSchema = z.object({
	email: z.string().email({ message: "L'email n'est pas valide" }),
	password: z.string().min(8, { message: "Le mot de passe doit faire au moins 8 caractères" }),
	confirmPassword: z.string()
		.min(8, { message: "Le mot de passe de confirmation doit faire au moins 8 caractères" })
}).refine((data) => data.password === data.confirmPassword,
	{
	message: "Les mots de passe ne correspondent pas",
	path: ["confirmPassword"]
})

type formValues = z.infer<typeof formSchema>;

export function SignUpForm() {
	const form = useForm<formValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		}
	});

	function onSubmit(values: formValues) {
		console.log({values});
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Inscription</CardTitle>
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

						<div className="space-y-1">
							<FormField
								control={form.control}
								name="confirmPassword"
								render={({field}) => (
									<FormItem>
										<FormLabel>Confirmation</FormLabel>
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
						<Button variant="outline" type="submit">S'inscrire</Button>
					</CardFooter>
				</form>
			</Form>
		</Card>
	)

}
