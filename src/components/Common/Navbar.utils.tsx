import { RiSearchLine } from "react-icons/ri";
import { MdBlurCircular } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
export type navbarItems = [
    {
      titleName: string;
      movies: string;
      tvShows: string;
      animation: string;
      plans: string;
      searchIcons: any;
      notificationIcon: any;
      accountIcon: any;
    }
  ];
  export const navItems: navbarItems = [
    {
      titleName: "MOVIE APP",
      movies: "Movies",
      tvShows: "TV shows",
      animation: "Animations",
      plans: "Plans",
      searchIcons: <RiSearchLine />,
      notificationIcon: <MdBlurCircular />,
      accountIcon: <FaRegUserCircle />,
    },
  ];
