import { Route, Routes } from "react-router-dom";
import { Layout as LayoutBase } from "antd";
import { Header } from "../Header";
import { Navigation } from "../Navigation";
import {
  AboutPage,
  ContactPage,
  ContributionsPage,
  GalleryPage,
  ProfilePage,
  TimelinePage,
} from "../Pages";

export const Layout = () => {
  return (
    <LayoutBase>
      <Header />
      <LayoutBase>
        <Navigation />
        <LayoutBase style={{ padding: "0 24px 24px" }}>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/profiles" element={<ProfilePage />} />
            <Route path="/contributions" element={<ContributionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </LayoutBase>
      </LayoutBase>
    </LayoutBase>
  );
};
