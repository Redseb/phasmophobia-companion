/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import IntroductionCard from './src/components/IntroductionCard';
import GhostCard from './src/components/GhostCard';
import ToolCard from './src/components/ToolCard';
import EvidenceCard from './src/components/EvidenceCard';

import BottomBar from './src/components/BottomBar';

import Carousel from 'react-native-snap-carousel';
import cards from './src/cards';

const {width, height} = Dimensions.get('screen');

const renderCard = ({item, index}) => {
  switch (item.type) {
    case 'intro':
      return <IntroductionCard name={item.name} desc={item.desc} />;
      break;
    case 'ghost':
      return (
        <GhostCard
          name={item.name}
          desc={item.desc}
          strength={item.strength}
          weakness={item.weakness}
          evidence={item.evidence}
        />
      );
      break;
    case 'tool':
      return <ToolCard name={item.name} desc={item.desc} />;
      break;
    case 'evidence':
      return <EvidenceCard />;
      break;
  }
};

const App = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <StatusBar barStyle="transparent" backgroundColor="black" />
        {/* <GhostCard
          name="Demon"
          desc="A Demon is one of the worst Ghosts you can encounter. It has been known to attack without a reason."
          strength="Demons will attack more often than any other Ghost."
          weakness=" Asking a Demon successful questions on the Ouija Board won’t lower the users sanity."
          evidence="Spirit Box, Ghost Writing and Freezing Temperatures"
        /> */}
        {/* <View style={styles.carouselContainer}> */}
        <Carousel
          // ref={(c) => {
          //   this._carousel = c;
          // }}
          data={cards}
          renderItem={renderCard}
          sliderWidth={width}
          itemWidth={width / 1.2}
          layout={'default'}
          containerCustomStyle={styles.carouselContainer}
          contentContainerCustomStyle={{alignSelf: 'center'}}
        />
        {/* </View> */}

        <BottomBar />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  carouselContainer: {
    display: 'flex',
  },
});

export default App;
