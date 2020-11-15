/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef, useState, useEffect } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

import IntroductionCard from './src/components/IntroductionCard';
import GhostCard from './src/components/GhostCard';
import ToolCard from './src/components/ToolCard';
import EvidenceCard from './src/components/EvidenceCard';
import TimerCard from './src/components/TimerCard';
import SettingsCard from './src/components/SettingsCard';

import BottomBar from './src/components/BottomBar';

import Carousel, { snapToItem } from 'react-native-snap-carousel';
import cards from './src/cards';

import { storeData, getData, LANGUAGE_KEY } from "./src/util/dataStorage";
import { introCardSwitch, ghostCardSwitch, toolCardSwitch } from "./src/util/translationSwitch";

const { width, height } = Dimensions.get('screen');

const renderCard = (item, index, language) => {
  let card = item;
  switch (item.type) {
    case 'intro':
      card = introCardSwitch(item, language);
      return <IntroductionCard name={card.name} desc={card.desc} />;
    case 'ghost':
      card = ghostCardSwitch(item, language);
      return (
        <GhostCard
          name={card.name}
          desc={card.desc}
          strength={card.strength}
          weakness={card.weakness}
          evidence={card.evidence}
        />
      );
    case 'tool':
      card = toolCardSwitch(item, language);
      return <ToolCard name={card.name} desc={card.desc} />;
    case 'evidence':
      return <EvidenceCard />;
    case 'timer':
      return <TimerCard />;
    case 'settings':
      return <SettingsCard />;
  }
};

const App = () => {
  const [language, setLanguage] = useState("ru");
  const carouselRef = useRef('carousel');
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    getData(LANGUAGE_KEY, setLanguage);
    storeData(LANGUAGE_KEY, 'ru')
    SplashScren.hide();
  }, []);

  return (
    <>
      <View style={styles.mainContainer}>
        <StatusBar barStyle="transparent" backgroundColor="black" />
        <Carousel
          initialNumToRender={cards.length}
          ref={carouselRef}
          data={cards}
          renderItem={({ item, index }) => { return renderCard(item, index, language) }}
          sliderWidth={width}
          itemWidth={width / 1.2}
          layout={'default'}
          containerCustomStyle={styles.carouselContainer}
          contentContainerCustomStyle={{ alignSelf: 'center' }}
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
