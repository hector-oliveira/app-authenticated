import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  TextInputProps,
  TextProps,
  TouchableOpacityProps
} from "react-native";

export type ITextProps = TextProps & {
  title?: string;
  description?: string;
  color?: string;
};

export type IInputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name'];
  value?: string;
  secureTextEntry?: boolean;
};

export type IButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: React.ComponentProps<typeof Feather>['name'];
};