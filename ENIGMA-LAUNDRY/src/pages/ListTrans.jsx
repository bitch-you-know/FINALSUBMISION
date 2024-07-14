import { useEffect, useState } from "react";
import { axiosinstance } from "../lib/axios";
import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Modal, ModalContent, ModalHeader, ModalBody, useSelect } from "@nextui-org/react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";


const ListTrans = () => {
    const token = useSelector((state)=>state.auth.token)
    const [trans, setTrans] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);

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







    useEffect(() => {
        getListTrans();

    }, []);


    const openModal = (transaction) => {
        setSelectedTransaction(transaction);
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    return (
        <div className=" flex flex-col bg-slate-300 h-screen ">
            <Navbar />
           
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

            <Modal isOpen={isOpenModal} onOpenChange={closeModal}>
                <ModalContent>
                    <ModalHeader>Detail Transaksi</ModalHeader>
                    <ModalBody>
                        {selectedTransaction && (
                            <div>
                                <p>ID: {selectedTransaction.id}</p>
                                <p>Customer: {selectedTransaction.customer.name}</p>
                                <p>Price: {selectedTransaction.billDetails[0].price}</p>
                                {/* Tambahkan detail lainnya sesuai kebutuhan */}
                            </div>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>


    );
};

export default ListTrans;