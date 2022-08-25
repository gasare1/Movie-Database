import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { Stack, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import SearchBarModal from "./SearchBarModal";
export type Props = {
  fontColor?: string;
};

export const options = {
  shouldForwardProp: (prop: any) => prop !== "fontColor",
};
export const StyledTextField = styled(
  TextField,
  options
)<Props>(({ fontColor }) => ({
  input: {
    color: fontColor,
  },
}));

export default function SearchbarMain(props: any) {
  const [clickedData, setClickData] = React.useState<any[]>([]);
  console.log(clickedData);

  const open = Boolean(props.anchorEl);
  const id = open ? "simple-popper" : undefined;
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div
      style={{
        zIndex: "100",
        justifyContent: "flex-end",
        display: "flex",
        width: "auto",
        color: "white",
        paddingRight: "50px",
      }}
    >
      <Box
        sx={{
          width: "230px",
          display: `${open ? "" : "none"}`,
        }}
      >
        <Stack spacing={-1} style={{ overflowY: "scroll" }}>
          {props.searchedData[0]?.map((items: any, index: any) => (
            <Item
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => setClickData([items])}
            >
              {items.Title}
            </Item>
          ))}
        </Stack>
      </Box>
      <SearchBarModal clickedData={clickedData} />
    </div>
  );
}
