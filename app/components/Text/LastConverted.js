import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({ date, base, quote, conversionRate }) => (
  <Text style={styles.smallText}>
    1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
  </Text>
);


export default LastConverted;