import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WelcomeScreen  from '../screens/WelcomeScreen';
import Questions  from '../screens/Questions';

const screens = {
    WelcomeScreen: {
        screen: WelcomeScreen
    },
    Questions: {
        screen: Questions
    }
}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);