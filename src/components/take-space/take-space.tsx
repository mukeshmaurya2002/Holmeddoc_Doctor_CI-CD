import React from 'react';
import {View} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface TakeSpaceProp {
  space?: number;
}

const TakeSpace = (props: TakeSpaceProp) => {
  const {space = moderateScale(20)} = props;
  return <View style={{padding: moderateScale(space)}} />;
};

export default TakeSpace;
