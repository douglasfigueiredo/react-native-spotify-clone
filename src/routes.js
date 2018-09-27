import { StackNavigator } from 'react-navigation';

import Main from 'pages/main';
import Search from 'pages/search';
import Album from 'pages/album';

export default StackNavigator({
  Main: { screen: Main },
  Search: { screen: Search },
  Album: { screen: Album },
});
