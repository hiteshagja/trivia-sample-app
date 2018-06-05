import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  handleClick = () =>{
    this.props.navigation.navigate('QuestionScreen');
  }

  render () {
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'#000000',fontSize:32,marginBottom:35,fontWeight:'300'}} >Trivia Test</Text>

      <TouchableOpacity
      style={{backgroundColor:'#009688',borderRadius:5,height:45,width:300,alignItems:'center',justifyContent:'center'}}
      onPress={this.handleClick}>
      <Text style={{color:'#ffffff'}}>Start</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

export default HomeScreen ;
