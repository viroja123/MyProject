import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  mainTextStyle: {
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 34,
    textAlign: 'center',
    color: '#1B1E28',
    marginTop: 40,
  },
  subTextStyle: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    marginVertical: 12,
    color: '#7D848D',
  },
  mainView: {
    paddingHorizontal: 20,
  },
  underlineStyleBase: {
    width: 64,
    height: 60,
    borderWidth: 1,
    color: 'black',
    borderRadius: 12,
    backgroundColor: '#1B1E281D',
    fontSize: 20,
    fontWeight: '400',
  },
  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  otpTextStyle: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    color: '#1B1E28',
  },
});
