import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { axiosinstance } from "../../lib/axios";
import { useEffect, useState } from "react";

const ModalTrans = ({ isOpen, onClose }) => {
  const token = localStorage.getItem("token");
  const [state, setState] = useState([]);

  const getDetail = async () => {
    try {
      const result = await axiosinstance.get("bills", {
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log(result.data.data);
      setState(result.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (isOpen) {
      getDetail();
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        <ModalHeader>Detail Transaksi</ModalHeader>
        <ModalBody>
          {state.map((detail, index) => (
            <div key={index}>
              <p>ID: {detail.id}</p>
              <p>Customer: {detail.customer.name}</p>
              <p>Price: {detail.billDetails[0].price}</p>
              {/* Tambahkan informasi lainnya sesuai kebutuhan */}
            </div>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalTrans;