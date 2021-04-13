import { stringify } from "query-string";

const API_ROOT_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

export interface GetPhotoQuery {
  date: string; // Date;
  start_date: string; // Date;
  end_date: string; // Date;
  count: number;
  thumbs: boolean;
  api_key: string;
}

export interface GetPhotoResponse {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

const prepareQuery = (query: Partial<GetPhotoQuery>) => {
  const photoQuery = {
    ...query,
    api_key: API_KEY,
  };
  return stringify(photoQuery);
};

export const getPhoto: (
  query: Partial<GetPhotoQuery>
) => Promise<GetPhotoResponse> = (query) =>
  fetch(`${API_ROOT_URL}?${prepareQuery(query)}`).then((r) => r.json());
