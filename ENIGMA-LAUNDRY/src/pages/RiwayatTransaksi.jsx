
import {Button,Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react"
import { useEffect, useState } from "react";
import { axiosinstance } from "../lib/axios";


const OrderCuciKomplit = () => {

  const [products,setProducts]=useState([])


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


  useEffect(()=>{
    getProducts()
  },[])

  useEffect(()=>{
    console.log(products)
  },[products])


    return (
      <Table  aria-label="Example static collection table">
       
        <TableHeader>
          <TableColumn>CODE-REGIS</TableColumn>
          <TableColumn>JENIS PAKET</TableColumn>
          <TableColumn>HARGA</TableColumn>
          <TableColumn>BERAT (KG)</TableColumn>
          <TableColumn>ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          {products.map((list)=>(
            <TableRow key={list.id} >
            <TableCell>{list.id}</TableCell>
            <TableCell>{list.name}</TableCell>
            <TableCell>{list.price}</TableCell>
            <TableCell>{list.type}</TableCell>
            <TableCell>
              <Button>Detail</Button>
              <Button>Hapus</Button>
            </TableCell>
          </TableRow>
          
          ))}
       
        </TableBody>
      </Table>
    );
  }
  
  export default OrderCuciKomplit;