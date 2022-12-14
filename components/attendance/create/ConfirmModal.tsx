import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";
import { useRouter } from "next/router";
import { Check, X } from "phosphor-react";
import { FC, Suspense, useState } from "react";
import { useClassroom } from "../../../hooks/Classroom";
import { useCourse } from "../../../hooks/Course";
import { useCreateCourseLog } from "../../../hooks/CourseLog";
import { AttendanceForm } from "../../../utils/form/AttendanceForm";

type props = {
  isOpen: boolean;
  onClose: () => void;
  data: AttendanceForm;
};
export const ConfirmModal: FC<props> = ({ isOpen, onClose, data }) => {
  const { createCourseLog, isLoading } = useCreateCourseLog();
  const router = useRouter();
  const toast = useToast();
  const [error, setError] = useState("");

  const onClick = async () => {
    try {
      const { courseId, date, period, attendances } = data;
      await createCourseLog({
        courseId,
        date,
        period,
        attendances: attendances.map((attendance) => {
          const { attend, knowledge, expression, attitude, comment } =
            attendance;
          return {
            studentId: attendance.student.id,
            attend,
            knowledge: knowledge!,
            expression: expression!,
            attitude: attitude!,
            comment,
          };
        }),
      });
      router.push("/");
      toast({
        title: "",
        description: "出欠を登録しました！",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (e: any) {
      setError(e.message);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="4xl"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>出欠の登録</ModalHeader>
        <ModalCloseButton />
        <Box px={6}>以下の内容で登録します。よろしいですか？</Box>
        <ModalBody>
          <ConfirmTable data={data} />
        </ModalBody>
        <ModalFooter flexWrap="wrap">
          {error && (
            <Alert status="error" mb={2}>
              <AlertIcon />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button variant="ghost" colorScheme="gray" mr={2} onClick={onClose}>
            キャンセル
          </Button>
          <Button isLoading={isLoading} onClick={onClick}>
            出欠を登録
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

type ConfirmTableProps = {
  data: AttendanceForm;
};
const ConfirmTable: FC<ConfirmTableProps> = ({ data }) => {
  return (
    <>
      <TableContainer>
        <Table size={["sm", "md"]}>
          <TableCaption placement="top">授業情報</TableCaption>
          <Thead>
            <Tr>
              <Th>クラス</Th>
              <Th>日付</Th>
              <Th>時限</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Suspense fallback={<></>}>
                  <ReturnClassRoomName id={data.courseId} />
                </Suspense>
              </Td>
              <Td>
                {format(new Date(data.date), "yyyy年M月d日(E)", { locale: ja })}
              </Td>
              <Td>{data.period}時間目</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <TableContainer>
        <Table size={["sm", "md"]}>
          <TableCaption placement="top">生徒情報</TableCaption>
          <Thead>
            <Tr>
              <Th>番号</Th>
              <Th>氏名</Th>
              <Th>出欠</Th>
              <Th>知識・技能</Th>
              <Th>思考力・判断力・表現力</Th>
              <Th>主体的に学習に取り組む態度</Th>
              <Th>コメント</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.attendances?.map((attendance, i) => {
              return (
                <Tr key={i}>
                  <Td>{attendance.student.number}</Td>
                  <Td>{attendance.student.name}</Td>
                  <Td>
                    <Flex justifyContent="center">
                      {attendance.attend ? (
                        <Box color="teal.500">
                          <Check />
                        </Box>
                      ) : (
                        <Box color="red.500">
                          <X />
                        </Box>
                      )}
                    </Flex>
                  </Td>
                  <Td>{convert(attendance.knowledge)}</Td>
                  <Td>{convert(attendance.expression)}</Td>
                  <Td>{convert(attendance.attitude)}</Td>
                  <Td>{attendance.comment}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

const convert = (s?: number | string | null) => {
  if (s == 3) {
    return "A";
  }
  if (s == 2) {
    return "B";
  }
  if (s == 1) {
    return "C";
  }
  return "なし";
};

const ReturnClassRoomName = ({ id }: { id: number }) => {
  const { course } = useCourse(id);
  return (
    <>
      {course.classroom.grade}年{course.classroom.name}組
    </>
  );
};
