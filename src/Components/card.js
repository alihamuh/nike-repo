import React, { useState } from "react";
import { Flex, Text, Box, Button } from "rebass";
import Dialog from "./dialogs";

export default function (props) {
  const [showPrice, setShowPrice] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [visible, setVisible] = useState(false);
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
          width="350px"
          alignSelf="center"
          justifyContent="center"
          pb="6px"
          sx={{
            overflowX: "auto",
            overflowY: "hidden",
            ":hover": { scrollbarWidth: "thin", pb: "0px" },
            scrollbarWidth: "none",
          }}
        >
          {showPrice
            ? props.data.size.map(function (size, index) {
                return (
                  <Button
                    variant="sizebutton"
                    minWidth="70px"
                    minHeight="40px"
                    mb={4}
                    onClick={() => {
                      setShowLink(true);
                    }}
                  >{`US ${size}`}</Button>
                );
              })
            : ""}
        </Flex>
        {showLink ? (
          <>
            <Dialog
              visible={visible}
              onClickAway={() => setVisible(false)}
              onClick={() => setVisible(false)}
              onSwitchClick={(check) => console.log("cliecked", check)}
              name={props.name}
            />
            <Button
              variant="linkbutton"
              width="350px"
              mt={3}
              alignSelf="center"
              onClick={() => {
                setVisible(true);
              }}
            >
              Generate Link
            </Button>
          </>
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
