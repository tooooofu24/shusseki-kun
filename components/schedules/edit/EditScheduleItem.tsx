import { AspectRatio, Box, IconButton } from "@chakra-ui/react";
import { FC } from "react";
import { Schedule } from "../../../types/Schedule";
import { ScheduleItemContent } from "../ScheduleItemContent";
import { PlusButton } from "./PlusButton";
import { DeleteButton } from "./DeleteButton";
import { Period } from "../../../types/Period";
import { Day } from "../../../types/Day";

type props = {
  schedule?: Schedule;
  period: Period;
  day: Day;
};
export const EditScheduleItem: FC<props> = ({ schedule, period, day }) => {
  return (
    <Box p={2}>
      {schedule ? (
        <Box position="relative">
          <AspectRatio ratio={1} color="gray.400">
            <ScheduleItemContent schedule={schedule} />
          </AspectRatio>
          <Box position="absolute" top="5%" right="5%">
            <DeleteButton schedule={schedule} />
          </Box>
        </Box>
      ) : (
        <AspectRatio ratio={1}>
          <Box>
            <PlusButton period={period} day={day} />
          </Box>
        </AspectRatio>
      )}
    </Box>
  );
};
