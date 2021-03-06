/**
 *
 * Copyright 2015-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { StackNavigator, TabNavigator } from 'react-navigation';
import Splash from '../pages/Splash';
import CategoryContainer from '../pages/Fake';
import MainContainer from '../containers/MainContainer';
import WebViewPage from '../pages/WebViewPage';
import Feedback from '../pages/Feedback';
import About from '../pages/About';
import CheckQuality from '../pages/CheckQuality';
import Scan from '../pages/Scan';

const TabContainer = TabNavigator(
  {
    Main: { screen: MainContainer },
    Feedback: { screen: Feedback },
    CheckQuality: { screen: CheckQuality },
    Category: { screen: CategoryContainer },
    About: { screen: About }
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#FCD953',
      inactiveTintColor: '#999999',
      showIcon: true,
      style: {
        height:58,
        backgroundColor: '#fff'
      },
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {
        padding: 0
      }
    }
  }
);

const App = StackNavigator(
  {
    Splash: { screen: Splash },
    Category: {
      screen: CategoryContainer,
      navigationOptions: {
        headerLeft: null
      }
    },
    Home: {
      screen: TabContainer,
      navigationOptions: {
        headerLeft: null
      }
    },
    Web: { screen: WebViewPage },
    Scan: { screen: Scan }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        height:75,
        backgroundColor: '#333333'
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 15
      },
      headerTintColor: '#fff'
    }
  }
);

export default App;
