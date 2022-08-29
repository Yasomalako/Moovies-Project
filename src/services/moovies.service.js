const BASIC_API = "https://my-json-server.typicode.com/Jeck99/movies-api/movies"
export const getMoovies = async () => {
    try {
        return await fetch(BASIC_API)
            .then(response => response.json())
    }catch(error){console.log("error")}
    finally{}
}
