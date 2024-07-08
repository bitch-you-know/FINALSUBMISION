import { useEffect, useState } from "react"
import { axiosinstance } from "../lib/axios"
import { Table,TableHeader,TableBody,TableColumn,TableRow,TableCell,Button,Modal } from "@nextui-org/react"

const ListCustomers = () => {

    const token = localStorage.getItem("token")
    const [customers,setcustomers]=useState([])

    const getListCustomers = async () => {
        try {
            const result = await axiosinstance.get("/customers", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setcustomers(result.data.data)
         console.log(result.data.data)
        } catch (error) {
            console.log(error.massage)
        }
    }

    useEffect(()=>{
        getListCustomers()
    },[])

    return (
        <Table>
       
       <TableHeader>
         <TableColumn>NO</TableColumn>
         <TableColumn>nama</TableColumn>
         <TableColumn>NO TELEPHONE</TableColumn>
         <TableColumn>ALAMAT</TableColumn>
         <TableColumn>TGL PEMESANAN</TableColumn>
         <TableColumn>ACTION</TableColumn>
       </TableHeader>
       <TableBody>
         {customers.map((list,index)=>(
           <TableRow key={list.id} >
           <TableCell>{index + 1}</TableCell>
           <TableCell>{list.name}</TableCell>
           <TableCell>{list.phoneNumber}</TableCell>
           <TableCell>{list.address}</TableCell>
           <TableCell>{list.createdAt}</TableCell>
           <TableCell>
             <Button >Detail</Button>
           
             <Button onClick={() => deleteData(list.id)} >Hapus</Button>
           </TableCell>
         </TableRow>
         
         ))}
      
       </TableBody>
     </Table>
    )
}

    export default ListCustomers