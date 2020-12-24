
import { createContext } from "react";

interface AppDrawerContext {
    closeDrawer: () => void;
    openDrawer: () => void;
}

const AppDrawerContext = createContext<AppDrawerContext>({
    closeDrawer: () => { },
    openDrawer: () => { }
});


export default AppDrawerContext;