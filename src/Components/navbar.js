import React, { useEffect, useCallback, useState } from "react";
import { Flex, Text, Box } from "rebass";
import { Hamburger, Back } from "../Icons";
import "./navbar.css";

export default function NavBar(props) {
  const [shadow, setShadow] = useState(false);

  const handleScrollEvent = useCallback((event) => {
    console.log("onscroll", window.pageYOffset);

    if (window.pageYOffset < 10) {
      setShadow(false);
    } else {
      setShadow(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [handleScrollEvent]);

  return (
    <Flex
      bg="dashboard"
      p={3}
      width="100%"
      height="67px"
      bg="white"
      sx={{
        position: "fixed",
        top: "0",
        cursor: "pointer",
        ":hover": { boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.5)" },
        boxShadow: shadow
          ? "0px 5px 5px rgba(0, 0, 0, 0.5)"
          : "0px 0px 0px white",
      }}
    >
      <Text variant="title" height="32px" fontSize={5}>
        {props.AppName.toUpperCase()}
      </Text>
      <Box mx="auto" />
      <Hamburger size="36" onClick={props.onClick} />
    </Flex>
  );
}
