import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Img,
  Select,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { ERROR, IS_LOADING, NO_LOADING } from "../redux/Loading/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Products = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.loading);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      dispatch({ type: IS_LOADING });

      const resp = await axios.get(
        `https://sugar-cosmetics.onrender.com/product?category=${category}`
      );

      setData(resp.data.data);
      setSortedData(resp.data.data);

      dispatch({ type: NO_LOADING });
    } catch (error) {
      console.log("Error in Fetching");
      dispatch({ type: ERROR });
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "ltoh") {
      const sorted = [...data].sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
      setSortedData(sorted);
    } else if (value === "htol") {
      const sorted = [...data].sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
      setSortedData(sorted);
    }
  };
  return (
    <Box>
      <Navbar />

      <Box mt={"20px"} ml={"20px"}>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Lips</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Lipstick</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#" fontWeight={"bold"}>
              Transferproof Lipsticks
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>

      <Box>
        <SimpleGrid gridTemplateColumns={["1fr", "1fr", "1fr 2fr", ".7fr 3fr"]}>
          <SimpleGrid mb={5} p={10} alignContent={"start"}>
            <Text
              fontSize={"12px"}
              fontWeight={400}
              color={"rgb(102, 102, 102)"}
              mb={"20px"}
            >
              Filters
            </Text>
            <Select
              variant="outline"
              placeholder="Choose"
              outline={"1px solid rgba(0,0,0,0.4)"}
              borderRadius={"none"}
              cursor={"pointer"}
              onChange={handleChange}
            >
              <option value="ltoh">Price: Low To High</option>
              <option value="htol">Price: High To Low</option>
            </Select>
          </SimpleGrid>

          {loading ? (
            <Flex justifyContent="center" alignItems="center" minH="60vh">
              <Spinner />
            </Flex>
          ) : (
            <SimpleGrid
              gridTemplateColumns={[
                "repeat(2,1fr)",
                "repeat(2,1fr)",
                "repeat(3,1fr)",
                "repeat(4,1fr)",
              ]}
              p={[5, 5, 8, 20]}
              pt={[2, 2, 2, 2]}
              gap={12}
              alignItems={"end"}
            >
              {(sortedData.length ? sortedData : data)?.map((elem) => (
                <SimpleGrid cursor={"pointer"} key={elem._id}>
                  <Box onClick={() => handleClick(elem._id)}>
                    <Img src={elem.images[0]} alt="Image" />
                  </Box>
                  <Text mt={8} fontWeight={700} fontSize={"12px"}>
                    {elem.title}
                  </Text>
                  <Text
                    mb={2}
                    fontWeight={400}
                    fontSize={["13px", "13px", "14px", "14px"]}
                    _hover={{ textDecoration: "underline" }}
                    overflow={"hidden"}
                    h={"40px"}
                    onClick={() => handleClick(elem._id)}
                  >
                    {elem.description}
                  </Text>
                  <Text fontWeight={400} fontSize={"16px"}>
                    ₹{elem.price}
                  </Text>
                </SimpleGrid>
              ))}
            </SimpleGrid>
          )}
        </SimpleGrid>
      </Box>

      <Footer />
    </Box>
  );
};

export default Products;
