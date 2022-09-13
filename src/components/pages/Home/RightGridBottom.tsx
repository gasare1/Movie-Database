import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { getTitle4, getTitle5 } from "../Common/ApiFetch";
import { FaPlayCircle } from "react-icons/fa";
import { Container } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RightGridBottom() {
  const [data1, setData1] = React.useState<any[]>([]);
  const [data2, setData2] = React.useState<any[]>([]);


  React.useEffect(() => {
    getTitle4().then(function (response) {
      setData1([response?.data]);
    });

    getTitle5().then(function (response) {
      setData2([response?.data]);
    });
  }, []);
  localStorage.setItem("newData2", JSON.stringify(data2));
  localStorage.setItem("newData", JSON.stringify(data1));
  const items1:any[] = JSON.parse(localStorage.getItem("newData") || "{}");
 
  const items2:any[] = JSON.parse(localStorage.getItem("newData2") || "{}");
  console.log(items1,items2);
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={3}
          columns={16}
          style={{
            borderRadius: "20px",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          {items1?.map((items: any) => (
            <Grid
              item
              xs={7.5}
              sx={{
                minWidth: 275,
                backgroundSize: "cover",
                background: `url(${items.Poster}) no-repeat center center`,
                WebkitBackgroundSize: "cover",
                opacity: 1,
                justifyContent: "flex-start",
                display: "flex",
                alignItem: "flex-start",
                borderRadius: "30px",
              }}
            >
              <Item
                style={{
                  marginTop: "15rem",
                  background: "#a8a8a87b",
                  height: "70px",
                  width: "50vw",
                  marginLeft: "-25px",
                  borderRadius: "30px",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <FaPlayCircle
                  style={{
                    color: "white",
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                />
                <div
                  style={{
                    alignItems: "flex-start",
                    flexFlow: "column wrap",
                    paddingLeft: "10px",
                    display: "flex",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "15px",
                      fontWeight: "bolder",
                    }}
                  >
                    {items.Title}
                  </p>
                  <p
                    style={{
                      color: "white",
                      fontSize: "15px",
                      fontWeight: "bolder",
                      marginTop: "-15px",
                    }}
                  >
                    {items.Year}
                  </p>
                </div>
              </Item>
            </Grid>
          ))}

          {items2?.map((items: any) => (
            <Grid
              item
              xs={7.5}
              sx={{
                minWidth: 275,
                backgroundSize: "cover",
                background: `url(${items.Poster}) no-repeat center center`,
                WebkitBackgroundSize: "cover",
                opacity: 1,
                justifyContent: "flex-start",
                display: "flex",
                alignItem: "flex-start",
                borderRadius: "30px",
              }}
            >
              <Item
                style={{
                  marginTop: "15rem",
                  background: "#a8a8a87b",
                  height: "70px",
                  width: "50vw",
                  marginLeft: "-25px",
                  borderRadius: "30px",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <FaPlayCircle
                  style={{
                    color: "white",
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                />
                <div
                  style={{
                    alignItems: "flex-start",
                    flexFlow: "column wrap",
                    paddingLeft: "10px",
                    display: "flex",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "15px",
                      fontWeight: "bolder",
                    }}
                  >
                    {items.Title}
                  </p>
                  <p
                    style={{
                      color: "white",
                      fontSize: "15px",
                      fontWeight: "bolder",
                      marginTop: "-15px",
                    }}
                  >
                    {items.Year}
                  </p>
                </div>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
