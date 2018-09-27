import { StackNavigator } from 'react-navigation';
import { colors } from 'styles';

import Main from 'pages/main';
import Favorites from 'pages/favorites';

export default StackNavigator({
  Main: { screen: Main },
  Favorites: { screen: Favorites },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primaryDark,
    },
    headerTintColor: colors.white,
    headerBackTitle: null,
  },
});
