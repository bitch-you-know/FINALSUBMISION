import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Modal, Input, ModalContent, ModalHeader, ModalBody, Divider } from "@nextui-org/react"
import { useEffect, useState } from "react";
import { axiosinstance } from "../lib/axios";
import Navbar from "../components/Navbar";
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from "react-redux";
import { toast } from "sonner";


const ListProduct = () => {

  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalEdite, setModalEdite] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null); // State untuk menyimpan ID produk yang sedang diedit
  const token = useSelector((state) => state.auth.token);


  // MENGAMBIL DATA DARI API
  const getProducts = async () => {
    try {
      const result = await axiosinstance.get("/products", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProducts(result.data.data);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }

  // FORM CONTROL DARI MODAL ADD PRODUCT
  const form = useForm({
    defaultValues: {
      name: "",
      price: "",
      type: ""
    }
  });

  // FORM CONTROL DARI MODAL EDIT PRODUCT
  const formEdite = useForm({
    defaultValues: {
      name: "",
      price: "",
      type: ""
    }
  });

  // MENGIRIM DATA BARU PADA API
  const resultSubmit = async (data) => {
    try {
      const modifiedData = {
        ...data,
        price: parseFloat(data.price),
      };
      const result = await axiosinstance.post("/products", modifiedData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(result);
      getProducts();
      closeModal();
      toast.success("berhasil menambahkan product");
    } catch (error) {
      console.log(error);
      toast.error("gagal menambahkan product");
    }
  }

  // MENGHAPUS DATA BERDASARKAN ID
  const deleteData = async (id) => {
    try {
      const result = await axiosinstance.delete(`/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success(`sucses delete`);
      getProducts();
    } catch (error) {
      console.log(error);
      toast.error("faild deleted");
    }
  };

  // EDIT DATA BERDASARKAN ID
  const editeData = async (data) => {
    const modifiedData = {
      ...data,
      id: editingProductId, // sertakan ID produk
      price: parseFloat(data.price),
    };
    try {
      const result = await axiosinstance.put(`/products`, modifiedData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(result);
      getProducts();
      closeModal();
      toast.success("berhasil mengedit product");
    } catch (error) {
      console.log(error.message);
      toast.error("gagal mengedit product");
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  const isOpenModal = () => {
    setOpenModal(true);
  }

  const openModalEdite = (product) => {
    setModalEdite(true);
    setEditingProductId(product.id); // Simpan ID produk yang sedang diedit
    formEdite.reset({
      name: product.name,
      price: product.price,
      type: product.type
    });
  }

  const closeModal = () => {
    setOpenModal(false);
    setModalEdite(false);
  }

  return (
    <div className="flex flex-col  bg-slate-200 h-screen">
      <Navbar />

      <div className="flex justify-end w-[95%] pt-4">
        <Button onClick={isOpenModal} color="primary" className="font-semibold">Tambah product</Button>
      </div>

      <div className="flex justify-center">
        <br />
        <Table className="flex justify-center w-[90%]">
          <TableHeader>
            <TableColumn>NO</TableColumn>
            <TableColumn>JENIS PAKET</TableColumn>
            <TableColumn>HARGA</TableColumn>
            <TableColumn>BERAT (KG)</TableColumn>
            <TableColumn>ACTION</TableColumn>
          </TableHeader>
          <TableBody>
            {products.map((list, index) => (
              <TableRow key={list.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{list.id}</TableCell>
                <TableCell>{list.name}</TableCell>
                <TableCell>{list.price}</TableCell>
                <TableCell className="flex">
                  <Button onClick={() => openModalEdite(list)}>EDITE</Button>
                  <Button color="danger" onClick={() => deleteData(list.id)}>DELETE</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* MODAL UNTUK ADD PRODUCT BARU */}
      <Modal isOpen={openModal} onOpenChange={closeModal}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 bg-slate-700 text-white">Transaksi Baru</ModalHeader>
              <ModalBody>
                <form onSubmit={form.handleSubmit(resultSubmit)}>
                  <Controller
                    name='name'
                    control={form.control}
                    render={({ field }) => (
                      <Input {...field} label="JENIS PAKET" variant="bordered" />
                    )}
                  />
                  <Controller
                    name='price'
                    control={form.control}
                    render={({ field }) => (
                      <Input {...field} label="HARGA" variant="bordered" type='number' />
                    )}
                  />
                  <Controller
                    name='type'
                    control={form.control}
                    render={({ field }) => (
                      <Input {...field} label="BERAT" variant="bordered" type='number' />
                    )}
                  />
                  <Button color="danger" variant="flat" onPress={onClose}>Cancel</Button>
                  <Button type='submit' color="primary">Tambah Orderan</Button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* MODAL UNTUK EDIT */}
      <Modal isOpen={modalEdite} onOpenChange={closeModal}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Edite Paket</ModalHeader>
              <Divider />
              <ModalBody>
                <form onSubmit={formEdite.handleSubmit(editeData)}>
                  <Controller
                    name='name'
                    control={formEdite.control}
                    render={({ field }) => (
                      <Input {...field} label="JENIS PAKET" variant="bordered" />
                    )}
                  />
                  <Controller
                    name='price'
                    control={formEdite.control}
                    render={({ field }) => (
                      <Input {...field} label="HARGA" variant="bordered" type='number' />
                    )}
                  />
                  <Controller
                    name='type'
                    control={formEdite.control}
                    render={({ field }) => (
                      <Input {...field} label="BERAT" variant="bordered" type='number' />
                    )}
                  />
                  <Button color="danger" variant="flat" onPress={onClose}>Cancel</Button>
                  <Button type='submit' color="primary">Simpan Perubahan</Button>
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
