import React, { createContext, useState, useEffect } from "react";
import { instance } from "./axios";

export const SurahsContext = createContext(null);

const SurahsContextProvider = ({ children }) => {
  const [surah, setSurah] = useState(null);
  const [audioSurah, setAudioSurah] = useState(null);
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const [forPlayer, setForPlayer] = useState(null);
  const [hafiz, setHafiz] = useState("ar.alafasy");
  const [playAudio, setPlayAudio] = useState(null);

  useEffect(() => {
    audioSurah &&
      forPlayer &&
      setPlayAudio(...audioSurah.filter((a) => a.number == forPlayer.surahNum));
  }, [forPlayer, audioSurah]);

  useEffect(() => {
    instance.get("/surah").then((r) => setSurah(r.data.data));
  }, []);

  useEffect(() => {
    instance
      .get(`/quran/${hafiz}`)
      .then((r) => setAudioSurah(r.data.data.surahs))
      .catch((err) => console.log(err));
  }, [hafiz]);

  return (
    <SurahsContext.Provider
      value={{
        hafiz,
        setHafiz,
        surah,
        lang,
        setLang,
        audioSurah,
        setAudioSurah,
        forPlayer,
        setForPlayer,
        playAudio,
        setPlayAudio,
      }}
    >
      {children}
    </SurahsContext.Provider>
  );
};

export default SurahsContextProvider;
