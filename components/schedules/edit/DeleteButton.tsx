import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { X } from "phosphor-react";
import { useState } from "react";
import { useDeleteSchedule } from "../../../hooks/Schedule";
import { isSmartPhoneScreen } from "../../../styles/Responsive";
import { Schedule } from "../../../types/Schedule";

type props = {
  schedule: Schedule;
};
export const DeleteButton = ({ schedule }: props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteSchedule, isLoading } = useDeleteSchedule();
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const toast = useToast();

  const onClick = async () => {
    try {
      await deleteSchedule(schedule);
      router.push("/schedules/edit", undefined, { scroll: false });
      onClose();
      toast({
        title: "",
        description: "時間割を削除しました！",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (e: any) {
      setError(e?.message || "不明のエラー");
    }
  };

  return (
    <>
      <IconButton
        colorScheme="red"
        size={isSmartPhoneScreen() ? "xs" : "sm"}
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
            {error && (
              <Alert status="error" mt={2}>
                <AlertIcon />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" colorScheme="gray" onClick={onClose} mr={2}>
              キャンセル
            </Button>
            <Button colorScheme="red" onClick={onClick} isLoading={isLoading}>
              削除
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
