import React, { useState } from "react";
import Modal from "react-awesome-modal";
import { Flex, Button, Text, Box } from "rebass";
import { Switch, Input } from "@rebass/forms";

export default function SettingDialog(props) {
  const [check, setCheck] = useState();
  return (
    <Modal
      visible={props.visible}
      width="800"
      height="170"
      onClickAway={props.onClickAway}
    >
      <Flex height="100%" width="100%" flexDirection="column" bg="white" p={2}>
        <Text variant="date" fontSize={4}>
          {`link generated`.toUpperCase()}
        </Text>

        <Flex
          height="100%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            height="50px"
            width="100%"
          >
            <Flex
              width="100%"
              flexDirection="row"
              alignItems="center"
              bg="#F5F5F5"
            >
              <Text width="100%" bg="#F5F5F5" variant="subtitle">
                https://www.facebook.com
              </Text>
            </Flex>
          </Flex>
          <Flex flexDirection="row" width="100%" justifyContent="center">
            <Button
              width="30%"
              sx={{ border: "1px solid", borderColor: "border" }}
              fontSize={3}
            >
              {"Copy to Clipboard".toUpperCase()}
            </Button>
            <Button width="30%" onClick={props.onClick}>
              Close
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Modal>
  );
}
