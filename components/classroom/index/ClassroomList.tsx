import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tag,
} from "@chakra-ui/react";
import { CaretRight } from "phosphor-react";
import { useClassrooms } from "../../../hooks/Classroom";
import { Classroom } from "../../../types/Classroom";
import { useRouter } from "next/router";
import { Tile } from "../../common/Tile";
import { CommonError } from "../../common/error/CommonError";
import { formatDate } from "../../../utils/time";

export const ClassroomList = () => {
  const { classrooms } = useClassrooms();

  return !classrooms?.length ? (
    <Tile>
      <CommonError message="クラスのデータがありません" />
    </Tile>
  ) : (
    <Tile>
      <TableContainer>
        <Table size={["sm", "md"]}>
          <Thead>
            <Tr>
              <Th>クラス</Th>
              <Th>担任</Th>
              <Th>人数</Th>
              <Th>授業</Th>
              <Th>最終授業日</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {classrooms?.map((classroom) => {
              return <Row key={classroom.id} classroom={classroom} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Tile>
  );
};

const Row = ({ classroom }: { classroom: Classroom }) => {
  const router = useRouter();
  return (
    <Tr
      _hover={{ bg: "gray.50" }}
      cursor="pointer"
      onClick={() => router.push("/classrooms/" + classroom.id)}
    >
      <Td>
        {classroom.grade}年{classroom.name}組
      </Td>
      <Td>{classroom.teacher}</Td>
      <Td>{classroom.studentsCount}人</Td>
      <Td>
        <Flex gap="10px" justifyContent="center">
          {!classroom.courses?.length && (
            <Tag
              colorScheme="gray"
              shadow="none"
              variant="outline"
              color="chakra-body-text"
            >
              なし
            </Tag>
          )}
          {classroom.courses?.map((course) => {
            return <Tag key={course.id}>{course.subject.name}</Tag>;
          })}
        </Flex>
      </Td>
      <Td>{formatDate(classroom.lastLessonDate) || "-"}</Td>
      <Td>
        <Flex justifyContent="end" alignItems="center">
          <CaretRight />
        </Flex>
      </Td>
    </Tr>
  );
};
