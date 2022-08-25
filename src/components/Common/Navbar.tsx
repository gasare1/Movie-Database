import React, { useEffect } from "react";
import { NavBar, NavbarLi, NavbarLiMiddle, NavbarUl } from "./Navbar.style";

import { Divider } from "@mui/material";
import { navItems } from "./Navbar.utils";
import SearchbarMain, { StyledTextField } from "./SearchBar";
import { searchBarData } from "./ApiFetch";
import { optionsSearchBar } from "../pages/Pages.utils";
import { RiCloseFill } from "react-icons/ri";
function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [titleName, setTitleName] = React.useState("");
  const [searchedData, setSearchedData] = React.useState<any[]>([])
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  console.log(titleName)

  const open = Boolean(anchorEl);

  useEffect(() => {
    searchBarData(optionsSearchBar(titleName)).then(function (response) {
      console.log(response);
      setSearchedData([response?.data.Search])
    })
  },[titleName])




  return (
    <NavBar className="navbar">
      <NavbarUl className="">
        {navItems.map(
          ({
            titleName,
            movies,
            tvShows,
            animation,
            plans,
            searchIcons,
            notificationIcon,
            accountIcon,
          }) => (
            <>
              <div
                style={{
                  flexFlow: "row wrap",
                  flexGrow: 1,
                  color: "#fff",
                  fontSize: "30px",
                  fontWeight: "bolder",
                }}
              >
                <NavbarLi>{titleName}</NavbarLi>
              </div>
              <span
                style={{
                  flexFlow: "row wrap",
                  width: "auto",
                  flexGrow: 20,
                  flexDirection: "row",
                  display: "flex",
                  paddingLeft: "200px",
                  color: "gray",
                }}
              >
                <NavbarLiMiddle>{movies} </NavbarLiMiddle>
                <NavbarLiMiddle>{tvShows}</NavbarLiMiddle>
                <NavbarLiMiddle>{animation}</NavbarLiMiddle>
                <NavbarLiMiddle>{plans}</NavbarLiMiddle>
              </span>
              <div
                style={{
                  flexGrow: "3",
                  flexFlow: "row wrap",
                  display: "flex",
                  fontSize: "30px",
                  color: "#fff",
                }}
              >
            
                

                <NavbarLi onClick={handleClick}>{searchIcons}</NavbarLi>

                <NavbarLi>{notificationIcon}</NavbarLi>
                <NavbarLi>{accountIcon}</NavbarLi>
           
              </div>
              <StyledTextField
                  label=""
                  onChange={(event) => {setTitleName(event.target.value)}}
                  fontColor="#fff"
                  style={{
                    display: `${open ? "" : "none"}`,
                    border: "1px solid #fff",paddingRight:'0px'
                  }}
                />
                <RiCloseFill onClick={() => {setTitleName("")}} style={{color:'white',display: `${open ? "" : "none"}`,paddingRight:'20px',fontSize:'40px',}}/>
            </>
          )
        )}
      </NavbarUl>
  
      <div>
        <Divider variant="middle" style={{ background: "gray" }} />
      </div>
      <div style={{ zIndex: "100", color: "white" }}>
        <SearchbarMain anchorEl={anchorEl} searchedData={searchedData} />
      </div>
    </NavBar>
  );
}

export default Navbar;
