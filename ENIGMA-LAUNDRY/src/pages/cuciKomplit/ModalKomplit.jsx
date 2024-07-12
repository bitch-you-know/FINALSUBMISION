import React, { useState } from 'react';

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Checkbox, Link, Divider } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import { axiosinstance } from '../../lib/axios';
import { toast } from 'sonner';

const ModalAddProduct = ({ isOpen, onClose }) => {

  const [kompqlit, setkomplit] = useState({})


  const token = localStorage.getItem("token")

  const form = useForm({
    defaultValues: {
      name: "",
      price: "",
      type: ""

    }
  })


  const resultSubmit = async (data) => {
    try {
      const modifiedData = {
        ...data,
        price: parseFloat(data.price),
      };
      const result = await axiosinstance.post("/products", modifiedData,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      console.log(result)
      toast.success("berhasil menambahkan product")
    } catch (error) {
     console.log(error)
     toast.error("gagal memasukan product")
    }
  }



  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 bg-slate-700 text-white" >Transaksi Baru</ModalHeader>

              <ModalBody>
                <form onSubmit={form.handleSubmit(resultSubmit)}>
                  <Controller
                    name='name'
                    control={form.control}
                    render={({ field }) => {
                      return (
                        <Input {...field}
                          label="JENIS PAKET"
                          variant="bordered"
                        />
                      )
                    }}
                  />
                  <Controller
                    name='price'
                    control={form.control}
                    render={({ field }) => {
                      return (
                        <Input {...field}
                          label="HARGA"
                          variant="bordered"
                          type='number'
                        />
                      )
                    }}
                  />
                  <Controller
                    name='type'
                    control={form.control}
                    render={({ field }) => {
                      return (
                        <Input {...field}
                          label="BERAT"
                          variant="bordered"
                          type='number'
                        />
                      )
                    }}
                  />
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button type='submit' color="primary" >
                    Tambah Orderan
                  </Button >
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalAddProduct;
