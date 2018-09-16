import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'boxSizing': 'border-box'
  },
  '*:before': {
    'boxSizing': 'border-box'
  },
  '*:after': {
    'boxSizing': 'border-box'
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': '"Open Sans", sans-serif'
  }
});
