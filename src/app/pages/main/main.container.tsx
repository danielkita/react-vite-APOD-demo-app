import React, { useEffect, useState } from "react";
import { Main } from "./main";
import {
  getRandomNonRepeatableDay,
  saveImageToLocalStorage,
} from "../../utils/utils";
import { useGetPhoto } from "../../hooks/use-get-photo";

const MainContainer = () => {
  const { fetch: fetchPhoto, data: photoData } = useGetPhoto();
  const [loading, setLoading] = useState(true);
  const [saveState, setSaveState] = useState(false);

  const onSave = () => {
    photoData?.date && saveImageToLocalStorage(photoData.date);
    setSaveState(true);
  };

  const handleImageLoad = () => {
    setLoading(false);
    setSaveState(false);
  };

  const onNext = () => {
    setLoading(true);
    fetchPhoto({
      date: getRandomNonRepeatableDay(),
    });
  };

  useEffect(() => {
    fetchPhoto({
      date: getRandomNonRepeatableDay(),
    });
  }, []);

  return (
    <div>
      {photoData && (
        <Main
          date={photoData.date}
          loading={loading}
          onLoad={handleImageLoad}
          onNext={onNext}
          onSave={onSave}
          title={photoData.title}
          url={photoData.url}
          saveState={saveState}
        />
      )}
    </div>
  );
};

export default MainContainer;
