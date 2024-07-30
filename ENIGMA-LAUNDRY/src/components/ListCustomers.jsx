// src/components/ListCustomers.js
import { customerContext } from '../contexts/CustomerContex';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Button, Modal, ModalHeader, ModalBody } from '@nextui-org/react';
import { toast } from 'sonner';
import ModalEditeCustomer from './ModalEditeCustomer';
import { useEffect, useState } from 'react';
import { axiosinstance } from '../lib/axios';
import { useSelector } from 'react-redux';
9

const ListCustomers = () => {
  const { customers, getListCustomers } = customerContext(); // Mengambil data customer dan fungsi update/pembaruan dari context 
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const token = useSelector(state => state.auth.token)
  const [isOpenDelete,setIsopenDelete]=useState(false)


  

  // Fungsi Delet  dari #58
  const deleteCustomers = async (id) => {
    try {
      await axiosinstance.delete(`/customers/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Sukses delete');
      getListCustomers(); // Memperbarui daftar pelanggan setelah penghapusan
    } catch (error) {
      console.log(error.message);
    }
  };

 

  
  //fungsi ini di triger dari  #57   untuk membawa parameter lalu di set pada setSelectedCustomer
  // lalu state yang sudah di buat selectccustomer tersebut di lempar melalui prop customer di #66
  const handleEditClick = (customer) => {
    setSelectedCustomer(customer);
    setOpenModal(true);
  };
  const handleDeleteClick =(id)=>{
     setIsopenDelete(true)
     console.log("status",isOpenDelete)
  }
  const closeModal =()=>{
      setIsopenDelete(false)
  }
  const confirmDelete = () => {
    if (customerToDelete) {
      deleteCustomers(customerToDelete);
    }
    closeModal();
  };

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
          {customers.map((customer, index) => (
            <TableRow key={customer.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.phoneNumber}</TableCell>
              <TableCell>{customer.address}</TableCell>
              <TableCell>{customer.createdAt}</TableCell>
              <TableCell>
                <Button onClick={() => handleEditClick(customer)}>EDIT</Button>
                <Button color="danger" onClick={() => handleDeleteClick(customer.id)} data-testid={`delete-customer-button-${customer.id}`}>DELETE</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal isOpen={openModal} onOpenChange={() => setOpenModal(false)}>
        <ModalEditeCustomer handleFetchData={handleFetchDataAndCloseModal} customer={selectedCustomer} />
      </Modal>
      <Modal isOpen={isOpenDelete} onOpenChange={closeModal} >
        <ModalHeader>Are you sure ?</ModalHeader>
        <ModalBody>
          <Button>cancle</Button>
          <Button>sure</Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ListCustomers;
