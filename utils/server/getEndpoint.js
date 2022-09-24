import { hashData } from "@/utils/server/hash";

export const getEndpoint = (path, req) => {
  const ts = Date.now();
  const hash = hashData(
    "md5",
    `${ts}${process.env.MARVEL_PRIVATE_API_KEY}${process.env.MARVEL_PUBLIC_API_KEY}`,
    "hex"
  );
  return `${process.env.NEXT_PUBLIC_MARVEL_BASE_URL}${path}?ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_API_KEY}&hash=${hash}`;
};
