import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { axiosinstance } from "../lib/axios"
import { useEffect } from "react"
import { Controller, useForm } from 'react-hook-form';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Checkbox, Link, Divider } from '@nextui-org/react';
import { toast } from "sonner";



const ModalEditeCustomer = ({ handleFetchData, customer }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      phoneNumber: "",
      address: "",
    },
  });

  const token = localStorage.getItem("token");

  const resultSubmit = async (data) => {
    try {
      const response = await axiosinstance.put("/customers", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      handleFetchData();
      toast.success("Update transaksi");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (customer) {
      reset({
        id: customer.id,
        name: customer.name,
        phoneNumber: customer.phoneNumber,
        address: customer.address,
      });
    }
  }, [customer, reset]);

  return (
    <div>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 bg-slate-700 text-white">
              Update Customer
            </ModalHeader>

            <ModalBody>
              <form onSubmit={handleSubmit(resultSubmit)}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} label="Nama" variant="bordered" />
                  )}
                />
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="PhoneNumber"
                      variant="bordered"
                      type="text"
                    />
                  )}
                />
                <Controller
                  name="address"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Alamat"
                      variant="bordered"
                      type="text"
                    />
                  )}
                />
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Tambah Orderan
                </Button>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </div>
  );
};

export default ModalEditeCustomer;