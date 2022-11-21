import { useToast } from "@chakra-ui/react";

export const useCustomToast = () => {
  const toast = useToast();
  const showToast = (
    message: string,
    status: "success" | "warning" | "error"
  ) => {
    toast({
      title: "",
      description: message,
      status,
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };
  return { showToast };
};
