import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps): JSX.Element => {
  return (
    <View>
      <Text style={styles.smallText}>Home is here</Text>
      <Button
        title="GO to Details"
        onPress={() => navigation.navigate('Details', {ProductId: '86'})}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: 15,
  },
});
