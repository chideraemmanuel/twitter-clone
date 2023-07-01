import {
  FaHome,
  FaSearch,
  FaBell,
  FaMailBulk,
  FaList,
  FaBookmark,
  FaCheckCircle,
  FaUser,
  FaListAlt,
} from "react-icons/fa";
import {} from "react-icons/ai";
import {} from "react-icons/bs";
import {
  BiSearch,
  BiSolidSearch,
  BiHomeCircle,
  BiSolidHomeCircle,
  BiBell,
  BiSolidBell,
  BiEnvelope,
  BiSolidEnvelope,
  BiBookmark,
  BiSolidBookmark,
  BiBadgeCheck,
  BiSolidBadgeCheck,
  BiUser,
  BiSolidUser,
} from "react-icons/bi";
import { HiMail, HiOutlineMail } from "react-icons/hi";
import {} from "react-icons/ai";
import {
  IoEllipsisHorizontalCircle,
  IoEllipsisHorizontalCircleOutline,
} from "react-icons/io5";
import { IconType } from "react-icons/lib";

export interface NavigationTypes {
  title: string;
  icon: IconType;
  activeIcon: IconType;
}

export const navigationConstants: NavigationTypes[] = [
  {
    title: "home",
    icon: BiHomeCircle,
    activeIcon: BiSolidHomeCircle,
  },
  {
    title: "explore",
    icon: BiSearch,
    activeIcon: BiSolidSearch,
  },
  {
    title: "notifications",
    icon: BiBell,
    activeIcon: BiSolidBell,
  },
  {
    title: "messages",
    icon: BiEnvelope,
    activeIcon: BiSolidEnvelope,
  },
  {
    title: "lists",
    icon: FaList,
    activeIcon: FaListAlt,
  },
  {
    title: "bookmarks",
    icon: BiBookmark,
    activeIcon: BiSolidBookmark,
  },
  {
    title: "verified",
    icon: BiBadgeCheck,
    activeIcon: BiSolidBadgeCheck,
  },
  {
    title: "profile",
    icon: BiUser,
    activeIcon: BiSolidUser,
  },
  {
    title: "more",
    icon: IoEllipsisHorizontalCircleOutline,
    activeIcon: IoEllipsisHorizontalCircle,
  },
];
