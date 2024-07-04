import { Button, Card, CardBody, CardHeader, Divider, Input, } from "@nextui-org/react"
import NavbarAll from "../components/NavbarAll"
import NavbarComponent from "../components/NavbarComponent"
import { Link } from "react-router-dom"
import { Controller, useForm } from "react-hook-form"





const SignUp = () => {


    const form = useForm({
        defaultValues: {
            email: "",
            username: "",
            password: ""
        }
    })


    const registerUser = (data) => {
     console.log(data)
    }

    return (
        <div className="bg-blue-500">

            <div className="flex h-screen items-center justify-center mt-0">
                <Card className="w-[400px] ">
                    <div>
                        <CardHeader className="font-semibold text-lg">LOGIN DASHBOARD ADMIN !</CardHeader>
                        <Divider />

                        <CardBody className="flex flex-col gap-4">


                            <form onSubmit={form.handleSubmit(registerUser)}>
                                <p>Email</p>
                                <Controller
                                    name="email"
                                    control={form.control}
                                    render={({ field }) => {
                                        return (
                                            <Input {...field} />
                                        )
                                    }}
                                />
                                <p>username</p>
                                <Controller
                                    name="username" S
                                    control={form.control}
                                    render={({ field }) => {
                                        return (
                                            <Input {...field} />
                                        )
                                    }}
                                />


                                <p>password</p>
                                <Controller
                                    name="password" S
                                    control={form.control}
                                    render={({ field }) => {
                                        return (
                                            <Input  {...field} />
                                        )
                                    }}
                                />

                                <Button type="submit" color="primary">Login</Button>
                            </form>




                        </CardBody>
                        <Link to={"/dashboard"}>dasdsa</Link>
                    </div>
                    <div>


                    </div>

                </Card>
            </div>
        </div>
    )
}

export default SignUp