import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import moment from 'moment';
import { StackActions, NavigationActions } from 'react-navigation'


class ResultScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      Score:0,
      Time:null,
    }
  }

  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  componentDidMount() {

    const { answers } = this.props.navigation.state.params;
    let startTime,endTime,score = 0;
    answers.map((answers,i) => {
      if(answers.correct === true ) score++
    })

    startTime = moment(answers[0].startTime)
    endTime = moment(answers[answers.length - 1].endTime)

    const time = endTime.diff(startTime, 'minutes') // 44700
    this.setState({Score:score, Time: time})
  }
  handleClick = () => {
    // this.props.navigation.navigate('QuestionScreen');

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'QuestionScreen' })],
    });
    this.props.navigation.dispatch(resetAction);
  }
  render () {
    return(
      <View style={{flex:1,alignItems:'center',margin:10,justifyContent:'center'}}>
      <Text style={{color:'#000000',fontSize:32,fontWeight:'300',marginTop:30}}>Result</Text>
      <Text style={{color:'#000000',fontSize:24,fontWeight:'300',marginTop:45}}>Score: {this.state.Score}/10</Text>
      <Text style={{color:'#000000',fontSize:24,fontWeight:'300',marginTop:30}}>Time: {this.state.Time} Minutes</Text>

      <TouchableOpacity
      style={{backgroundColor:'#009688',borderRadius:5,height:45,
      width:300,alignItems:'center',marginTop:30,justifyContent:'center'}}
      onPress={this.handleClick}>
      <Text style={{color:'#ffffff'}}>Play agin!!</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

export default ResultScreen ;
