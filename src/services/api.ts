const API_URL = "https://jsonplaceholder.typicode.com";
export const fetchPostsAPI = async () => {
    try {
        const res = await fetch(`${API_URL}/posts`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
    return [];
};
