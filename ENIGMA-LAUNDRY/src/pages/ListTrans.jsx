import { useEffect, useState } from "react";
import { axiosinstance } from "../lib/axios";
import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Divider, Card } from "@nextui-org/react";
import ModalTrans from "./trans/ModalTrans";

const ListTrans = () => {
    const token = localStorage.getItem("token");
    const [trans, setTrans] = useState([]);

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




    // const getListTrans = async () => {
    //     try {
    //         const headers = {
    //             Authorization: `Bearer ${token}`,
    //         };
    //         const response = await axiosinstance.get("/bills", { headers });
    //         const transactions = response.data.data;

    //         const newCustomerDataTransaction = {};

    //         transactions.forEach((transaction) => {
    //             const customerId = transaction.customer.id;

    //             // jika customerId belum ada di objek newCustomerDataTransaction, tambahkan property baru
    //             if (!newCustomerDataTransaction[customerId]) {
    //                 newCustomerDataTransaction[customerId] = {
    //                     ...transaction.customer, // copy semua properti customer
    //                     transactions: [], // tambahkan properti transactions yang menampung daftar transaksi dari response.data.data
    //                     transactionCount: 0, // tambahkan properti transactionCount untuk menghitung jumlah transaksi
    //                 };
    //             }
    //             // Tambahkan transaksi ke daftar transaksi pelanggan
    //             newCustomerDataTransaction[customerId].transactions.push(transaction);
    //             // Tingkatkan jumlah transaksi pelanggan
    //             newCustomerDataTransaction[customerId].transactionCount += 1;
    //         });

    //         setTrans(newCustomerDataTransaction);

    //         console.log(response.data.data);
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };




    useEffect(() => {
        getListTrans();

    }, []);

    // useEffect(() => {
    //     console.log(trans)
    // }, [trans])


    const openModal = () => {
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    return (

      <div className="w-full">
           <Card>
            <h1 className="pl-5">RIWAYAT TRANSAKSI</h1>
           
          <Table>
            <TableHeader>
                <TableColumn>CODE-REGIS</TableColumn>
                <TableColumn>NAMA</TableColumn>
                <TableColumn>ACTION</TableColumn>
            </TableHeader>
            <TableBody>
                {trans.map((data) => (
                    <TableRow >
                        <TableCell>{data.customer.id}</TableCell>
                        <TableCell>
                            <h1 className="font-semibold text-xl">{ }</h1>
                            <p>{ } Transaksi</p>
                        </TableCell>
                        <TableCell>
                            <Button onClick={openModal}>
                                <p>Detail Transaksi</p>
                            </Button>
                            <ModalTrans isOpen={isOpenModal} onClose={closeModal} />
                        </TableCell>
                    </TableRow>
                    
                ))}
            </TableBody>

        </Table>
        </Card>
      </div>

  
    );
};

export default ListTrans;