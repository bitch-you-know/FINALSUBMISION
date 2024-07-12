import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { axiosinstance } from "../lib/axios"
import { useEffect } from "react"
import { Controller, useForm } from 'react-hook-form';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Checkbox, Link, Divider } from '@nextui-org/react';
import { toast } from "sonner";



const ModalEditeCustomer =({isOpen,onClose,handleFetchData})=>{


    const form=useForm({
        defaultValues :{
            name : "",
            phoneNumber:"",
            address :""
    
        }
    })
    
    
    
     const token =localStorage.getItem("token")
     
    const resultSubmit = async (data)=>{
        try {
            // const response = await axiosinstance.put("/customers",data,{
            //     headers :{ Authorization :`Bearer ${token}`}
            // })
            // console.log(response)
            // handleFetchData()
            // toast.success("Update transaksi")
            console.log(data)
    
        } catch (error) {
            console.log(error.message)
        }
    }
    
    
        return(
              <div>
                 <Modal isOpen={isOpen} onOpenChange={onClose}>
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
                              label="Nama"
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
                              label="PhoneNumber"
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
                              label="Alamat"
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
        )
    }
    export default ModalEditeCustomer