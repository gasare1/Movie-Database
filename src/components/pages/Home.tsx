import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import {
  bottomLeftGrid,
  bottomRightGrid,
  scrollbar,
  topLeftGrid,
  topRightGrid,
} from "./Home.style";
import LeftGridComponent from "./LeftGridComponent";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import RightGridComponent from "./RightGridComponent";
import LowerRightGridMain from "./BottomRightGrid";
import LowerLeftGrid from "./BottomLeftGrid";
import "./home.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "0px",
}));

export default function Home() {
  return (
    <div >
    <Container style={{ minWidth: "96vw", }}>
      <Box sx={{ width: 1, paddingTop: "80px", background: "#fffe" }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={-1}>
          <Box gridColumn="span 4">
            <SimpleBar style={{ maxHeight: "60vh", ...scrollbar }}>
              <Item sx={topLeftGrid}>
                <LeftGridComponent />
              </Item>
            </SimpleBar>
          </Box>
          <Box gridColumn="span 8">
            <Item sx={topRightGrid}>
              <SimpleBar style={{ maxHeight: "60vh", ...scrollbar }}>
                <RightGridComponent />
              </SimpleBar>
            </Item>
          </Box>
          <Box gridColumn="span 4" sx={{background:'#000'}}>
            <Item sx={bottomLeftGrid}> <LowerLeftGrid/></Item>
          </Box>
          <Box gridColumn="span 8" >
            <Item sx={bottomRightGrid}>
              <div
                style={{
                  justifyContent: "flex-start",
                  display: "flex",
                  paddingTop: "0px",
                }}
              >
                <div style={{ fontSize: "20px", fontWeight: "bolder" }}>
                  {" "}
                  Fans Favorite
                </div>
              </div>
              <LowerRightGridMain />
            </Item>
          </Box>
        </Box>
      </Box>
    </Container>
    </div>
  );
}
