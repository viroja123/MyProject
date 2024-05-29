import {StyleSheet} from 'react-native';
import {commonThemeColor} from '../../theme/Colors';
import {colors} from '../../theme';

const styles = StyleSheet.create({
  mainViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  leftIcon: {backgroundColor: '#F7F7F9', paddingRight: 20},
  centerText: {textAlign: 'center', fontSize: 20, fontWeight: '500'},
});

export default styles;
