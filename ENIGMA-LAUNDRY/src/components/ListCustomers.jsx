import { customerContext } from '../contexts/CustomerContex';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Button, Modal, ModalHeader, ModalBody, ModalContent } from '@nextui-org/react';
import { toast } from 'sonner';
import ModalEditeCustomer from './ModalEditeCustomer';
import { useEffect, useState } from 'react';
import { axiosinstance } from '../lib/axios';
import { useSelector } from 'react-redux';

const ListCustomers = () => {
  const { customers, getListCustomers } = customerContext(); // Mengambil data customer dan fungsi update/pembaruan dari context 
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);
  const token = useSelector(state => state.auth.token);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  // Fungsi Delet
  const deleteCustomers = async () => {
    try {
      await axiosinstance.delete(`/customers/${customerToDelete}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Sukses delete');
      getListCustomers(); // Memperbarui daftar pelanggan setelah penghapusan
      closeModal(); // Menutup modal setelah penghapusan
    } catch (error) {
      console.log(error.message);
    }
  };

  // Fungsi ini di triger untuk membawa parameter lalu di set pada setSelectedCustomer
  // lalu state yang sudah di buat selectccustomer tersebut di lempar melalui prop customer
  const handleEditClick = (customer) => {
    setSelectedCustomer(customer);
    setOpenModal(true);
  };

  const handleDeleteClick = (id) => {
    setCustomerToDelete(id);
    setIsOpenDelete(true);
  };

  const closeModal = () => {
    setIsOpenDelete(false);
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
                <Button onClick={() => handleEditClick(customer) } data-testid={`edit-customer-button-${customer.id}`} >EDIT</Button>
                <Button color="danger" onClick={() => handleDeleteClick(customer.id)} data-testid={`delete-customer-button-${customer.id}`} >DELETE</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     {/* MODAL UNTUK EDIT CUSTOMER */}
      <Modal isOpen={openModal} onOpenChange={() => setOpenModal(false)} data-testid="customer-modal" >
        <ModalEditeCustomer handleFetchData={handleFetchDataAndCloseModal} customer={selectedCustomer} />
      </Modal>
      <Modal isOpen={isOpenDelete} onClose={closeModal}>
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalBody>
            <div className="flex justify-between">
              <Button onClick={closeModal} color="primary" data-testid='cancel-delete-button'>Cancel</Button>
              <Button onClick={deleteCustomers} color="danger" data-testid='confirm-delete-button'>Yes</Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ListCustomers;

