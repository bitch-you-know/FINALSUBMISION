import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Modal, Input, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react"
import { useEffect, useState } from "react";
import { axiosinstance } from "../lib/axios";
import NavbarAll from "../components/NavbarAll";
import { Controller, useForm } from 'react-hook-form';
import NavbarComponent from "../components/NavbarComponent";
import { useSelector } from "react-redux";
import { toast } from "sonner";


const ListProduct = () => {

  const [products, setProducts] = useState([])
  const [openModal, setOpenModal] = useState()
  const token = useSelector((state) => state.auth.token)


  //  MENGAMBIL DATA DARI API

  const getProducts = async () => {
    try {
      const result = await axiosinstance.get("/products", {
        headers: { Authorization: `Bearer ${token}` }
      })
      setProducts(result.data.data)

    } catch (error) {
      console.log(error.massage)
    }
  }

  //FORM CONTROL DARI MODAL ADD PRODUCT  132
  const form = useForm({
    defaultValues: {
      name: "",
      price: "",
      type: ""

    }
  })

  // MENGIRIM DATA BARU PADA API  
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
      getProducts()
      closeModal()

      toast.success("berhasil menambahkan product")
    } catch (error) {
      console.log(error)
      toast.error("gagal menambahkan product")
    }
  }



  //MENGHAPUS DATA BERDASARKAN ID
  const deleteData = async (id) => {
    try {
      const result = await axiosinstance.delete(`/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success(`sucses delete`)
      getProducts()
    } catch (error) {
      console.log(error);
      toast.error("faild deleted")
    }
  };


  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    console.log(products)
  }, [])

  const isOpenModal = () => {
    setOpenModal(true)
  }

  const closeModal = () => {
    setOpenModal(false)
  }


  return (
    <div className="flex flex-col  bg-slate-200 h-screen">
      <NavbarAll />
      <NavbarComponent />
      <div className="flex justify-end w-[95%] pt-4 " >
        <Button onClick={isOpenModal} color="primary" className=" font-semibold">Tambah product</Button>
      </div>


      <div className="flex justify-center ">
        <br />
        <Table className="flex justify-center w-[90%] " >
          <TableHeader>
            <TableColumn>NO</TableColumn>
            <TableColumn>JENIS PAKET</TableColumn>
            <TableColumn>HARGA</TableColumn>
            <TableColumn>BERAT (KG)</TableColumn>
            <TableColumn>ACTION</TableColumn>
          </TableHeader>
          <TableBody>
            {products.map((list, index) => (
              <TableRow key={list.id} >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{list.id}</TableCell>
                <TableCell>{list.name}</TableCell>
                <TableCell>{list.price}</TableCell>
                <TableCell className="flex">

                  <Button color="danger" onClick={() => deleteData(list.id)} >DELETE</Button>
                </TableCell>
              </TableRow>

            ))}

          </TableBody>
        </Table>
      </div>


      <Modal isOpen={openModal} onOpenChange={closeModal}>
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
}

export default ListProduct;