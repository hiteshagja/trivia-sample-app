import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

class HomeScreen extends React.Component {

  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  constructor(){
    super();
    this.state = {
      value: null,
      radio_props:[],
      startTime: new Date()
    }
  }
  handleClick = () =>{
    if(this.state.value === null)
    {
      Alert.alert('Invalid Selection','Please choose any answer and re-try.')
      return
    }

    //is correct answer
    //log end time
    let answer = {
      startTime: this.state.startTime,
      endTime: new Date(),
      correct: (this.state.value === 0 ? true : false)
    }

    //onAnswer
    this.props.onAnswer(answer)
  }

  compare(a,b) {
    if (a.label < b.label)
    return -1;
    if (a.label > b.label)
    return 1;
    return 0;
  }

  render () {
    const { data, id } = this.props
    let  radio_props =  [
      {label: data.correct_answer, value: 0 }
    ];
    data.incorrect_answers.map((answers,i) =>(
      radio_props =  [ ...radio_props ,
        {
          label:answers,
          value:i+1,
        }
      ]


    ))
    radio_props = radio_props.sort(this.compare)
    //  alert(JSON.stringify(radio_props))
    return(
      <View >
        <Text style={{color:'#000000',fontSize:32,marginBottom:35,fontWeight:'300'}} >Question {id + 1}</Text>
        <Text style={{color:'#000000',fontSize:18,fontWeight:'300'}} >{data.question}</Text>
        <View style={{marginTop:30}} >
          <RadioForm
            radio_props={radio_props}
            initial={-1}
            buttonColor={'#000000'}
            style={{alignItems:'flex-start'}}
            onPress={(value) => {this.setState({value})}}

            />
        </View>
        <TouchableOpacity
          style={{backgroundColor:'#009688',borderRadius:5,height:45,
            width:300,alignItems:'center',marginTop:30,justifyContent:'center'}}
            onPress={this.handleClick}>
            <Text style={{color:'#ffffff'}}>Next</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

  export default HomeScreen ;
