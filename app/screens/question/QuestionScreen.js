import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import Question from './Question'

class HomeScreen extends React.Component {
  constructor(){
    super();
    this.answers = []
    this.state = {
      data: [],
      id : 0,
    }
  }

  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }

  onAnswer = (answer) =>{
    this.answers.push(answer)

    let id = this.state.id

    if(id === 9)
    {
      id = 0
      this.props.navigation.navigate('Result',{answers:this.answers});
    }
    else{
      id++
    }

    this.setState({id:id})

  }
  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=10')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({data:responseJson.results})
    })
    .catch((error) => {
      console.error(error);
    });


  }

  render () {
    const {data, id} = this.state
    if (data.length === 0) return <View style={{flex:1,alignItems:'center',margin:10,justifyContent:'center'}}><ActivityIndicator size="large" color="#009688" /></View>

    const questionData = data[id]

    return(
      <View style={{flex:1,margin:10}}>
      <Question key={id} id={id} data={questionData} onAnswer={this.onAnswer}/>
      </View>
    )
  }
}

export default HomeScreen ;
