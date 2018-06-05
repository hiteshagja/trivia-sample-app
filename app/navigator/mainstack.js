import HomeScreen from '../screens/home/HomeScreen';
import QuestionScreen from '../screens/question/QuestionScreen';
import ResultScreen from '../screens/result/Result';

import {
  StackNavigator,
} from 'react-navigation';

const navigationOptions = {
  headerStyle: {
    height: 60,
    backgroundColor:'#36404D',
    elevation:0,
    paddingLeft:11,
  },
};
const Mainstack = StackNavigator({
  Home:{ screen: HomeScreen},
  QuestionScreen:{screen: QuestionScreen},
  Result:{screen: ResultScreen},
},
{
  navigationOptions,
  initialRouteName: 'Home',
});
export default Mainstack;
