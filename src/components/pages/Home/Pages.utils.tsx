export const sortNames = [
    "highestrated ", "lowestrated" , "latest" , "oldest"
  ]


 export const options2: any = (selectedSort:any) => [{

    method: "GET",
    url: "https://ott-details.p.rapidapi.com/advancedsearch",
    params: {
      start_year: "2020",
      end_year: "2022",
      min_imdb: "6",
      max_imdb: "7.8",
      genre: "action",
      language: "english",
      type: "movie",
      sort: `${selectedSort}`,
      page: "1",
    },
    headers: {
      "X-RapidAPI-Key": "9cb680335bmsh31d44ef89085eeep1acd36jsnf36e9a9108d0",
      "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
    },
  }];


 export const optionsSearchBar: any = (inputValue:any) => [{
    method: 'GET',
    url: 'https://moviesdb5.p.rapidapi.com/om',
    params: {s: `${inputValue}`},
    headers: {
      'X-RapidAPI-Key': '9cb680335bmsh31d44ef89085eeep1acd36jsnf36e9a9108d0',
      'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
    }
}]