import React, { FC, useState, Fragment, ReactNode, useEffect } from 'react';
import {
  Layout,
  Background,
  ModalContent,
  ModalTitle,
  CloseWrapper,
  SubTitle,
  ChildrenContainer
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

export interface UseModalProps {
  isOpen: boolean;
  closeModal(): void;
  openModal(): void;
  toggleModal(): void;
  createModal(props: CreateModalProps): JSX.Element | null;
}

const Modal: FC<ModalProps> = ({ title, closeModal, children, subtitle }) => {
  const onKeydown = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  return (
    <Fragment>
      <Background onClick={() => closeModal()} />
      <Layout>
        <CloseWrapper>
          <Close onClick={() => closeModal()} />
        </CloseWrapper>
        <ChildrenContainer>
          <ModalTitle>{title}</ModalTitle>
          <SubTitle>{subtitle}</SubTitle>
          <ModalContent>{children}</ModalContent>
        </ChildrenContainer>
      </Layout>
    </Fragment>
  );
};

const useModal = (): UseModalProps => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const openModal = (): void => setOpen(true);

  const closeModal = (): void => setOpen(false);

  const toggleModal = (): void => setOpen(!isOpen);

  const createModal = ({
    title,
    content,
    subtitle
  }: CreateModalProps): JSX.Element | null =>
    isOpen ? (
      <Modal
        title={title}
        closeModal={closeModal}
        children={content}
        subtitle={subtitle}
      />
    ) : (
      <Fragment />
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
