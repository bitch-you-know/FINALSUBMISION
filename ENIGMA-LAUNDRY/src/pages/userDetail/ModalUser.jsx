import { Modal, ModalBody, ModalHeader } from "@nextui-org/react"

const ModalUser =({isOpenUser,onCloseUser})=>{
    return(
        <div>
               <Modal isOpen={isOpenUser} onOpenChange={onCloseUser}> 
                    <ModalHeader>hahaha</ModalHeader>
                    <ModalBody>
                           <table>
                              <tr>
                                <th>NO</th>
                                <th>Name</th>
                                <th>NO TELEPHONE</th>
                                <th>ALAMAT</th>
                                <th>REGIS DATE</th>
                              </tr>
                              <tr>
                                 <td>d</td>
                                 <td>d</td>
                                 <td>d</td>
                                 <td>d</td>
                                 <td>d</td>
                              </tr>
                           </table>
                    </ModalBody>
               </Modal>
        </div>
    )
}
export default ModalUser