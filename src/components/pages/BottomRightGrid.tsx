import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { getTitle6, getTitle7, getTitle8 } from "../Common/ApiFetch";
import { FaPlayCircle } from "react-icons/fa";
import { Button } from "@mui/material";
import { Container } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function LowerRightGridMain() {
  const [data1, setData1] = React.useState<any[]>([]);
  const [data2, setData2] = React.useState<any[]>([]);
  const [data3, setData3] = React.useState<any[]>([]);
  const [newdata1, setNewData1] = React.useState<any[]>([]);
  const [newdata2, setNewData2] = React.useState<any[]>([]);
  const [newdata3, setNewData3] = React.useState<any[]>([]);

  React.useEffect(() => {
    getTitle6().then(function (response) {
      setData1([response?.data]);
      localStorage.setItem("newData4", JSON.stringify(response?.data));
    });
    getTitle7().then(function (response) {
      localStorage.setItem("newData5", JSON.stringify(response?.data));
    });
    getTitle8().then(function (response) {
      localStorage.setItem("newData6", JSON.stringify(response?.data));
    });
  }, [newdata1 === undefined]);

  React.useEffect(() => {
    const items1: any = JSON.parse(localStorage.getItem("newData4") || "{}");
    setNewData1([items1]);
    console.log(items1,"Item1");
    const items2: any = JSON.parse(localStorage.getItem("newData5") || "{}");
    setNewData2([items2]);

    const items3: any = JSON.parse(localStorage.getItem("newData6") || "{}");
    setNewData3([items3]);
  }, []);

  console.log(newdata1);
  return (
    <Container>
      <Box sx={{ flexGrow: 1,paddingTop:'50px' }}>
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
          {newdata1?.map((items: any, index:any) => (
            <Grid
            key={index}
              item
              xs={4}
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
                fontFamily: "Source Sans Pro', sans-serif",
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
                  fontFamily: "Source Sans Pro', sans-serif",
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
                      fontFamily: "Source Sans Pro', sans-serif",
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

          {newdata2?.map((items: any) => (
            <Grid
              item
              xs={4}
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
          {newdata3?.map((items: any) => (
            <Grid
              item
              xs={4}
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
