"use client";

import React from "react";
import { CarProps } from "@/types";
import { Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child>
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
