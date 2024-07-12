import { useEffect, useState } from "react"
import { axiosinstance } from "../lib/axios"
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Button, Modal } from "@nextui-org/react"
import { toast } from "sonner"
import ModalEditeCustomer from "../components/ModalEditeCustomer"
import { useSelector } from "react-redux"

const ListCustomers = () => {
  const token = useSelector((state) => state.auth.token);  // Mengambil token dari Redux state

  const [customers, setCustomers] = useState([]);  // State untuk menyimpan daftar pelanggan
  const [selectedCustomer, setSelectedCustomer] = useState(null);  // State untuk menyimpan pelanggan yang dipilih
  const [openModal, setOpenModal] = useState(false);  // State untuk mengatur modal

  // Fungsi untuk mendapatkan daftar pelanggan dari API
  const getListCustomers = async () => {
    try {
      const result = await axiosinstance.get("/customers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCustomers(result.data.data);  // Menyimpan data pelanggan ke state
      console.log(result.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Fungsi untuk menghapus pelanggan berdasarkan ID
  const deleteCustomers = async (id) => {
    try {
      const response = await axiosinstance.delete(`/customers/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      toast.success("Sukses delete");
      getListCustomers();  // Memperbarui daftar pelanggan setelah penghapusan
    } catch (error) {
      console.log(error.message);
    }
  };

  // Fungsi untuk mengatur state ketika tombol edit ditekan
  const handleEditClick = (customer) => {
    setSelectedCustomer(customer);
    setOpenModal(true);  // Membuka modal
  };

  // Mengambil daftar pelanggan saat komponen pertama kali dirender
  useEffect(() => {
    getListCustomers();
  }, []);

  // Fungsi untuk memperbarui daftar pelanggan dan menutup modal
  const handleFetchDataAndCloseModal = () => {
    getListCustomers();
    setOpenModal(false);
  };

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableColumn>NO</TableColumn>
          <TableColumn>Nama</TableColumn>
          <TableColumn>NO TELEPHONE</TableColumn>
          <TableColumn>ALAMAT</TableColumn>
          <TableColumn>TGL PEMESANAN</TableColumn>
          <TableColumn>ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          {customers.map((list, index) => (
            <TableRow key={list.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{list.name}</TableCell>
              <TableCell>{list.phoneNumber}</TableCell>
              <TableCell>{list.address}</TableCell>
              <TableCell>{list.createdAt}</TableCell>
              <TableCell>
                <Button color="primary">PAYMENT</Button>
                <Button color="secondary" onClick={() => handleEditClick(list)}>
                  EDITE
                </Button>
                <Button color="danger" onClick={() => deleteCustomers(list.id)}>
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        isOpen={openModal}
        onOpenChange={() => setOpenModal(false)}
        onClose={() => setOpenModal(false)}
      >
        <ModalEditeCustomer
          handleFetchData={handleFetchDataAndCloseModal}
          customer={selectedCustomer}
        />
      </Modal>
    </div>
  );
};

export default ListCustomers;