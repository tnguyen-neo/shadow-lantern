"use client";

import { Plus } from "react-feather";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";
import PrioritySelection from "./prioritySelection";

export default function AddTodo() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button isIconOnly color="primary" size="sm" radius="sm" onPress={onOpen}>
        <Plus />
      </Button>

      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add a task
              </ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  isClearable
                  variant="underlined"
                  type="email"
                  label="Title"
                  placeholder=" "
                />
                <Textarea
                  variant="flat"
                  label="Description"
                  labelPlacement="outside"
                />
                <div className="flex justify-end gap-1">
                  <PrioritySelection />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  size="sm"
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button size="sm" color="primary" onPress={onClose}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
