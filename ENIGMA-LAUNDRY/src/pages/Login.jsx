import { Button, Card, CardBody, CardHeader, Divider, Input, } from "@nextui-org/react"
import NavbarAll from "../components/NavbarAll"
import NavbarComponent from "../components/NavbarComponent"
import { Link } from "react-router-dom"





const Login = () => {
    return (
        <div className="bg-blue-500">
           
            <div className="flex h-screen items-center justify-center mt-0">
        <Card  className="w-[400px] ">
            <div>
            <CardHeader className="font-semibold text-lg">LOGIN DASHBOARD ADMIN !</CardHeader>
            <Divider />
           
            <CardBody   className="flex flex-col gap-4">
                        
                   
                                  <p>username</p>
                                <Input />
                                <p>password</p>
                                <Input />
                              <Button color="primary">Login</Button>
                              

             

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

export default Login