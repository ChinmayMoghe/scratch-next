import { fetcher } from "@/utils/fetcher";
import { getEndpoint } from "@/utils/server/getEndpoint";

async function characters(req, res) {
  const { character } = req.query;
  const endpoint = getEndpoint(`/v1/public/characters/${character}`);
  try {
    const response = await fetcher(endpoint, req.query);
    res.status(200).json(response);
  } catch (error) {
    res.status(error?.response?.status).json(error?.response?.data);
  }
}

export default characters;
