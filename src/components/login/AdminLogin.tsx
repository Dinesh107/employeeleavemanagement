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
} from "@chakra-ui/react";

const AdminLogin = () => {
  return (
    <>
      <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
        <Flex>
          <Show above={"md"}>
            <iframe
              className="gif"
              src="https://embed.lottiefiles.com/animation/9573"
              title="a2"
              width="900"
              height="600"
            ></iframe>
          </Show>
        </Flex>
        <Flex p={8} flex={1} align="center" justifyContent="center">
          <Stack spacing={4}>
            <Stack align="center">
              <Heading fontSize="2xl">ADMIN LOGIN</Heading>
            </Stack>
            <VStack
              as="form"
              spacing={8}
              boxSize={{ base: "xs", sm: "sm", md: "md" }}
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
              </VStack>
            </VStack>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
};

export default AdminLogin;
//  <iframe
//    src="https://embed.lottiefiles.com/animation/93794"
//    className="gif"
//    title="a4"
//    width={"800"}
//    height={"600"}
//  ></iframe>;
