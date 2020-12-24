import React, { useState } from "react";
import { Drawer } from "native-base";
import AppDrawerContext from "../../contexts/appDrawerContext";
import SideBar from "../SideBar";

const AppDrawerContextProvider: React.FC = ({ children }) => {
    const [drawer, setDrawer] = useState(null);
    const closeDrawer = () => {
        drawer._root.close();
    }

    const openDrawer = () => {
        drawer._root.open();
    }

    const { Provider } = AppDrawerContext;
    return (
        <Provider value={{ closeDrawer, openDrawer }}>
            <Drawer
                ref={(ref) => { setDrawer(ref); }}
                content={<SideBar />} >
                {children}
            </Drawer>
        </Provider>
    )
};

export default AppDrawerContextProvider;
