import React from 'react'
import { 
  Flex,
  Card, 
  CardBody, 
  Image,
  Text,
} from '@chakra-ui/react'

import { FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa";

const UserCard = (props) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: "linear-gradient(270deg, #0e0013 0%, #3a122e 74%)"
    }}>
      <Card 
        maxW='sm' 
        direction="row"
        width="55%"
        height="20%"
        textColor="#05231B"
        background="#D1C8E1"
        boxShadow='0px 4px 8px rgba(0, 0, 0, 0.1)'
        borderRadius="25px"
      >
        <CardBody paddingLeft="30px" paddingBottom="10px">
          <Flex direction='column' justifyContent="center" alignItems="center">
            <Text fontSize="20px" lineHeight="15px" margin="30px 0px 0px 0px">
              {props.fullName}
            </Text>
            <Text fontSize="15px" lineHeight="10px">
              {props.pronouns}
            </Text>
            <Image
              width={"200px"}
              height={"200px"}
              src={props.image}
              alt='Profile Picture'
              borderRadius='30px'
            />
          </Flex>
        </CardBody>
        <Flex direction='column' justifyContent="center">
          <Text fontSize="15px" lineHeight="15px" margin="30px 0px 0px 30px">
            {`My Skills: ${props.mySkills}`}
          </Text>
          <Text fontSize="15px" lineHeight="15px" margin="30px 0px 0px 30px">
            {`Skills Looking For: ${props.wantedSkills}`}
          </Text>
          <Text fontSize="15px" lineHeight="15px" margin="30px 0px 0px 30px">
            {`Interests: ${props.interests}`}
          </Text>
          <Flex direction="row" gap="10px">
            <Flex direction="column">
              <Text fontSize="15px" lineHeight="15px" margin="30px 0px 0px 30px">
                {`Location: ${props.location}`}
              </Text>
              <Text fontSize="15px" lineHeight="15px" margin="30px 0px 20px 30px">
                {`Website: ${props.website}`}
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fontSize="15px" lineHeight="15px" margin="30px 0px 0px 30px">
                <FaEnvelope style={{ marginRight: '8px' }} />
                {`Email: ${props.email}`}
              </Text>
              <Text fontSize="15px" lineHeight="15px" margin="15px 0px 0px 30px">
                <FaInstagram style={{ marginRight: '8px' }} />
                {`Instagram: @${props.instagram}`}
              </Text>
              <Text fontSize="15px" lineHeight="15px" margin="15px 0px 20px 30px">
                <FaDiscord style={{ marginRight: '8px' }} />
                {`Discord: ${props.discord}`}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </div>
  )
}

export default UserCard