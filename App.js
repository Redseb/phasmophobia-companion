/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import SplashScren from 'react-native-splash-screen';

import IntroductionCard from './src/components/IntroductionCard';
import GhostCard from './src/components/GhostCard';
import ToolCard from './src/components/ToolCard';
import EvidenceCard from './src/components/EvidenceCard';
import TimerCard from './src/components/TimerCard';

import BottomBar from './src/components/BottomBar';

import Carousel, {snapToItem} from 'react-native-snap-carousel';
import cards from './src/cards';

const {width, height} = Dimensions.get('screen');

const renderCard = ({item, index}) => {
  switch (item.type) {
    case 'intro':
      return <IntroductionCard name={item.name} desc={item.desc} />;
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
    case 'tool':
      return <ToolCard name={item.name} desc={item.desc} />;
    case 'evidence':
      return <EvidenceCard />;
    case 'timer':
      return <TimerCard />;
    case 'settings':
      console.log('Settings card');
  }
};

const App = () => {
  useEffect(() => {
    SplashScren.hide();
  }, []);
  const carouselRef = useRef('carousel');
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <View style={styles.mainContainer}>
        <StatusBar barStyle="transparent" backgroundColor="black" />
        <Carousel
          initialNumToRender={cards.length}
          ref={carouselRef}
          data={cards}
          renderItem={renderCard}
          sliderWidth={width}
          itemWidth={width / 1.2}
          layout={'default'}
          containerCustomStyle={styles.carouselContainer}
          contentContainerCustomStyle={{alignSelf: 'center'}}
          onSnapToItem={() => {
            setActiveIndex(carouselRef.current.currentIndex);
          }}
          removeClippedSubviews={true}
        />
        <BottomBar activeIndex={activeIndex} carouselRef={carouselRef} />
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
