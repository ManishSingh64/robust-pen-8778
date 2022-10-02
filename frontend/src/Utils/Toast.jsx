import { useToast } from "@chakra-ui/react";

export const Toast = ({ title, desc, status }) => {
  const toast = useToast();
  return toast({ 
    title: { title },
    description: { desc },
    status: { status },
    duration: 5000,
    isClosable: true,
  });
};
