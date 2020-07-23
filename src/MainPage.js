import React, { useState } from "react";
import Components from "./Components";
import { Flex } from "rebass";
import Images from "./images";

const Appname = "nike lifestyle";

const countries = [
  { name: "Singapore", code: "sg" },
  { name: "Malaysia", code: "my" },
  { name: "Taiwan", code: "tw" },
  { name: "Indonesia", code: "id" },
  { name: "USA", code: "us" },
];

export default function () {
  const [drawer, setDrawer] = useState(false);
  return (
    <Flex className="App-header">
      <Flex flexDirection="column" width="100%">
        <Components.Navbar
          AppName={Appname}
          onClick={() => {
            drawer ? setDrawer(false) : setDrawer(true);
          }}
        />
        <Flex flexDirection="row" flexWrap="wrap" p={4} mt={5}>
          {Images.map(function (data, index) {
            console.log(data);
            return <Components.Card image={data.image} data={data} />;
          })}
        </Flex>
      </Flex>
      <Flex flexShrink="0">
        <Components.Dashboard
          countries={countries}
          show={drawer}
          AppName={Appname}
          onCancelClick={() => {
            drawer ? setDrawer(false) : setDrawer(true);
            console.log(drawer);
          }}
        ></Components.Dashboard>
      </Flex>
    </Flex>
  );
}
