import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/loader";
import AllSurahs from "./pages/AllSurahs";
import Home from "./pages/Home";
import PrayerTimes from "./pages/PrayerTimes";
import Surah from "./pages/SingleSurah";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surahs" element={<AllSurahs />} />
          <Route path="/surahs/:id" element={<Surah />} />
          <Route path="/times" element={<PrayerTimes />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
