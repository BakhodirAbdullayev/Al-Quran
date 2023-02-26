import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/loader";
import AllSurahs from "./pages/AllSurahs";
import PrayerTimes from "./pages/PrayerTimes";
import Surah from "./pages/SingleSurah";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <h1 style={{ height: "100vh", background: "#05036" }}>home</h1>
            }
          />
          <Route path="/surahs" element={<AllSurahs />} />
          <Route path="/surahs/:id" element={<Surah />} />
          <Route path="/times" element={<PrayerTimes />} />
          <Route path="/fav" element={<Loader />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
