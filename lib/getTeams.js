import axios from "axios";
const client = axios.create({
  baseURL: "https://api.balldontlie.io/v1/",
  timeout: 100000,
  headers: { Authorization: "5305eae1-3a57-4a1f-b82e-5e1fe6bff8c7" },
});

export async function getTeams() {
  const res = await client.get("/teams");
  console.log(res);
  return res;
}

export async function searchPlayerByString(string) {
  const res = await client.get("/players", {
    params: {
      search: string,
      per_page:100
    },
  });
  return res.data.data;
}
