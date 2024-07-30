import { useEffect, useState } from "react";
import { axiosinstance } from "../lib/axios";
import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Modal, ModalContent, ModalHeader, ModalBody, useSelect, Select, SelectItem, Input, Divider } from "@nextui-org/react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { toast } from "sonner";


const TransactionHistory = () => {
    const token = useSelector((state) => state.auth.token)
    const [transactions, setTranstactions] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [addModal, setAddModal] = useState(false)
    const [selectedCustomerId, setSelectedCustomerId] = useState(""); // State untuk customer yang dipilih
    const [selectedProductId, setSelectedProductId] = useState(""); // State untuk produk yang dipilih
    const [qty, setQty] = useState(1); // State untuk jumlah transaksi, default diatur ke 1
    const [products, setProducts] = useState([])
    const [customers, setCustomers] = useState([])




    //GET TRANSAKSI

    const getListTrans = async () => {
        try {
            const result = await axiosinstance.get("bills", {
                headers: { Authorization: `Bearer ${token}` }
            });

            setTranstactions(result.data.data);

            //   console.log(result.data.data)
        } catch (error) {
            console.log(error);
        }
    };

    //GET PRODUCT
    const getProduk = async () => {
        try {
            const result = await axiosinstance.get("/products",
                {
                    headers:
                        { Authorization: `Bearer ${token}` }
                }
            )

            setProducts(result.data.data)
        } catch (error) {
            console.log(error.message);
            toast.error("error")
        }
    }


    //GET CUSTOMERS
    const getCustomer = async () => {
        try {
            const result = await axiosinstance.get("/customers",
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            )

            setCustomers(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    // FUNGSI UNTUK MODAL MENAMBAH LIST TRANSAKSI MODAL #131
    const addTransaction = async () => {
        try {
            const payload = {
                customerId: selectedCustomerId,
                billDetails: [
                    {
                        product: {
                            id: selectedProductId
                        },

                        qty: qty
                    }
                ]
            }

            const result = await axiosinstance.post("bills", payload, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log(payload)
            toast.success("Transaksi berhasil ditambahkan");
            closeModal(); // Tutup modal setelah berhasil menambahkan transaksi
            getListTrans(); // Muat ulang daftar transaksi untuk memperbarui tampilan
        } catch (error) {
            console.log(error.message);
            toast.error("Transaksi gagal ditambahkan");
        }
    };


    useEffect(() => {
        getListTrans();
        getProduk();
        getCustomer();
    }, []);

    const openModal = (transaction) => {
        setSelectedTransaction(transaction);
        setIsOpenModal(true);
        console.log(transaction)
    };
    const openModalAdd = () => {
        setAddModal(true)

    }

    const closeModal = () => {
        setIsOpenModal(false);
        setAddModal(false)
    };


    return (
        <div className=" flex flex-col bg-slate-200 h-screen ">
            <Navbar />
            <div className="flex justify-end w-[95%] pt-2">
                <Button onClick={openModalAdd} color="primary" className="mt-2 font-semibold" >Tambah Transaksi</Button>
            </div>
            <div className="w-full flex justify-center">

                <Table className="w-[90%]">
                    <TableHeader>
                        <TableColumn>CODE-REGIS</TableColumn>
                        <TableColumn>NAMA</TableColumn>
                        <TableColumn>ACTION</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {transactions.map((transaction) => (
                            <TableRow key={transaction.id} >
                                <TableCell>{transaction.id}</TableCell>
                                <TableCell>
                                    <h1 className="font-semibold text-xl">{transaction.customer.name}</h1>
                                    <p>{transaction.billDetails[0].qty} Transaksi</p>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => openModal(transaction)}>
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
                                <p>total pembayaran:
                                    {(
                                        selectedTransaction.billDetails[0].price * selectedTransaction.billDetails[0].qty
                                    ).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                </p><Divider />

                            </div>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/*>>>>>> MODAL UNTUK MENAMBAHKAN TRANSAKSI <<<<<*/}
            <Modal isOpen={addModal} onOpenChange={closeModal}>
                <ModalContent>
                    <ModalHeader>Tambah Transaksi Baru</ModalHeader>
                    <ModalBody>

                        <Select onChange={(event) => {
                            return setSelectedCustomerId(event.target.value)
                        }}>
                            {/* Pilihan customer disesuaikan dengan data */}
                            {customers.map((customer) => (
                                <SelectItem key={customer.id} >
                                    {customer.name}
                                </SelectItem>
                            ))}
                        </Select>
                        <Select onChange={(event) => {
                            return setSelectedProductId(event.target.value)
                        }} >
                            {/* Pilihan customer disesuaikan dengan data */}
                            {products.map((product) => (
                                <SelectItem key={product.id}>
                                    {product.name}
                                </SelectItem>
                            ))}
                        </Select>

                        <Input onChange={((e) => {
                            return setQty(parseInt(e.target.value))
                        })} label="Qty" />

                        <Button type="submit" onClick={addTransaction} color="primary">
                            Tambah Transaksi
                        </Button>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>

 
    );
};

export default TransactionHistory;