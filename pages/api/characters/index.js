import { fetcher } from "@/utils/fetcher";
import { getEndpoint } from "@/utils/server/getEndpoint";

async function characters(req, res) {
  const endpoint = getEndpoint("v1/public/characters");
  try {
    const response = await fetcher(endpoint, req.query);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default characters;
