import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.primary,
  },
  headerRight: {
    marginRight: metrics.basePadding,
  },
});

export default styles;
