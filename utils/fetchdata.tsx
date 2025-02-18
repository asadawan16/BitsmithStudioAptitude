import axios from "axios";

export async function fetchData() {
  try {
    const response = await axios.get(
      ` https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
export async function fetchstory(id: number) {
  try {
    const response = await axios.get(
      ` https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
