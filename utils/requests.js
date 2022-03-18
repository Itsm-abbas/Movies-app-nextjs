const apikey = process.env.MOVIES_API_KEY;
const apiurl = "https://api.themoviedb.org/3/";
export default {
    fetchPopular: {
        title: "Home",
        url: `${apiurl}movie/popular?api_key=${apikey}&language=en-US&page=1`
    },
    fetchUpcoming: {
        title: "Upcoming",
        url: `${apiurl}movie/upcoming?api_key=${apikey}&language=en-US&page=1`
    },
    fetchTrending: {
        title: 'Trending',
        url: `${apiurl}trending/movie/week?api_key=${apikey}`
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `${apiurl}movie/top_rated?api_key=${apikey}&language=en-US&page=1`
    },
}