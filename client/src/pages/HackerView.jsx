import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import axios from 'axios'

import UserCard from "../components/UserCard.jsx";


const ListPage = () => {
  const [matches, setMatches] = useState(null)

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await axios.get('http://localhost:8080/profile/matches', {
        withCredentials: true
      })
      .catch((err) => {
        console.log(err)
      })

      if (response && response.data) {
        setMatches(response.data)
      }
    }

    fetchMatches()
  }, [])

  return (
    <> 
    <UserCard />
      {(matches) ? 
    <Flex direction="column" padding="5">
        <Heading marginBottom="5">List of Matches</Heading>
        {matches.map((match) => (
          <Box
            key={match._id}
            borderRadius="md"
            borderWidth="1px"
            padding="5"
            marginBottom="4"
            boxShadow="lg"
          >
            <Heading size="md">{match.fullName}</Heading>
            <Text>{match.bio}</Text>
          </Box>
        ))}
      </Flex>
      : <div>No matches found</div>
    } </>
  );
};

export default ListPage;
