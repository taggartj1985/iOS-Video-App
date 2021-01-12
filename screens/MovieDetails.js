import React from 'react';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import { Ionicons, AntDesign } from '@expo/vector-icons';
const windowHeight = Dimensions.get('window').height;
import Title from '../shared/Title';
import { Video } from 'expo-av';

export default function MovieDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Video
              source = {{ uri: navigation.getParam('videoUrl') }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              shouldPlay={false}
              isLooping={false}
              useNativeControls
              style={styles.video}
            />
        <View style={styles.area}>
        <Text style={styles.titleMovie}>
                  {navigation.getParam('title')}
                </Text>
          <Title title={'Movie Info'}/>
          <View style={styles.infoTextView}>
            <Text style={styles.infoText}>
              {navigation.getParam('description')}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight
  },

   video: {
    width: '100%',
    height: 400,
  },

  imgBack: {
    width: '100%',
    height: 450
  },
  imgBackView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  goBackIcon: {
    alignSelf: 'flex-start',
    position: 'relative',
    top: 30,
    left: 20,
    color: 'white'
  },

  imgMovie: { width: 190, height: 300, borderRadius: 4, alignSelf: 'center' },
  bottomPart: {
    width: 250
  },
  area: {
    backgroundColor: 'black',
    height: '100%',
    alignSelf: 'auto'
  },
  titleMovie: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  infoPart: {
    maxWidth: 200,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  infoTextView: {
    padding: 15
  },
  infoText: {
    color: 'gray'
  },
  ratingInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  ratingText: {
    color: 'gray',
    justifyContent: 'flex-end'
  }
});
