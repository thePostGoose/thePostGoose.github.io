import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ConfigProvider } from "antd";
import { red, yellow } from "@ant-design/colors";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: red[7],
              colorBgBase: yellow[3],
            },
          }}
        >
          <Layout />
        </ConfigProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
