import React from 'react';
import { View, Text } from 'react-native';

const Theme = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 23, marginTop: 10 }}>Change Theme</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>
        Theme Change
      </Text>
    </View>
  );
};

export default Theme;