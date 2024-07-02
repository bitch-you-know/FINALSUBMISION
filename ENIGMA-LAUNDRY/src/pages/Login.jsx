import { Button, Card, CardBody, CardHeader, Divider, Input, } from "@nextui-org/react"
import NavbarAll from "../components/NavbarAll"
import NavbarComponent from "../components/NavbarComponent"





const Login = () => {
    return (
        <div>
            <NavbarAll/>
            <NavbarComponent className="mb-1"/>
            <div className="flex h-screen items-center justify-center mt-0">
        <Card className="w-[500px]">
            <div>
            <CardHeader className="font-semibold text-lg">sign up !</CardHeader>
            <Divider />
            <CardBody   className="flex flex-col gap-4">
                
                   
                                <Input />
                                <Input />
                                <Input />
                              <Button SScolor="primary">Signsadas up</Button>



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