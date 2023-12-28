import {
    LoginCard,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/loginCard"
import { Label } from "../ui/label"
import { Input } from "../ui/input"

const LoginPage = () => {

    return (
        <div className="-mt-16 h-screen w-screen flex justify-center items-center bg-pastel-bg bg-contain flex-1">
            <LoginCard className="container h-fit lg:w-2/5 p-4 sm:w-4/5 flex flex-col justify-center">
                <CardHeader className="mb-3">
                    <CardTitle>Zaloguj</CardTitle>
                    <CardDescription>Zaloguj się aby przejść dalej</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="login">Login</Label>
                                <Input id="login" placeholder="Login" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="pwd">Hasło</Label>
                                <Input id="pwd" type="password" placeholder="Hasło" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="text-xs">
                    <p>Zapomniałes hasła? Skontaktuj się z administratorami</p>
                </CardFooter>
            </LoginCard>
        </div>
    )
}

export default LoginPage