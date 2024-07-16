import { useEffect, useState } from "react";
import { axiosinstance } from "../lib/axios";
import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Modal, ModalContent, ModalHeader, ModalBody, useSelect, Select, SelectItem, Input, Divider } from "@nextui-org/react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { toast } from "sonner";


const ListTrans = () => {
    const token = useSelector((state) => state.auth.token)
    const [trans, setTrans] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [addModal, setAddModal] = useState(false)


    //MENDAPATKAN LIST TRANSAKSI DARI API

    const getListTrans = async () => {
        try {
            const result = await axiosinstance.get("bills", {
                headers: { Authorization: `Bearer ${token}` }
            });

            setTrans(result.data.data);
            console.log(result.data.data)
            //   console.log(result.data.data)
        } catch (error) {
            console.log(error);
        }
    };
    // FUNGSI UNTUK MODAL MENAMBAH LIST TRANSAKSI MODAL #131
    const addTransaction = async () => {
        try {
            const formData = {
                customerId: selectedCustomerId,
                billDetails: [
                    {
                        product: {
                            id: selectedProductId
                        },
                        qty: selectedQty
                    }
                ]
            };

            const result = await axiosinstance.post("bills", formData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            toast.success("Transaksi Beerhasil di tambahkan")
            setIsOpenModal(false);
            getListTrans();
        } catch (error) {
            console.log(error);
            toast.error("transaksi gagal di tambahkan")
        }
    };



    useEffect(() => {
        getListTrans();
    }, []);

    const openModal = (transaction) => {
        setSelectedTransaction(transaction);
        setIsOpenModal(true);
    };
    const openModalAdd = () => {
        setAddModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false);
        setAddModal(false)
    };

    return (
        <div className=" flex flex-col bg-slate-300 h-screen ">
            <Navbar />
            <div className="flex justify-end w-[95%] pt-4">
                <Button onClick={openModalAdd} color="primary" ><strong>Tambah Transaksi</strong></Button>
            </div>
            <div className="w-full flex justify-center  ">

                <Table className="w-[90%]">
                    <TableHeader>
                        <TableColumn>CODE-REGIS</TableColumn>
                        <TableColumn>NAMA</TableColumn>
                        <TableColumn>ACTION</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {trans.map((data) => (
                            <TableRow key={data.id} >
                                <TableCell>{data.id}</TableCell>
                                <TableCell>
                                    <h1 className="font-semibold text-xl">{data.customer.name}</h1>
                                    <p>{data.billDetails[0].qty} Transaksi</p>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => openModal(data)}>
                                        <p>Detail Transaksi</p>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </div>

            {/* >>>>>>>>>> MODAL UNTUK MEMBUKA DETAIL <<<<<<<<<<<< */}

            <Modal isOpen={isOpenModal} onOpenChange={closeModal}>
                <ModalContent>
                    <ModalHeader>Detail Transaksi</ModalHeader>
                    <ModalBody>
                        {selectedTransaction && (
                            <div>

                                <Divider />
                                <p>Customer:     {selectedTransaction.customer.name}</p><Divider />
                                <p>phoneNumber : {selectedTransaction.customer.phoneNumber}</p><Divider />
                                <p>Jenis Paket : {selectedTransaction.billDetails[0].product.name}</p>
                                <p>Price:        {selectedTransaction.billDetails[0].price}</p><Divider />

                            </div>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/*>>>>>> MODAL UNTUK MENAMBAHKAN TRANSAKSI <<<<<*/}
            <Modal isOpen={addModal} onOpenChange={closeModal}>
                <ModalContent>
                    <ModalHeader>Tambahtransaksi baru</ModalHeader>
                    <ModalBody>
                        <div>
                            <Input />
                        </div>
                        <div>
                            <Select label="Pilih Customer">
                                <SelectItem>asdas</SelectItem>
                                <SelectItem>asdas</SelectItem>
                            </Select>
                        </div>
                        <div>
                            <Select label="Pilih paket">
                                <SelectItem></SelectItem>
                            </Select>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </div>


    );
};

export default ListTrans;