import React from 'react';
import {StatusBar, View} from 'react-native';
import MainStack from './navigator/mainstack';

export default function TriviaQuizApp()
{
  return (
    <View style={{flex:1}}>
      <StatusBar
        backgroundColor="rgba(12,52,61,1)"
        barStyle="light-content"
        />
        <MainStack/>
    </View>
    )
}
