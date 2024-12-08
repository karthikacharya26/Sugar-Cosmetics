import {
  Box,
  Flex,
  Img,
  Text,
  Input,
  Button,
  VStack,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/Login/actions";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toast = useToast();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await axios.post(
        `https://sugar-cosmetics.onrender.com/user/register`,
        {
          name: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.status === 201) {
        toast({
          title: "Account created",
          description: `Congratulations ${formData.username}, you are registered!`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        const obj = { email: formData.email, password: formData.password };
        dispatch(loginUser(obj));

        const isAuthUser = { isAuth: true, data: formData.username };

        localStorage.setItem("user", JSON.stringify(isAuthUser));
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
      navigate("/")
    } catch (error) {
      console.error("Error creating account:", error);
      toast({
        title: "Error",
        description:
          error.response?.data?.message ||
          "An error occurred while creating your account.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Flex>
        {/* First Box */}
        <Box w={"40%"}>
          <Img src="https://media.sugarcosmetics.com/upload/authSIe2.jpg" />
        </Box>

        {/* Second Box with Background Image */}
        <Box
          w={"60%"}
          bgImage="url('https://media.sugarcosmetics.com/upload/loginPageBackGroundTexture.png')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            h="100%"
          >
            <VStack
              spacing={4}
              bg="rgba(255, 255, 255, 0.7)"
              p={4}
              borderRadius="md"
              boxShadow="lg"
              w={"60%"}
            >
              <Text fontSize="lg" fontWeight="bold">
                Sign Up
              </Text>

              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </FormControl>

              <FormControl id="confirmPassword" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                />
              </FormControl>

              <Button
                bgColor={'black'}
                color={'white'}
                w="full"
                onClick={handleSubmit}
                size="sm"
              >
                Register
              </Button>

              <Box>
                <Text my={4}>Already Registered?</Text>
                <Login />
              </Box>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Signup;
