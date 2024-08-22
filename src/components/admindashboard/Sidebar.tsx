import {
  Box,
  useColorModeValue,
  Flex,
  CloseButton,
  Text,
  BoxProps,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaDoorOpen } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import NavItem from "./NavItem";
interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: LinkItemProps[] = [
  { name: "Home", icon: FiHome },
  { name: "Leave Request", icon: FaDoorOpen },
];

interface props extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: props) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="xl" fontFamily="monospace" fontWeight="bold">
          Employee Leave management
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
export default SidebarContent;
