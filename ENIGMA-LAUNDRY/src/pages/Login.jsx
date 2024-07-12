import { Button, Card, CardBody, CardHeader, Divider, Input, } from "@nextui-org/react"
import NavbarAll from "../components/NavbarAll"
import NavbarComponent from "../components/NavbarComponent"
import { useNavigate } from "react-router-dom"
import { Controller, useForm } from "react-hook-form"
import { boolean, z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { axiosinstance } from "../lib/axios"
import { toast } from "sonner"
import { useDispatch } from "react-redux"





const Login = () => {
    const navigate = useNavigate()

    const validateForm = z.object({
        username: z.string().min(1),
        password: z.string().min(1)

    })


     const dispatch = useDispatch()

    const form = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: zodResolver(validateForm)
    })

    const submitLogin = async (data) => {
        try {
            const result = await axiosinstance.post("/auth/login", data)
            const statusCode = result.data.status.code
            const token = result.data.data.token
            if (statusCode === 201) {
                dispatch({type:"SET_TOKEN",token:token})
                toast.success("login succes")
                  
                navigate("/dashboard")
            }
            console.log(token)
        } catch (error) {
            console.log(error)
            toast.error("login gagal")
        }
    }



    return (
        <div className="bg-home-login bg-cover bg-center min-h-screen">

            <div className="flex h-screen items-center justify-center mt-0">
                <Card className="w-[400px] ">
                    <div>
                        <CardHeader className="font-semibold text-lg">LOGIN DASHBOARD ADMIN !</CardHeader>
                        <Divider />

                        <CardBody className="flex flex-col gap-4">

                            <form onSubmit={form.handleSubmit(submitLogin)}>

                                <p>username</p>
                                <Controller
                                    name="username"
                                    control={form.control}
                                    render={({ field, fieldState }) => {
                                        return (
                                            <Input {...field} isInvalid={Boolean(fieldState.error)}
                                                errorMessage={fieldState.error?.message} />
                                        )
                                    }}
                                />
                                <p>password</p>
                                <Controller
                                    name="password"
                                    control={form.control}
                                    render={({ field, fieldState }) => {
                                        return (
                                            <Input {...field} isInvalid={Boolean(fieldState.error)}
                                                errorMessage={fieldState.error?.message} />
                                        )
                                    }}
                                />
                                <Button type="submit" color="primary">Login</Button>
                            </form>




                        </CardBody>
                       
                    </div>
                    <div>


                    </div>

                </Card>
            </div>
        </div>
    )
}

export default Login