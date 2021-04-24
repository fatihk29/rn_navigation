import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    letterSpacing: 1,
  },
  icons: {
    position: 'absolute',
    left: 16,
    top: 15,
  },
});

export default styles;
