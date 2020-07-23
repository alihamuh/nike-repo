import React, { useState } from "react";
import { Flex, Text, Box, Button } from "rebass";

export default function (props) {
  const [showPrice, setShowPrice] = useState(false);
  const [showLink, setShowLink] = useState(false);
  return (
    <Flex flexDirection="column" mb={3}>
      <Flex
        width="370px"
        height="370px"
        m={1}
        flexDirection="column"
        sx={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "370px 370px",
          backgroundRepeat: "no-repeat",
          bg: "gray",
        }}
        onMouseOver={(e) => {
          setShowPrice(true);
          console.log("I am in mouse obver");
        }}
        onMouseLeave={() => {
          setShowPrice(false);
          setShowLink(false);
        }}
      >
        <Flex flexDirection="row" p={2}>
          <Text variant="date" alignSelf="top">
            {props.data.date.toUpperCase()}
          </Text>
          <Flex mx="auto"></Flex>
          <Text variant="price" alignSelf="top">
            {"$" + props.data.price}
          </Text>
        </Flex>
        {showPrice ? <Text variant="subtitle">Sizes</Text> : ""}
        <Flex
          flexDirection="row"
          scrolling="true"
          px={2}
          flexWrap="wrap"
          justifyContent="center"
        >
          {showPrice
            ? props.data.size.map(function (size, index) {
                return (
                  <Button
                    variant="sizebutton"
                    //minWidth="50px"
                    //minHeight="50px"
                    //px={1}
                    onClick={() => {
                      setShowLink(true);
                    }}
                  >{`US ${size}`}</Button>
                );
              })
            : ""}
        </Flex>
        {showLink ? (
          <Button
            variant="sizebutton"
            width="350px"
            mt={3}
            alignSelf="center"
            bg="blue"
            color="white"
            sx={{ ":hover": { color: "black" }, fontWeight: "600" }}
          >
            Generate Link
          </Button>
        ) : (
          ""
        )}
        <Flex height="100%"></Flex>
        <Text textAlign="center" variant="subtitle">
          {props.data.subtitle.toUpperCase()}
        </Text>
      </Flex>
      <Text textAlign="center" variant="name">
        {props.data.name.toUpperCase()}
      </Text>
    </Flex>
  );
}
