import { Button, Card, CardBody, CardHeader, Divider, Input, Dropdown, DropdownTrigger, DropdownItem, DropdownMenu, DateInput, CardFooter } from "@nextui-org/react"
import NavbarAll from "../components/NavbarAll"
import NavbarComponent from "../components/NavbarComponent"

const CuciKomplit = () => {
    return (
        <div className="flex flex-col justify-content-center">
            <NavbarAll />
            <NavbarComponent />
            <div className="flex justify-center items-center  bg-blue-300">
                <Card className="w-[90%] mt-4">
                    <CardHeader className="flex justify-between">
                        <strong><h1>Cuci Komplit</h1></strong>
                        <Button color="primary">kembali</Button>
                    </CardHeader>
                    <Divider />
                    <CardBody className=" flex flex-row justify-between bg-red-400 h-[600px]">
                        <div className="bg-blue-600 w-[50%] p-1 m-1 flex  flex-col ">
                            <p>Nama Pelanggan</p>
                            <Input />
                            <br />
                            <p>Nomor telepon</p>
                            <Input />
                            <br />
                            <p>Alamat</p>
                            <Input />


                        </div>
                        <div className="bg-blue-600 w-[50%] p-1 m-1 flex  flex-col  ">
                            <div>
                                <p>pilih paket</p>
                                <Dropdown>

                                    <DropdownTrigger>

                                        <button
                                            className="bg-white h-[40px] w-[310px]"
                                        >
                                            --Pilih Jenis Paket--
                                        </button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        aria-label="Action event example"
                                        onAction={(key) => alert(key)}
                                    >
                                        <DropdownItem key="new">New file</DropdownItem>
                                        <DropdownItem key="copy">Copy link</DropdownItem>
                                        <DropdownItem key="edit">Edit file</DropdownItem>
                                        <DropdownItem key="delete" className="text-danger" color="danger">
                                            Delete file
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <br />
                            <div>
                                <p>Berat (kg)</p>
                                <Input />
                            </div>
                            <br />
                            <div>
                                <p>Tanggal Order Masuk</p>
                                <DateInput />
                            </div>
                            <br />
                            <div>
                                <p>Tanggal Orderan Keluar</p>
                                <DateInput />
                            </div>
                            <div>
                                <p>Catatan</p>
                                <input className="w-[310px] h-[100px] "/>
                            </div>
                        </div>
                    </CardBody>
                    <Divider/>
                    <CardFooter className="flex justify-end">
                        <div>
                            <Button color="primary"><strong>PESAN</strong></Button>
                            <Button color="danger"><strong>BATAL</strong></Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default CuciKomplit