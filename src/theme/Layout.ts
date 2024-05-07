import {StyleSheet} from 'react-native';
import {ForceInsetProp} from 'react-native-safe-area-view';

export default function ({}) {
  return StyleSheet.create({
    /* Column Layouts */
    col: {
      flexDirection: 'column',
    },
    colReverse: {
      flexDirection: 'column-reverse',
    },
    colCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    colVCenter: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    colHCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    /* Row Layouts */
    row: {
      flexDirection: 'row',
    },
    rowReverse: {
      flexDirection: 'row-reverse',
    },
    rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowVCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    rowHCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    /* Default Layouts */
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    alignItemsCenter: {
      alignItems: 'center',
    },
    alignItemsStart: {
      alignItems: 'flex-start',
    },
    alignItemsStretch: {
      alignItems: 'stretch',
    },
    alignItemsEnd: {
      alignItems: 'flex-end',
    },
    alignSelfCenter: {
      alignSelf: 'center',
    },
    alignSelfEnd: {
      alignSelf: 'flex-end',
    },
    alignSelfStart: {
      alignSelf: 'flex-start',
    },
    justifyContentCenter: {
      justifyContent: 'center',
    },
    justifyContentAround: {
      justifyContent: 'space-around',
    },
    justifyContentBetween: {
      justifyContent: 'space-between',
    },
    justifyContentEvenly: {
      justifyContent: 'space-evenly',
    },
    justifyContentEnd: {
      justifyContent: 'flex-end',
    },
    scrollSpaceAround: {
      flexGrow: 1,
      justifyContent: 'space-around',
    },
    scrollSpaceBetween: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    selfStretch: {
      alignSelf: 'stretch',
    },
    flexWrap: {
      flexWrap: 'wrap',
    },
    /* Sizes Layouts */
    fill: {
      flex: 1,
    },
    scrollFill: {
      flexGrow: 1,
    },
    flexTwo: {
      flex: 2,
    },
    flexFour: {
      flex: 4,
    },
    fullSize: {
      height: '100%',
      width: '100%',
    },
    fullWidth: {
      width: '100%',
    },
    btnwidth: {
      width: '98%',
    },
    halfWidth: {
      width: '50%',
    },
    halfHeight: {
      height: '50%',
    },
    fullHeight: {
      height: '100%',
    },
    /* Operation Layout */
    mirror: {
      transform: [{scaleX: -1}],
    },
    rotate90: {
      transform: [{rotate: '90deg'}],
    },
    rotate90Inverse: {
      transform: [{rotate: '-90deg'}],
    },
    rotate180: {
      transform: [{rotate: '180deg'}],
    },
    // Position
    relative: {
      position: 'relative',
    },
    absolute: {
      position: 'absolute',
    },
    absoluteFillObject: StyleSheet.absoluteFillObject,
    zIndex: {
      zIndex: 999,
    },
    zIndexMin: {
      zIndex: -1,
    },
    top0: {
      top: 0,
    },
    top80: {
      top: 80,
    },
    bottom0: {
      bottom: 0,
    },
    bottom60: {
      bottom: 60,
    },
    left0: {
      left: 0,
    },
    right0: {
      right: 0,
    },
    rightMin100: {
      right: -100,
    },
    overflowHidden: {overflow: 'hidden'},
    safeareaViewInsent: {
      bottom: 'never',
      top: 'always',
    } as ForceInsetProp,
  });
}
