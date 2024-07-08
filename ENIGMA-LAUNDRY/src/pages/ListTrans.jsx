import { useEffect, useState } from "react"
import { axiosinstance } from "../lib/axios"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"
const ListTrans = () => {

    const token = localStorage.getItem("token")
    const [trans, setTrans] = useState([])

    const getListTrans = async () => {
        try {
            const result = await axiosinstance.get("bills", {
                headers: { Authorization: `Bearer ${token}` }
            })

            setTrans(result.data.data[0])
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getListTrans()
    }, [])

    useEffect(() => {
        console.log(trans)
    })
    return (


        <Table>

            <TableHeader>
                <TableColumn>NO</TableColumn>
                <TableColumn>CODE-REGIS</TableColumn>
            </TableHeader>
            <TableBody>

              
                 <TableRow >
                 <TableCell>{trans.id}</TableCell>
                 <TableCell></TableCell>
             </TableRow>
             


            </TableBody>
        </Table>

    )
}

export default ListTrans