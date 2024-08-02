import { axiosinstance } from "../lib/axios";
import { Controller, useForm } from 'react-hook-form';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, Input } from '@nextui-org/react';
import { toast } from 'sonner';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { customerContext } from "../contexts/CustomerContex";

const ModalAddCustomer = ({ isOpen, onClose }) => {
  const token = useSelector((state) => state.auth.token)

  const { customers, getListCustomers } = customerContext();

  const validateForm = z.object({
    name: z.string().min(1),
    phoneNumber: z.string().min(3),
    address: z.string().min(1),
  });

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      phoneNumber: '',
      address: '',
    },
    resolver: zodResolver(validateForm),
  });


  // POST DATA BARU DI DASHBOARD  FORM  #47
  const resultSubmit = async (data) => {
    try {
      const response = await axiosinstance.post('/customers', data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      toast.success('Customer Berhasil di Tambahkan');
      reset();
      onClose();
      getListCustomers()

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onClose} data-testid="customer-modal">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 bg-slate-700 text-white">Transaksi Baru</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(resultSubmit)} >
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Input {...field} label="Nama" variant="bordered" data-testid="customer-modal-name-input"/>}
                
              />
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => <Input {...field} label="PhoneNumber" variant="bordered" type="number" data-testid="customer-modal-phone-input"/>}
              />
              <Controller
                name="address"
                control={control}
                render={({ field }) => <Input {...field} label="Alamat" variant="bordered"data-testid="customer-modal-address-input" />}
              />
              <Button color="danger" variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button  type="submit" color="primary" data-testid="customer-modal-submit">
                Tambah Orderan
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

ModalAddCustomer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalAddCustomer;
