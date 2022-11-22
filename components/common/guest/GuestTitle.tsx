import { Text, TextProps } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type props = {
  children: ReactNode;
} & TextProps;
export const GuestTitle: FC<props> = ({ children, ...props }) => {
  return (
    <Text
      fontWeight="bold"
      color="teal.500"
      fontSize="xl"
      mb={5}
      textAlign="center"
      {...props}
    >
      {children}
    </Text>
  );
};
