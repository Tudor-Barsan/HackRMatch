import React, { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { CheckIcon } from '@chakra-ui/icons'

export function LoginSuccess() {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 1000);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CheckIcon boxSize={50}></CheckIcon>
      <Text fontSize='sm'>Login successful!</Text>
    </div>
  )
}

export default LoginSuccess;