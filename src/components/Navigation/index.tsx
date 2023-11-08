import { Menu, Layout } from "antd";
import { useMemo } from "react";
import { getItem, findItem } from "./utils";
import { NavigationItems } from "./items.ts";
import { useLocation } from "react-router-dom";

const { Sider } = Layout;

export const Navigation = () => {
  const { pathname } = useLocation();

  const currentItem = useMemo(() => findItem(pathname), [pathname]);

  const items = useMemo(
    () => NavigationItems.map((item) => getItem(<div>{item}</div>, item)),
    [],
  );

  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[currentItem]}
        defaultOpenKeys={["sub1"]}
        style={{
          height: "100%",
          borderRight: 0,
        }}
        items={items}
      />
    </Sider>
  );
};
