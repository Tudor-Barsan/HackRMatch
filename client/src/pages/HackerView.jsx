import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import axios from 'axios'
import { useAuthContext } from '../hooks/useAuthContext.js'
import { Navigate } from "react-router";

import UserCard from "../components/UserCard.jsx";
import Navbar from "../components/Navbar.jsx";


const ListPage = () => {
  const [matches, setMatches] = useState(null)
  const { user } = useAuthContext()

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
        console.log(response.data)
        console.log(response.data[0].possibleMatches)
      }
    }

    fetchMatches()
  }, [])

  return (
    <> 
    <Navbar />
      {(user) ? 
      (matches) ? 
      <Flex direction="column" padding="5" background="linear-gradient(270deg, #0e0013 0%, #3a122e 74%)">
          <Heading
            fontSize="35px"
            color="#e4e4e4"
            marginBottom="10" 
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            Your Top Matches
          </Heading>
          {matches.map((match) => (
            <Box
              key={match._id}
              borderRadius="md"
              borderWidth="1px"
              padding="10"
              marginBottom="4"
              boxShadow="lg"
            >
              <UserCard 
                fullName={match.fullName} 
                pronouns={match.pronouns}
                mySkills={match.mySkills}
                image={match.image}
                wantedSkills={match.wantedSkills}
                interests={match.interests}
                location={match.location}
                website={match.website}
              />
            </Box>
          ))}
        </Flex>
        : <div>No matches found</div>
    : <Navigate to='/'></Navigate>} </>
  );
};

export default ListPage;
