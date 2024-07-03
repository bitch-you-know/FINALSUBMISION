import { Card, CardBody, CardHeader } from "@nextui-org/react"
import NavbarAll from "../components/NavbarAll"
import NavbarComponent from "../components/NavbarComponent"

const CuciKomplit =()=>{
    return(
        <div>
            <NavbarAll/>
            <NavbarComponent/>
            <Card>
                <CardHeader></CardHeader>
                <CardBody></CardBody>
            </Card>
        </div>
    )
}

export default CuciKomplit