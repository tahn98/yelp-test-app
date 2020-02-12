import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './screens/SearchScreen';
import ResultsShowScreen from './screens/ResultsShowScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: SearchScreen
    },
    ResultsShow : {
      screen : ResultsShowScreen
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Yelp Test App'
    }
  }
);

export default createAppContainer(AppNavigator);