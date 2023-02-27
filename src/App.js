import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AllSurahs from "./pages/AllSurahs";
import Home from "./pages/Home";
import PrayerTimes from "./pages/PrayerTimes";
import Searched from "./pages/Searched";
import Surah from "./pages/SingleSurah";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            colorPrimary: "#005036",
            colorPrimaryHover: "#005036",
            colorBgTextHover: "#b4c8d2",
          },
          Pagination: {
            colorPrimary: "#005036",
            colorPrimaryHover: "#005036",
            colorBgTextHover: "#b4c8d2",
          },
        },
      }}
    >
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surahs" element={<AllSurahs />} />
            <Route path="/surahs/:id" element={<Surah />} />
            <Route path="/times" element={<PrayerTimes />} />
            <Route path="/search" element={<Searched />} />
          </Routes>
        </Layout>
      </div>
    </ConfigProvider>
  );
}

export default App;
