import React from "react";
import { Button, Flex, Image } from "rebass";
export default function (props) {
  return (
    <Flex
      flexDirection="row"
      px={3}
      justifyContent="center"
      alignItems="center"
      sx={{ ":hover": { bg: "#cecbca54" } }}
    >
      <Image src={props.link} size="32px"></Image>
      <Button width="100%" sx={{ textAlign: "right" }}>
        {props.Content}
      </Button>
    </Flex>
  );
}
