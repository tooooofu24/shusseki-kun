import { Box, Flex, Text } from "@chakra-ui/react";
import { DotsThree, Student, UsersThree } from "phosphor-react";
import { Card } from "../../common/Card";
import Router from "next/router";
import { TimeSplotButton } from "./TimeSlotButton";

export const TimeSlotItem = () => {
  return (
    <Card
      width="160px"
      height="85px"
      onClick={() => Router.push("/attendances/1/create")}
    >
      <Flex justifyContent="space-between" flexDirection="column" height="full">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold" fontSize="17px">
            1年1組
          </Text>
          <TimeSplotButton />
        </Flex>
        <Flex width="full" color="gray.500" gap="5px">
          <Flex alignItems="center">
            <UsersThree size={15} />
            <Text fontSize="12px">33人</Text>
          </Flex>
          <Flex alignItems="center">
            <Student size={15} />
            <Text fontSize="12px">石田京楓</Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
