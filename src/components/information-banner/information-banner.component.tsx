import React from 'react';
import {Text, useColorScheme, View} from 'react-native';

import styles from './information-banner.component.sass';

type InformationBannerProps = PropsWithChildren<{
  title: string;
}>;

export default function InformationBannerComponent({}: InformationBannerProps): JSX.Element {
  return <View style={styles.sectionContainer} />;
}
