
import React, { useContext } from "react";
import { Text, List, ListItem, Container } from "native-base";
import { Image } from "react-native";
import { RouteComponentProps, withRouter } from "react-router-native";
import AppDrawerContext from "../../contexts/appDrawerContext";

const routes = [{
    label: "Profile",
    path: "/profile"
}, {
    label: "Galeria",
    path: "/galery"
}, {
    label: "Billing",
    path: "/billing"
}];

const url = "https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd-300x238.png";

interface SideBarBase extends RouteComponentProps {

}
interface SideBarBaseProps extends SideBarBase {

}

const SideBarBase: React.FC<SideBarBaseProps> = ({ history }) => {
    const appDrawerContext = useContext(AppDrawerContext);
    const onItemPress = (path: string) => () => {
        history.push(path);
        appDrawerContext.closeDrawer();
    }
    return (
        <Container style={{ width: '100%' }}>
            <Image
                style={{ width: '100%', height: 300 }}
                source={{ uri: url }} />
            <List>
                {routes.map(({ label, path }, index) => {
                    return (
                        <ListItem key={index} button onPress={onItemPress(path)}>
                            <Text>{label}</Text>
                        </ListItem>
                    );
                })}
            </List>
        </Container>
    );
}

const SideBar = withRouter(SideBarBase);

export default SideBar;
