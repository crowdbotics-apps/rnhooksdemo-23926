import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList194432Navigator from '../features/ArticleList194432/navigator';
import ArticleList194431Navigator from '../features/ArticleList194431/navigator';
import ArticleList194430Navigator from '../features/ArticleList194430/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList194432: { screen: ArticleList194432Navigator },
ArticleList194431: { screen: ArticleList194431Navigator },
ArticleList194430: { screen: ArticleList194430Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
