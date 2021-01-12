import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import Title from '../shared/Title';
import CardList from '../shared/CardList';

import { ScrollView } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
  const [movies, setMovies] = useState([
    {
      title: 'Big Buck Bunny',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/440px-Big_buck_bunny_poster_big.jpg',
      bgImageUrl:
        'https://www.nme.com/upload-content/uploads/2018/04/Screen_Shot_2018_04_24_at_6-696x442.pnghttps://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8',
      videoUrl:
        'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8',
      description:
        'Lorem ipsum dolor sit ame. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Odio facilisis mauris sit amet. odo sed egestas egestas. Penatibus et magnis dis parturient montes.',
      key: '1'
    },
    {
      title: 'HD World',
      imageUrl:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjB3b3JsZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      videoUrl:
        'https://multiplatform-f.akamaihd.net/i/multi/april11/hdworld/hdworld_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8',
      description:
        'Lorem ipsum dolor sit ame. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Odio facilisis mauris sit amet. odo sed egestas egestas. Penatibus et magnis dis parturient montes.',
      key: '2'
    },
    {
      title: 'CCTV',
      imageUrl:
        'https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2N0dnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      videoUrl:
        'https://multiplatform-f.akamaihd.net/i/multi/april11/cctv/cctv_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8',

      description:
        'Lorem ipsum dolor sit ame. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Odio facilisis mauris sit amet. odo sed egestas egestas. Penatibus et magnis dis parturient montes.',

      key: '3'
    }
  ]);

  const trendingVideos = [
    {
      title: 'Sintel',
      imageUrl:
        'https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJhZ29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      videoUrl:
        'https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8',
      description: 'lorem ipsum',
      key: '1'
    },
    {
      title: 'Parkour',
      imageUrl:
        'https://images.unsplash.com/photo-1523559745981-a34343b81db2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGFya291cnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      videoUrl:
        'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',  
      description: 'lorem ipsum',
      key: '2'
    },
    {
      title: 'Encrypted Stream',
      imageUrl:
        'https://images.unsplash.com/photo-1547190027-9156686aa2f0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZW5jcnlwdGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      videoUrl:
        'https://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8',
      description: 'lorem ipsum',
      key: '3'
    },
    {
      title: 'Eight',
      imageUrl:
        'https://images.unsplash.com/photo-1571664638276-b3e6b70499e6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZWlnaHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      videoUrl:
        'https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8',
      description: 'lorem ipsum',
      key: '4'
    }
  ];

  return (
    <ScrollView style={styles.component}>
      <View>
        <Title title={'Top Rated'} iconName={'ios-arrow-forward'} />
        <CardList data={movies} navigation={navigation} />
      </View>
      <View>
        <Title title={'Trending Videos'} iconName={'ios-arrow-forward'} />
        <CardList data={trendingVideos} navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  component: {
    padding: 5,
    backgroundColor: '#0B0A0A'
  }
});
