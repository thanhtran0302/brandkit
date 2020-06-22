import React, { FC, useState, Fragment, ReactNode } from 'react';
import {
  Layout,
  Background,
  ModalContent,
  ModalTitle,
  CloseWrapper,
  SubTitle
} from './Modal.styles';
import Close from '../../assets/icons/close.svg';

interface ModalProps {
  title: string;
  closeModal(): void;
  subtitle?: string;
}

export interface CreateModalProps {
  title: string;
  content: ReactNode;
  subtitle?: string;
}

const Modal: FC<ModalProps> = ({ title, closeModal, children, subtitle }) => (
  <Fragment>
    <Background onClick={() => closeModal()} />
    <Layout>
      <CloseWrapper>
        <Close onClick={() => closeModal()} />
      </CloseWrapper>
      <ModalTitle>{title}</ModalTitle>
      <SubTitle>{subtitle}</SubTitle>
      <ModalContent>{children}</ModalContent>
    </Layout>
  </Fragment>
);

const useModal = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  const toggleModal = () => setOpen(!isOpen);

  const createModal = ({ title, content, subtitle }: CreateModalProps) => (
    <Fragment>
      {isOpen && (
        <Modal
          title={title}
          closeModal={closeModal}
          children={content}
          subtitle={subtitle}
        />
      )}
    </Fragment>
  );

  return {
    isOpen,
    closeModal,
    openModal,
    toggleModal,
    createModal
  };
};

export default useModal;
