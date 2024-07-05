import React from 'react';

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';

const ModalKomplit = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        <ModalHeader>sadsadsadsale</ModalHeader>
        <ModalBody>
          <p>anjing banget.</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} color="secondary">Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalKomplit;
