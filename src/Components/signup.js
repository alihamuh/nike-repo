import React from "react";
import { Flex, Text, Button } from "rebass";

export default function SignUp(props) {
  return (
    <Flex
      width="100%"
      height="100vh"
      bg="white"
      justifyContent="center"
      //alignItems="center"
    >
      <Flex
        width="100%"
        m={4}
        bg="dashboard"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text variant="title" fontSize={6}>
          {"Log In".toUpperCase()}
        </Text>
        <Button
          mt={4}
          width="300px"
          fontSize={5}
          onClick={() => {
            props.loggedIn(true); //props.loggedIn(false);
          }}
          variant="borderButton"
        >
          Log In with Discord
        </Button>
      </Flex>
    </Flex>
  );
}
