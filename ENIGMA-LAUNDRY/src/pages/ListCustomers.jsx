import { useEffect, useState } from "react"
import { axiosinstance } from "../lib/axios"
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Button, Modal } from "@nextui-org/react"
import ModalTrans from "../components/ModalTrans"
import { toast } from "sonner"
import ModalEditeCustomer from "../components/ModalEditeCustomer"
import { useSelector } from "react-redux"

const ListCustomers = () => {

  const token = useSelector(state => state.auth.token)

  
  const [customers, setcustomers] = useState([])
  const [openModal, setOpenModal] = useState()

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

const deletecustomers = async (id)=>{
  try {
    const response = await axiosinstance.delete(`/customers/${id}`,{
      headers :{Authorization:`Bearer ${token}`}
    })
    console.log(response)
    toast.success("sukses delete")
  } catch (error) {
    console.log(error.message)
  }
}

  const isopenModal = () => {
    setOpenModal(true)
  }
  const onCloseModal = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    getListCustomers()
  }, [])

  return (
    <div className="w-full">
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
  {customers.map((list, index) => (
    <TableRow key={list.id} >
      <TableCell>{index + 1}</TableCell>
      <TableCell>{list.name}</TableCell>
      <TableCell>{list.phoneNumber}</TableCell>
      <TableCell>{list.address}</TableCell>
      <TableCell>{list.createdAt}</TableCell>
      <TableCell>
        <Button color="primary"  >PAYMENT</Button>
        <Button color="secondary" onClick={isopenModal}>EDITE</Button>
        <Button color="danger" onClick={() => deletecustomers(list.id)} >DELETE</Button>
      </TableCell>
    </TableRow>
  ))}
  
</TableBody>
</Table>
{/* <ModalTrans isOpen={openModal} onClose={onCloseModal}/> */}
<ModalEditeCustomer isOpen={openModal} onClose={onCloseModal} handleFetchData={getListCustomers}/>
    </div>
  )
}

export default ListCustomers