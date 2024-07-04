import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react"
import NavbarAll from "../components/NavbarAll"
import NavbarComponent from "../components/NavbarComponent"

const DaftarPaket = () => {
    return (
        <div className="flex flex-col justify-center">
            <NavbarAll />
            <NavbarComponent />
            <div><br /></div>
            <div className="flex justify-center">
                <Card className="w-[80%] ">
                    <CardHeader>
                        <strong><h1>Tambah Orderan Baru</h1></strong>
                    </CardHeader>
                    <Divider />
                    <CardBody className="flex flex-row justify-center h-[300px] items-center">
                        <div className="bg-slate-300 w-[200px] h-[200px] m-4">
                            <h3>Cuci Komplit</h3>
                        </div>
                        <div className="bg-slate-300 w-[200px] h-[200px] m-4">
                            <h3>Dry Clean</h3>
                        </div>
                        <div className="bg-slate-300 w-[200px] h-[200px] m-4">
                            <h3>Cuci Satuan</h3>
                        </div>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default DaftarPaket