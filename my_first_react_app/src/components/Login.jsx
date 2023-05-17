import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Text,
  Input,
  Stack,
  Image,
  Box,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("data"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = () => {
    // console.log(data);
    if (data.email === email && data.password === password) {
      alert("Login sucessfully");
      navigate("/");
    } else {
      alert("Wrong Credentails");
    }
  };
  return (
    <Box bg="#f6f7f8" h="100vh" w="100%">
      <Box border="1px solid rgb(242,245,252)">
        <Stack
          w="35%"
          h="90vh"
          m="auto"
          bg="white"
          alignItems="center"
          justifyContent="center"
          direction={{ base: "column", md: "row" }}>
          <Flex flex={1} mt="30px" justify={"center"}>
            <Stack spacing={3} w={"full"} maxW={"md"}>
              <Flex justifyContent="center">
                <Image
                  w="50%"
                  src="https://id.tmetric.com/images/tmetric_logo_and_text.svg"
                  alt="logo"
                />
              </Flex>

              <Text textAlign="center" fontSize={"3xl"}>
                Log into TMetric
              </Text>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="johnsmit@masaischool.com"
                  onChange={e => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  onChange={e => setPassword(e.target.value)}
                />
              </FormControl>

              <Stack spacing={6}>
                <Button
                  colorScheme={"blue"}
                  variant={"solid"}
                  onClick={handleSignup}>
                  Login
                </Button>{" "}
              </Stack>

              <Text textAlign="center">or</Text>
              <HStack
                border="1px solid rgb(216, 211, 210)"
                borderRadius="4px"
                justifyContent="center"
                p="5px">
                <Image
                  src="https://id.tmetric.com/images/google_logo.svg"
                  alt="icon"
                />
                <Text>Sign Up with Google</Text>
              </HStack>
              <HStack
                border="1px solid rgb(216, 211, 210)"
                borderRadius="4px"
                justifyContent="center"
                p="5px">
                <Image
                  src="https://id.tmetric.com/images/microsoft_logo.svg"
                  alt="icon"
                />
                <Text>Sign Up with Microsoft</Text>
              </HStack>
              <HStack
                border="1px solid rgb(216, 211, 210)"
                borderRadius="4px"
                justifyContent="center"
                p="5px">
                <Image
                  src="https://id.tmetric.com/images/apple_logo.svg"
                  alt="icon"
                />
                <Text>Sign Up with Apple</Text>
              </HStack>
              <HStack>
                <Text mr="-4px"> Have not an account? </Text>
                <NavLink to="/signup">Sign Up</NavLink>
              </HStack>
            </Stack>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}
