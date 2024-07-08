import { Modal, ModalContent, Table, TableHeader, TableCell, TableColumn, TableRow } from "@nextui-org/react"
import { axiosinstance } from "../../lib/axios"
import { useEffect, useState } from "react"

const ModalTrans = () => {

   const token = localStorage.getItem("token")
   const [state,setState]=useState([])

   const getdetail =async ()=>{
    try {
         const result = await axiosinstance.get("bills", {
            headers: { Authorization: `Bearer ${token}` }
        })

         console.log(result.data.data)
         setState(result.data.data)

    } catch (error) {
        console.log(error.massage)
    }
   }
useEffect(()=>{
    getdetail()
},[])


    return (
        <div>
            
                   <h1>d</h1>
               
          
        </div>
    )
}

export default ModalTrans