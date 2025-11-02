import React, { ReactNode } from "react";
import { Text } from "@react-native-material/core";
import styles from "./headerStyles";
interface HeaderProps {
  children: ReactNode;
}


export default function Header({ children }: HeaderProps) {
  return (
    <Text variant="h6" style={styles.header}>
      {children}
    </Text>
  );
}