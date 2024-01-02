import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/Tabs/tabs.tsx"
import { SignInForm } from "@/components/form/SignInForm.tsx";
import { SignUpForm } from "@/components/form/SignUpForm.tsx";

export function TabsLogin() {
	return (
		<Tabs defaultValue="sign-in" className="w-[400px]">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="sign-in">Connexion</TabsTrigger>
				<TabsTrigger value="sign-up">Inscription</TabsTrigger>
			</TabsList>
			<TabsContent value="sign-in">
				<SignInForm />
			</TabsContent>
			<TabsContent value="sign-up">
				<SignUpForm />
			</TabsContent>
		</Tabs>
	)
}
