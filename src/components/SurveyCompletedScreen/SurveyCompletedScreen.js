import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import { withNavigation } from 'react-navigation';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';

class SurveyCompletedScreen extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: GREEN,
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Survey Results',
            headerTitleStyle: {
                flex: 1,
            }
        };
    };
    

    render() {
        const answers = this.props.route.params.surveyAnswers;


        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <ScrollView>
                       
                        <Button
                            onPress={this.props.navigation.navigate('Home')}
                            color={GREEN}
                            backgroundColor={GREEN}
                            title={'CERRAR'}
                        />
                    </ScrollView>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PURPLE,
    },
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
        maxHeight: '80%',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
});

export default withNavigation(SurveyCompletedScreen);
