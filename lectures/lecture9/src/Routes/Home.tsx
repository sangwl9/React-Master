import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../api";

function Home() {
    const { data, isLoading } = useQuery({
        queryKey: ["movies", "nowPlaying"],
        queryFn: getMovies,
    });
    console.log(data, isLoading);
    return (
        <div style={{ backgroundColor: "whitesmoke", height: "200vh" }}>
            Home
        </div>
    );
}

export default Home;
