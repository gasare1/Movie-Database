import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { getTitle3 } from "../Common/ApiFetch";

import { Container } from "@mui/system";
import RightGridBottom from "./RightGridBottom";
import DataTable from "./Table";



export default function RightGridComponent() {
  const [data, setData] = React.useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [boxData,setBoxData] = React.useState<any[]>([])

  React.useEffect(() => {
    getTitle3().then(function (response) {
      setData([response?.data.results]);
    });
  }, []);

  localStorage.setItem("dataRightComponent", JSON.stringify(data));
  const items1: any[] = JSON.parse(
    localStorage.getItem("dataRightComponent") || "{}"
  );


 

  return (
    <Container>
       
      {items1[0]?.slice(2,3).map((items: any, index: any) => (
        <Card
          key={index}
          sx={{
            minWidth: 275,
            backgroundSize: "cover",
            background: `url(${items.picture}) no-repeat center center`,
            WebkitBackgroundSize: "cover",
            opacity: 1,
            height: 300,
          }}
        >
          <CardContent style={{ color: "gold" }}></CardContent>
          <CardActions sx={{ background: "#fff",marginTop:'190px' }}>
        {}
        <a href={items.locations[0]?.url} target="/">
          <img
            style={{ backgroundColor: "#f0f0f00" }}
            src={items.locations[0]?.icon}
            alt="/"
          />
        </a>
        <a href={items.locations[1]?.url} target="/">
          {" "}
          <img
            style={{height: "40px",paddingTop:'10px' }}
            src={items.locations[1]?.icon}
            alt="/"
          />
        </a>
       
      </CardActions>
        </Card>
      ))}
      <div
        style={{
          justifyContent: "flex-start",
          display: "flex",
          paddingTop: "50px",
          fontFamily: "Ubuntu, sans-serif",
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: "bolder" }}>
        Top 200 Movies of All Time
        <DataTable boxData={boxData}/>
        {/* <BasicTable boxData={boxData}/> */}
          {" "}
          Top 10 Netflix Trending
          
        </div>
      </div>
      <div style={{ paddingTop: "50px" }}>
        <RightGridBottom />
      </div>
    </Container>
  );
}

