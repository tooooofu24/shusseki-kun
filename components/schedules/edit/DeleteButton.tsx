import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Plus, X } from "phosphor-react";
import { useDeleteSchedule } from "../../../hooks/Schedule";
import { Schedule } from "../../../types/Schedule";

type props = {
  schedule: Schedule;
};
export const DeleteButton = ({ schedule }: props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteSchedule } = useDeleteSchedule();
  const router = useRouter();
  const toast = useToast();

  const onClick = async () => {
    deleteSchedule(schedule);
    router.push("/schedules/edit");
    onClose();
    toast({
      title: "",
      description: "時間割を削除しました！",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <>
      <IconButton
        colorScheme="red"
        size="sm"
        icon={<X />}
        aria-label="削除"
        rounded="full"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>時間割を削除</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {schedule.dayJa}曜{schedule.period}時間目の
            {schedule.course.subject.name}の授業を削除します。
            <br />
            よろしいですか？
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              キャンセル
            </Button>
            <Button colorScheme="red" onClick={onClick}>
              削除
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};