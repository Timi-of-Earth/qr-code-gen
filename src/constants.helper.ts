let constants: {page: number, key: string, c: number} = {
    page: 1,
    key: ``,
    c: 0,
}

let movieQuery = () =>  `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MDB_API_KEY}&query=the&page=${constants.page}`

const updateConstants = (): void => {
        constants.page = Math.floor(Math.random()*800);
        constants.key = Math.floor(Math.random()*100000).toString();
        constants.c = Math.random()*100;
}

export {constants, updateConstants, movieQuery}