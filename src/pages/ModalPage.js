import Modal from "../components/Modal";
import Button from "../components/Buttons";
import { useState } from "react";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const modal = (
    <Modal
      onClose={handleClose}
      actionBar={
        <Button onClick={handleClose} primary>
          I Accept
        </Button>
      }
    >
      <p>This agreement must be accepted</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      {/* if showModal is true then display Modal component */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
        cumque itaque, ipsa in fuga, a dignissimos pariatur, dolorem saepe illum
        dicta perspiciatis quos. Repellat totam impedit adipisci ullam delectus!
      </p>
    </div>
  );
};

export default ModalPage;
