import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Config} from '../common';
import moment from 'moment';

const PlacedBets = ({bet, placedOn}) => {
  return (
    <View style={styles.container}>
      <View style={styles.betWrapper}>
        <View style={styles.betInfo}>
          <Text style={styles.betId}>BET ID #{bet._id}</Text>
          <Text>${bet.amount}</Text>
        </View>
        <View style={styles.betInfo}>
          <Text>{moment(bet.createdAt).format('DD/MM/YYYY hh:m A')}</Text>
          <Text>{bet.result ? 'Finished' : 'Pending'}</Text>
        </View>
      </View>
      <View style={styles.transactionWrapper}>
        <View style={styles.betInfo}>
          <Text style={styles.betId}>Placed On</Text>
          <Text>{placedOn}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    marginVertical: 10,
    flex: 1,
    flexDirection: 'column',
    borderRadius: 10,
  },
  betWrapper: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 10,
  },
  betInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
    paddingHorizontal: 20,
  },
  betId: {
    color: Config.highlightColor,
    fontWeight: 'bold',
  },
  transactionWrapper: {
    backgroundColor: '#f5f5f5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 10,
  },
});

export default PlacedBets;
