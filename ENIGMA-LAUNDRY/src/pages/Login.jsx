import { Button, Card, CardBody, CardHeader, Divider, Input, Modal, ModalBody, ModalContent, ModalHeader, } from "@nextui-org/react"
import { Link, useNavigate } from "react-router-dom"
import { Controller, useForm } from "react-hook-form"
import { boolean, z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { axiosinstance } from "../lib/axios"
import { toast } from "sonner"
import { useDispatch } from "react-redux"
import { useState } from "react"





const Login = () => {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()

    const validateForm = z.object({
        username: z.string().min(3),
        password: z.string().min(3)
    })

    const form = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: zodResolver(validateForm)
    })

    const submitLogin = async (data) => {
        try {
            const result = await axiosinstance.post("auth/login", data)
            const statusCode = result.data.status.code
            const token = result.data.data.token
            if (statusCode === 201) {
                dispatch({ type: "SET_TOKEN", token: token })
                toast.success("login succes")

                navigate("/dashboard")
            }
            console.log(token)
        } catch (error) {
            console.log(error)
            toast.error("login gagal")
        }
    }
    //FORM CONTROL UNTUK MODAL SIGN UP EMPLOYE #117
    const formSignUp = useForm({
        defaultValues: {
            name:"",
            email:"",
            username:"",
            password:"",
            role:"employee"

        }
    })

    const submitSignUp = async (data) => {
        try {
            const response = await axiosinstance.post("/auth/register", data)
            console.log(response)
            toast.success("Register Succes !")
             setOpenModal(false)
        } catch (error) {
            console.log(error.massage)
            toast.error("Register Failed")
        }
    }

    const isOpen = () => {
        setOpenModal(true)
    }
    const onClose = () => {
        setOpenModal(false)
    }


    return (
        <div className="bg-home-login bg-cover bg-center min-h-screen">

            <div className="flex h-screen items-center justify-center mt-0">
                <Card className="w-[400px] ">
                    <div>
                        <CardHeader className="font-semibold text-lg">LOGIN DASHBOARD ADMIN !</CardHeader>
                        <Divider />

                        <CardBody className="flex flex-col  gap-4">

                            <form onSubmit={form.handleSubmit(submitLogin)} className=" flex  flex-col justify-center">

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
                                            <Input type="password" {...field} isInvalid={Boolean(fieldState.error)}
                                                errorMessage={fieldState.error?.message} />
                                        )
                                    }}
                                />
                                <Button type="submit" color="primary">Login</Button>
                            </form>




                        </CardBody>

                    </div>
                    <Divider />
                    <div className="flex justify-center text-center pb-3">

                        <Link onClick={isOpen}>Sign Up !</Link>

                    </div>

                </Card>
            </div>
            <div>
                <Modal isOpen={openModal} onOpenChange={onClose} >
                    <ModalContent>
                        <ModalHeader> Creat New Admin employe</ModalHeader>
                        <Divider />
                        <ModalBody>
                            <form onSubmit={formSignUp.handleSubmit(submitSignUp)}>
                                <p>Masukan nama yang sesuai KTP</p>
                                <Controller
                                    name="name"
                                    control={formSignUp.control}
                                    render={({ field }) => {
                                        return (
                                            <Input {...field} label="name" />
                                        )
                                    }}
                                />
                                <p>Masukan email yang anda gunakan</p>
                                <Controller
                                    name="email"
                                    control={formSignUp.control}
                                    render={({ field }) => {
                                        return (
                                            <Input {...field} label="email" />
                                        )
                                    }}
                                />
                                <p>Masukan username</p>
                                <Controller
                                    name="username"
                                    control={formSignUp.control}
                                    render={({ field }) => {
                                        return (
                                            <Input {...field} label="username" />
                                        )
                                    }}
                                />
                                <p>Buat password Baru</p>
                                <Controller
                                    name="password"
                                    control={formSignUp.control}
                                    render={({ field }) => {
                                        return (
                                            <Input type="password" {...field} label="password" />
                                        )
                                    }}
                                />
                                <p>Role</p>
                                <Controller
                                    name="role"
                                    control={formSignUp.control}
                                    render={({ field }) => {
                                        return (
                                            <Input  {...field} label="Employee" />
                                        )
                                    }}
                                />
                                <Button type="submit">SUBMIT</Button>
                            </form>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </div>
        </div>
    )
}

export default Login