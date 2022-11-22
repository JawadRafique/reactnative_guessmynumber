import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import GuessMyNumber from '../../components/organism/SelectNumber';
import useOrientation from '../../hooks/useOrientation';
import { ThemeColors } from '../../utils/constant';

function Home() {
    const {width, height} = useOrientation()
    // console.log("orientation",orientation)

    return (
      <View style={{flex: 1, width: width ,backgroundColor: ThemeColors.backgroundPrimary  }}>
        <GuessMyNumber />
      </View>
    );
}

export default Home;
