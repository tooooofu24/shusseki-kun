import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Router from "next/router";
import { House, List, UserPlus } from "phosphor-react";
import React, { FC, ReactNode } from "react";

export const DrawerButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton icon={<List />} aria-label="メニュー" onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody py={30} px={0}>
            <Item onClose={onClose} icon={<House size={20} />} href="/">
              ホーム
            </Item>
            <Item
              onClose={onClose}
              icon={<UserPlus size={20} />}
              href="/classroom/create"
            >
              クラス新規登録
            </Item>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

type props = {
  children: ReactNode;
  href: string;
  onClose: () => void;
  icon: ReactNode;
};
const Item: FC<props> = ({ children, onClose, href, icon }) => {
  const onClick = () => {
    Router.push(href);
    onClose();
  };
  const isActive = location.pathname === href;
  return (
    <Box
      width="full"
      px="20px"
      py="20px"
      bg="white"
      textColor="teal.500"
      fontWeight="bold"
      cursor="pointer"
      _hover={{ bg: "teal.500", textColor: "white" }}
      {...(isActive && { bg: "teal.500", textColor: "white" })}
      onClick={onClick}
    >
      <Flex alignItems="center" gap="20px">
        {icon} {children}
      </Flex>
    </Box>
  );
};
