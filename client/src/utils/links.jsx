import React from "react";
import { FaRegUser } from "react-icons/fa";
import { TiClipboard } from "react-icons/ti";
import { GrBasket } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { IoHelpCircleOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

const links = [
  { text: "Profile", path: ".", icon: <FaRegUser /> },
  { text: "Register", path: "register", icon: <TiClipboard /> },
  { text: "My orders", path: "orders", icon: <GrBasket /> },
  { text: "Settings", path: "settings", icon: <FiSettings /> },
  { text: "Support", path: "support", icon: <IoHelpCircleOutline /> },
  { text: "Sign out", path: "signout", icon: <CiLogout /> },
];

export const accountPrimaryLinks = [
  { text: "Profile", path: ".", icon: <FaRegUser /> },
  { text: "Register", path: "register", icon: <TiClipboard /> },
  { text: "My orders", path: "orders", icon: <GrBasket /> },
  { text: "Settings", path: "settings", icon: <FiSettings /> },
];

export const accountSecondaryLinks = [
  { text: "Support", path: "support", icon: <IoHelpCircleOutline /> },
  { text: "Sign out", path: "signout", icon: <CiLogout /> },
];

export default links;
