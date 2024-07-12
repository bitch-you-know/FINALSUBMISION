import {Button,Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react"
import { useEffect, useState } from "react";
import { axiosinstance } from "../lib/axios";
import ModalListTrans from "../components/ModalListTrans";
import ModalAddProduct from "./cuciKomplit/ModalKomplit";


const ListProduct = () => {

  const [products,setProducts]=useState([])
  const [openModal,setOpenModal] =useState()


  const token=localStorage.getItem("token")


  const getProducts =async ()=>{
       try {
            const result = await axiosinstance.get("/products",{
              headers : {Authorization:`Bearer ${token}`}
            })
            setProducts(result.data.data)
            
            
       } catch (error) {
         console.log(error.massage)
       }
  }


  

  



  const deleteData = async (id) => {
    try {
      const result = await axiosinstance.delete(`/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log("Data deleted:", result);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(()=>{
    getProducts()
  },[])

  useEffect(()=>{
    console.log(products)
  },[])


  const isOpenModal=()=>{
    setOpenModal(true)
  }

  const closeModal=()=>{
    setOpenModal(false)
  }


    return (
      
        <Table>
       
       <TableHeader>
         <TableColumn>NO</TableColumn>
         <TableColumn>JENIS PAKET</TableColumn>
         <TableColumn>HARGA</TableColumn>
         <TableColumn>BERAT (KG)</TableColumn>
         <TableColumn>ACTION</TableColumn>
       </TableHeader>
       <TableBody>
         {products.map((list,index)=>(
           <TableRow key={list.id} >
           <TableCell>{index + 1}</TableCell>
           <TableCell>{list.id}</TableCell>
           <TableCell>{list.name}</TableCell>
           <TableCell>{list.price}</TableCell>
           <TableCell className="flex">
             <Button color="primary" onClick={isOpenModal} >ADD </Button>
            <ModalAddProduct isOpen={openModal}  onClose={closeModal}/>
             <Button  color="danger" onClick={() => deleteData(list.id)} >DELETE</Button>
           </TableCell>
         </TableRow>
         
         ))}
      
       </TableBody>
     </Table>
    
    );
  }
  
  export default ListProduct;