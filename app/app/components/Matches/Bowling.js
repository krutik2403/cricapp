import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Config} from '../../common';

const {width} = Dimensions.get('window');

const Bowling = ({bowling, bowlingTeam}) => {
  return (
    <View style={styles.bowlingContainer}>
      <View style={styles.tableHeading}>
        <View style={styles.playerInfo}>
          <Text style={styles.headingText}>Bowler</Text>
        </View>
        <View style={styles.scoreInfo}>
          <Text style={styles.headingScore}>O</Text>
          <Text style={styles.headingScore}>M</Text>
          <Text style={styles.headingScore}>R</Text>
          <Text style={styles.headingScore}>W</Text>
          <Text style={styles.headingScore}>ER</Text>
        </View>
      </View>
      <View>
        {bowling.map(player => {
          // console.log(player);
          return (
            <View key={player.id}>
              {player.scoreboard === bowlingTeam && (
                <View style={styles.tableRow}>
                  <View style={styles.playerScore}>
                    <View style={styles.playerInfo}>
                      <Text style={styles.playerName}>
                        {`${player.bowler.fullname}${
                          player.active === true ? ' *' : ''
                        }`}
                      </Text>
                    </View>
                    <View style={styles.scoreInfo}>
                      <Text style={styles.score}>{player.overs}</Text>
                      <Text style={styles.score}>{player.medians}</Text>
                      <Text style={styles.score}>{player.runs}</Text>
                      <Text style={styles.score}>{player.wickets}</Text>
                      <Text style={styles.score}>{player.rate.toFixed(1)}</Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bowlingContainer: {
    // padding: 20,
    flexDirection: 'column',
  },
  tableHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: '#cccccc',
    borderTopWidth: 1,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    paddingVertical: 8,
    // marginBottom: 10,
    backgroundColor: Config.primaryColor,
    paddingHorizontal: 20,
  },
  tableRow: {
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  playerScore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playerInfo: {
    flex: 0,
    flexWrap: 'wrap',
    width: width / 2,
  },
  scoreInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  score: {minWidth: 30, maxWidth: 30, textAlign: 'right'},
  headingText: {color: '#fff'},
  headingScore: {minWidth: 30, maxWidth: 30, textAlign: 'right', color: '#fff'},
  playerName: {color: Config.primaryColor},
});

export default Bowling;
