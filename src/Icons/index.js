import React from "react";
import MDIIcon from "@mdi/react";
import * as Icons from "@mdi/js";
import { useTheme } from "emotion-theming";
import Animated from "./animated";

function Icon({ name, size = 24, color = "icon", stroke, rotate }) {
  const theme = useTheme();
  return (
    <MDIIcon
      path={name}
      size={size + "px"}
      stroke={stroke}
      color={theme.colors[color] || color}
      spin={rotate}
    />
  );
}

function createIcon(name) {
  return function (props) {
    return (
      <Animated.Box
        sx={props.sx}
        height={(props.size || 24) + "px"}
        width={(props.size || 24) + "px"}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        animate={props.animation}
        onClick={props.onClick}
      >
        <Icon name={name} {...props} />
      </Animated.Box>
    );
  };
}

export const Hamburger = createIcon(Icons.mdiMenu);
export const AppIcon = createIcon(Icons.mdiAppleAirplay);
export const Cancel = createIcon(Icons.mdiClose);
export const Edit = createIcon(Icons.mdiAccountEdit);
export const Delete = createIcon(Icons.mdiDelete);
export const Back = createIcon(Icons.mdiArrowLeft);
