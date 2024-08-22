import {
  Stack,
  Flex,
  Heading,
  VStack,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Link,
  Button,
  Show,
  Box,
  HStack,
} from "@chakra-ui/react";
import { link } from "fs";

const EmployeeLogin = () => {
  return (
    <>
      <Stack
        minH="100vh"
        minW={"100wh"}
        direction={{ base: "column", md: "row" }}
      >
        <Box margin={"auto"}>
          <Show above={"md"}>
            <iframe
              src="https://embed.lottiefiles.com/animation/93794"
              className="gif"
              title="a4"
              width={"800"}
              height={"600"}
            ></iframe>
          </Show>
        </Box>
        <Flex p={8} paddingLeft={100} align="center" justifyContent="center">
          <Stack spacing={4}>
            <Stack align="center">
              <Heading fontSize="2xl">EMPLOYEE LOGIN</Heading>
            </Stack>
            <VStack
              as="form"
              spacing={8}
              boxSize={{ base: "xs", sm: "sm", md: "lg" }}
              h="max-content !important"
              bg={useColorModeValue("white", "gray.700")}
              rounded="lg"
              boxShadow="lg"
              p={{ base: 5, sm: 10 }}
            >
              <VStack spacing={4} w="100%">
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input rounded="md" type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input rounded="md" type="password" />
                </FormControl>
              </VStack>
              <VStack w="100%">
                <Stack direction="row" justifyContent="space-between" w="100%">
                  <Checkbox colorScheme="green" size="md">
                    Remember me
                  </Checkbox>
                  <Link fontSize={{ base: "md", sm: "md" }}>
                    Forgot password?
                  </Link>
                </Stack>

                <Button
                  bg="green.300"
                  color="white"
                  _hover={{
                    bg: "green.500",
                  }}
                  rounded="md"
                  w="100%"
                >
                  Sign in
                </Button>
                <Button variant={"link"} mt={3}>
                  Sign up
                </Button>
              </VStack>
            </VStack>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
};
export default EmployeeLogin;
