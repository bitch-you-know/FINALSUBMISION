import React from 'react';

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button,Input,Checkbox,Link, Divider } from '@nextui-org/react';

const ModalKomplit = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">TRANSAKSI BARU</ModalHeader>
            
            <ModalBody>
              <Input
                autoFocus
               
                label="Nama Custemer"
                variant="bordered"
              />
              <Input
               
                label="Berat (KG)"
                variant="bordered"
                type='number'
              />
             
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" onPress={onClose}>
               Tambah Orderan
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalKomplit;
