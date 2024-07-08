import { useEffect, useState } from "react"
import { axiosinstance } from "../lib/axios"
import {Button,Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react"
import { Await } from "react-router-dom"
import { set } from "react-hook-form"
const ListTrans = () => {

    const token = localStorage.getItem("token")
    const [billDetails, setBillDetails] = useState([])
    const [customer,setCustomer] = useState([])
    const [user,setUser] = useState([])

    const getListTrans = async () => {
        try {
            const result = await axiosinstance.get("bills", {
                headers: { Authorization: `Bearer ${token}` }
            })

            setBillDetails(result.data.data[0].billDetails[0])
            setCustomer(result.data.data[0].customer)
            setUser(result.data.data[0].user)

        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getListTrans()
    }, [])

    useEffect(() => {
      console.log()
    })
    return (

        <Table>
       
        <TableHeader>
      
          <TableColumn>CODE-REGIS</TableColumn>
          <TableColumn>JENIS PAKET</TableColumn>
          <TableColumn>HARGA</TableColumn>
          <TableColumn>ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          
            <TableRow  >
           
            <TableCell>{customer.id}</TableCell>
            <TableCell><h1 className="font-semibold text-xl">{customer.name}</h1><p>{billDetails.qty} Transaksi</p></TableCell>

            <TableCell>{billDetails.price}</TableCell>
            <TableCell>
              <Button ><p>Detail Transaksi</p></Button>
             
            </TableCell>
          </TableRow>
          
        
       
        </TableBody>
      </Table>

    )
}

export default ListTrans