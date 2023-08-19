import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const ListPage = () => {
  const items = [
    { title: "Item 1", description: "Description for Item 1" },
    { title: "Item 2", description: "Description for Item 2" },
    { title: "Item 3", description: "Description for Item 3" },
    // Add more items as needed
  ];

  return (
    <Flex direction="column" padding="5">
      <Heading marginBottom="5">List of Items</Heading>
      {items.map((item, index) => (
        <Box
          key={index}
          borderRadius="md"
          borderWidth="1px"
          padding="5"
          marginBottom="4"
          boxShadow="lg"
        >
          <Heading size="md">{item.title}</Heading>
          <Text>{item.description}</Text>
        </Box>
      ))}
    </Flex>
  );
};

export default ListPage;
