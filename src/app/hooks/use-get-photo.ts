import { getPhoto, GetPhotoQuery, GetPhotoResponse } from "../api/api";
import { useState } from "react";

export const useGetPhoto = () => {
  const [data, setData] = useState<undefined | GetPhotoResponse>(undefined);
  const fetch = async (query: Partial<GetPhotoQuery>) => {
    const response = await getPhoto(query);
    setData(response);
  };

  return {
    fetch,
    data,
  };
};
