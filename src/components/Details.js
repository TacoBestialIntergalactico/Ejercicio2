import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View, Text, Button} from 'react-native';

const Details = () => {
    const navigation = useNavigation();
    return (
        <View style={Styles.cont}>
            <Text style={Styles.textB}>Details Screen</Text>
            <Button title="Configuration" onPress={() => navigation.navigate('Configuration')} />
        </View>
    );
}

const Styles = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        fontSize: 24,
        fontStyle: 'italic',
    },
    textB: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    }
});

export default Details;