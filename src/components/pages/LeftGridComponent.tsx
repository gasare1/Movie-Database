import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Tooltip } from "@mui/material";
import { getTitle, getTitle2 } from "../Common/ApiFetch";
import ReactPlayer from "react-player";
import { FaPlayCircle } from "react-icons/fa";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { options2, sortNames } from "./Pages.utils";

function LeftGridComponent() {
  const [data, setData] = React.useState<any[]>([]);
  const [localData, setLocalData] = React.useState([]);
  const [sortname, setSortName] = React.useState(0);
  const [selectedSort, setSelectedSort] = React.useState(sortNames[sortname]);
  const [sortedData, setSortedData] = React.useState([]);

  const handleSortUp = async () => {
    setSortName((prev: any) => (prev + 1) % 4);
    await getTitle2(options2(selectedSort)).then(function (response) {
      setSortedData(response?.data.results);
      console.log(response?.data.results);
    });
    setSelectedSort(sortNames[sortname]);
    options2(selectedSort[0]);
  };

  
  const handleSortDown = async () => {
    setSortName((prev: any) => (prev - 1) % 1);
    await getTitle2(options2(selectedSort)).then(function (response) {
      setSortedData(response?.data.results);
    });
    options2(selectedSort);
  };

  React.useEffect(() => {
    getTitle().then(function (response) {
      setData([response?.data.Search]);
      console.log(response?.data.Search, " SEARCH");
    });
  }, []);

  localStorage.setItem("dataforleftgrid", JSON.stringify(data));
  let items1: any[] = JSON.parse(
    localStorage.getItem("dataforleftgrid") || "{}"
  );

  console.log(items1, "____________________________");

  const styles = {
    media: {
      width: "345px",
      height: "350px",
      objectFit: "cover",
      // marginLeft: '33%'
    },
  };

  return (
    <>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          fontFamily: "Ubuntu, sans-serif",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>New trailers</div>
        <div
          style={{
            flexFlow: "row wrap",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p>Sort by {sortNames[sortname]} </p>
          <div
            style={{
              flexFlow: "column wrap",
              display: "flex",
              alignItems: "center",
            }}
          >
            <TiArrowSortedUp onClick={handleSortUp} />
            <TiArrowSortedDown onClick={handleSortDown} />
          </div>
        </div>
      </div>
      {sortedData?.map((items: any) => (
        <Card
          key={items.imbid}
          sx={{
            maxWidth: 345,
            marginTop: "20px",
            height: "auto",
            borderRadius: "30px",
            zIndex: 1,
            display: `${sortedData ? "" : "none "}`,
          }}
        >
          <CardActionArea>
            <div style={{ height: "200px" }}>
              <CardMedia
                component="img"
                height="100"
                width={"auto"}
                image={items.imageurl}
                alt="green iguana"
                sx={styles.media}
              />
            </div>

            <Tooltip title={items.synopsis}>
              <p
                style={{
                  paddingLeft: "10px",
                  color: "gold",
                  fontSize: "15px",
                  fontWeight: "bolder",
                  justifyContent: "space-between",
                  display: "flex",
                  alignItems: "center",
                  flexFlow: "row wrap",
                }}
              >
                <p
                  style={{
                    paddingLeft: "10px",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <FaPlayCircle style={{ color: "white", fontSize: "30px" }} />{" "}
                  <span style={{ marginLeft: "20px" }}>{items.title}</span>
                </p>
              </p>
            </Tooltip>
          </CardActionArea>
        </Card>
      ))}
      {items1[0]?.map((items: any, index: any) => (
        <Card
          key={index}
          sx={{
            maxWidth: 345,
            marginTop: "20px",
            height: "auto",
            borderRadius: "30px",
            zIndex: 1,
            display: `${sortedData ? " " : "none"}`,
          }}
        >
          <CardActionArea>
            <div style={{ height: "200px" }}>
              <CardMedia
                component="img"
                height="100"
                width={"auto"}
                image={items.Poster}
                alt="green iguana"
                sx={styles.media}
              />
            </div>

            <CardContent style={{ width: "330px" }}>
              <Card
                style={{
                  width: "330px",
                  justifyContent: "flex-start",
                  display: "flex",
                  alignItems: "center",
                  flexFlow: "row wrap",
                  color: "white",
                }}
              >
                <p style={{ fontWeight:'bolder',fontSize:'20px' }}>{items.Title}</p>
              </Card>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}

export default LeftGridComponent;
