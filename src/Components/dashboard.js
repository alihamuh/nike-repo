import React, { useState } from "react";
import { Flex, Box, Button } from "rebass";
import { Cancel } from "../Icons";
import DashBoardTitle from "./dashboardTitle";
import ImageButton from "./imageButton";

export default function Dashboard(props) {
  return props.show ? (
    <Flex
      flexShrink="0"
      height="100%"
      width="320px"
      flexDirection="column"
      bg="white"
      sx={{
        position: "fixed",
        right: "0",
        cursor: "pointer",
        borderLeft: "1px solid #a3a3a3",
      }}
    >
      <DashBoardTitle
        Name={props.AppName}
        Icon={Cancel}
        onClick={props.onCancelClick}
      />
      <Flex flexDirection="column" pt={3} height="100%">
        <Flex flexDirection="column" flexShrink="0">
          {props.countries.map(function (data, index) {
            return (
              <ImageButton
                Content={data.name}
                link={`https://www.countryflags.io/${data.code}/flat/32.png`}
              ></ImageButton>
            );
          })}
        </Flex>
        <Flex height="100%"></Flex>
        <Flex flexDirection="column" flexShrink="0" py={4}>
          <Button>Sign Up</Button>
        </Flex>
      </Flex>
    </Flex>
  ) : (
    ""
  );
}
