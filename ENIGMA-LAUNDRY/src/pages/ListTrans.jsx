import { useEffect, useState } from "react";
import { axiosinstance } from "../lib/axios";
import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Divider, Card } from "@nextui-org/react";
import ModalTrans from "../components/ModalListTrans";
import NavbarAll from "../components/NavbarAll";
import NavbarComponent from "../components/NavbarComponent";

const ListTrans = () => {
    const token = localStorage.getItem("token");
    const [trans, setTrans] = useState([]);

    const [isOpenModal, setIsOpenModal] = useState(false);

    const getListTrans = async () => {
        try {
            const result = await axiosinstance.get("bills",{
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


    const openModal = () => {
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    return (

      <div className="w-full">
            <NavbarAll/>
            <NavbarComponent/>
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
                        <TableCell>{data.id}</TableCell>
                        <TableCell>
                            <h1 className="font-semibold text-xl">{data.customer.name}</h1>
                            <p>{data.billDetails[0].qty} Transaksi</p>
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