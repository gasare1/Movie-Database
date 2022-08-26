import axios from "axios";



const options: any = {
    method: 'GET',
    url: 'https://moviesdb5.p.rapidapi.com/om',
    params: {s: 'Avengers'},
    headers: {
      'X-RapidAPI-Key': '9cb680335bmsh31d44ef89085eeep1acd36jsnf36e9a9108d0',
      'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
    }
};
const options3: any = {
  method: "GET",
  url: "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
  params: { term: "Black Panther" },
  headers: {
    "X-RapidAPI-Key": "9cb680335bmsh31d44ef89085eeep1acd36jsnf36e9a9108d0",
    "X-RapidAPI-Host":
      "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
  },
};
const options4: any = {
  method: "GET",
  url: "https://movie-database-alternative.p.rapidapi.com/",
  params: { r: "json", i: "tt10872600" },
  headers: {
    "X-RapidAPI-Key": "9cb680335bmsh31d44ef89085eeep1acd36jsnf36e9a9108d0",
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};
const options5: any = {
  method: "GET",
  url: "https://movie-database-alternative.p.rapidapi.com/",
  params: { r: "json", i: "tt4154796" },
  headers: {
    "X-RapidAPI-Key": "9cb680335bmsh31d44ef89085eeep1acd36jsnf36e9a9108d0",
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};
const options6: any = {
  method: "GET",
  url: "https://movie-database-alternative.p.rapidapi.com/",
  params: { r: "json", i: "tt8041270" },
  headers: {
    "X-RapidAPI-Key": "9cb680335bmsh31d44ef89085eeep1acd36jsnf36e9a9108d0",
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};
const options7: any = {
    method: 'GET',
    url: 'https://movie-database-alternative.p.rapidapi.com/',
    params: {r: 'json', i: 'tt9253284'},
    headers: {
      'X-RapidAPI-Key': '9cb680335bmsh31d44ef89085eeep1acd36jsnf36e9a9108d0',
      'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
};
const options8: any = {
    method: 'GET',
    url: 'https://movie-database-alternative.p.rapidapi.com/',
    params: {r: 'json', i: 'tt0816692'},
    headers: {
      'X-RapidAPI-Key': '9cb680335bmsh31d44ef89085eeep1acd36jsnf36e9a9108d0',
      'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
};
const options9: any = {
    method: 'GET',
    url: "https://imdb-api.com/en/API/BoxOfficeAllTime/k_v39tdl19",

};


export async function boxAllTime() {
    try {
        return await axios.request(options9)
    }catch(error){
        console.log(error)
    }
}

export async function getTitle() {
  try {
    return await axios.request(options);
  } catch (error) {
    console.log(error);
  }
}
export async function getTitle3() {
  try {
    return await axios.request(options3);
  } catch (error) {
    console.log(error);
  }
}
export async function getTitle4() {
  try {
    return await axios.request(options4);
  } catch (error) {
    console.log(error);
  }
}
export async function getTitle5() {
  try {
    return await axios.request(options5);
  } catch (error) {
    console.log(error);
  }
}
export async function getTitle6() {
  try {
    return await axios.request(options6);
  } catch (error) {
    console.log(error);
  }
}
export async function getTitle7() {
  try {
    return await axios.request(options7);
  } catch (error) {
    console.log(error);
  }
}
export async function getTitle8() {
  try {
    return await axios.request(options8);
  } catch (error) {
    console.log(error);
  }
}
export async function getTitle2(options2: any) {
  const options: any = [...options2];
  try {
    return await axios.request(options.at(0));
  } catch (error) {
    console.log(error);
  }
  console.log(options.at(0));
}
export async function searchBarData(inputValue: any) {
    const options: any = [...inputValue];
    try {
      return await axios.request(options.at(0));
    } catch (error) {
      console.log(error);
    }
    console.log(options.at(0));
  }