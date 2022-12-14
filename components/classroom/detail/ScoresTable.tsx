import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { Score } from "../../../types/Score";
import {
  calculateAttendanceRate,
  calculateEvaluation,
  calculateValue,
} from "../../../utils/calculate";

type props = {
  scores: Score[];
};
export const ScoreTable: FC<props> = ({ scores }) => {
  return (
    <TableContainer>
      <Table size={["sm", "md"]}>
        <Thead>
          <Tr>
            <Th>出席番号</Th>
            <Th>氏名</Th>
            <Th>出席率</Th>
            <Th>知識・技能</Th>
            <Th>思考力・判断力・表現力</Th>
            <Th>主体的に取り組む態度</Th>
            <Th>評定</Th>
          </Tr>
        </Thead>
        <Tbody>
          {scores.map((score) => {
            return (
              <Tr key={score.student.id}>
                <Td>{score.student.number}</Td>
                <Td>{score.student.name}</Td>
                <Td>{calculateAttendanceRate(score.attendanceRate)}</Td>
                <Td>{calculateValue(score.knowledgeAverage)}</Td>
                <Td>{calculateValue(score.expressionAverage)}</Td>
                <Td>{calculateValue(score.attitudeAverage)}</Td>
                <Td>{calculateEvaluation(score)}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
