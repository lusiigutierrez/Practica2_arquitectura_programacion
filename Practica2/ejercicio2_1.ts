
type data = {
    quoteText: string,
    quoteAuthor: string,
    quoteGenre: string

};
export interface ResponseData {
    statusCode:  number;
    message:     string;
    pagination:  Pagination;
    totalQuotes: null;
    data:        data[];
}

export interface Pagination {
    currentPage: null;
    nextPage:    null;
    totalPages:  null;
}

const fetchData = async (page: number = 1) => {
  try {
    
    const response = await fetch(
      "https://quote-garden.onrender.com/api/v3/quotes"
    );

    const data: ResponseData = await response.json(); // promesas

    console.log("Status:",data.statusCode);
    data.data.forEach(cuota => {
        console.log("---------------------------------")
        console.log("El genero: ", cuota.quoteGenre)
        console.log("El autor: ", cuota.quoteAuthor)
        console.log("El quote: ", cuota.quoteText)

      })
  } catch (error) {
   
    console.log(error);
  }
};

await fetchData(1);
await fetchData(2);
await fetchData(3); 



