import { LoginCard, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~common/LoginCard"
import { Label } from "~ui/Label"
import { Input } from "~ui/Input"
import { useState } from "react";
import { Button } from "~ui/Button";
import { useAuth } from "~hooks/useAuth";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
    const[username, setUsername] = useState<string>("");
    const[password, setPassword] = useState<string>("");

    const { login, token } = useAuth();

    async function handleLoginClick(e:React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        await login(username, password)
        .catch((error) => {
            console.error(error);
        });
    };

    return (
        token ? 
        <Navigate replace to='/' /> :
        <div className="-mt-16 h-screen w-screen flex justify-center items-center bg-pastel-bg bg-contain flex-1">
            <LoginCard className="container h-fit lg:w-2/5 p-4 sm:w-4/5 flex flex-col justify-center">
                <CardHeader className="mb-3">
                    <CardTitle>Zaloguj</CardTitle>
                    <CardDescription>Zaloguj się aby przejść dalej</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-3">
                                <Label htmlFor="login">Login</Label>
                                <Input id="login" placeholder="example@mail.com" onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div className="flex flex-col space-y-3">
                                <Label htmlFor="pwd">Hasło</Label>
                                <Input id="pwd" type="password" placeholder="VerySecretPassword" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="w-full">
                            <Button className="flex flex-col mt-4 w-full bg-black/75" onClick={(e) => handleLoginClick(e)}>Zaloguj</Button>
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