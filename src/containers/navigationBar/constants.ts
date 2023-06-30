import {
  FaHome,
  FaSearch,
  FaBell,
  FaMailBulk,
  FaList,
  FaBookmark,
  FaCheckCircle,
  FaUser,
} from "react-icons/fa";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import { IconType } from "react-icons/lib";

interface Types {
  title: string;
  icon: IconType;
}

export const navigationConstants: Types[] = [
  {
    title: "home",
    icon: FaHome,
  },
  {
    title: "explore",
    icon: FaSearch,
  },
  {
    title: "notifications",
    icon: FaBell,
  },
  {
    title: "messages",
    icon: FaMailBulk,
  },
  {
    title: "lists",
    icon: FaList,
  },
  {
    title: "bookmarks",
    icon: FaBookmark,
  },
  {
    title: "verified",
    icon: FaCheckCircle,
  },
  {
    title: "profile",
    icon: FaUser,
  },
  {
    title: "more",
    icon: IoEllipsisHorizontalCircle,
  },
];
