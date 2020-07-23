import React from "react";
import { Flex, Text, Box } from "rebass";

export default function DashBoardTitle(props) {
  return (
    <Flex
      px={3}
      py={3}
      justifyContent="center"
      alignItems="center"
      sx={{ borderBottom: "1px solid #aca9a977" }}
    >
      <props.Icon size="32" color="dashboardText" onClick={props.onClick} />
      <Box mx="auto"></Box>
      <Text variant="title">{props.Name.toUpperCase()}</Text>
    </Flex>
  );
}
