import { View, Text } from "react-native";
import Details from "./Details";

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>HomeScreen</Text>
            <Details/>
        </View>
    );
}

export default HomeScreen;