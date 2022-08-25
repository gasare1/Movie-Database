import { Button, Chip } from "@mui/material";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function LowerLeftGrid() {
  const buttonName = [
    {
      genre: {
        action: ["blue", "Action"],
        drama: ["yellow", "Drama"],
        scifi: ["red", "Sci_Fi"],
        adventures: ["purple", "Adventures"],
        comedy: ["orange", "Comedy"],
      },
    },
  ];
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  console.log(buttonName);
  return (
    <div >
      <div
        style={{
          justifyContent: "flex-start",
          display: "flex",
          paddingBottom: "30px",fontFamily: 'Ubuntu, sans-serif'
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: "bolder" }}>
          {" "}
          Favorite genre
        </div>
      </div>
      {buttonName.map((items: any) => (
        <div style={{ justifyContent: "space-between", display: "flex",fontFamily:"Source Sans Pro', sans-serif" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16} sx={{fontFamily: 'Ubuntu, sans-serif'}}>
              <Grid item xs={4}>
                <Chip
                  label={items.genre.action[1]}
                  style={{
                    background: `${items.genre.action[0]}`,
                    backgroundColor: "blue",
                    width: "100px",cursor:'pointer'
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Chip
                  label={items.genre.drama[1]}
                  sx={{ background: `${items.genre.drama[0]}`, width: "100px",cursor:'pointer' }}
                />
              </Grid>
              <Grid item xs={4}>
                <Chip
                  label={items.genre.scifi[1]}
                  sx={{ background: `${items.genre.scifi[0]}`, width: "100px",cursor:'pointer' }}
                />
              </Grid>
              <Grid item xs={4}>
                <Chip
                  label={items.genre.adventures[1]}
                  sx={{
                    background: `${items.genre.adventures[0]}`,
                    width: "100px",cursor:'pointer'
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Chip
                  label={items.genre.comedy[1]}
                  sx={{
                    background: `${items.genre.comedy[0]}`,
                    width: "100px",cursor:'pointer'
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      ))}
    </div>
  );
}

export default LowerLeftGrid;
