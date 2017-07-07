/**
 *
 * Copyright 2016-present reading
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
import React from 'react';
import { StyleSheet, Image, Text, Linking, View } from 'react-native';

import DeviceInfo from 'react-native-device-info';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';

const SHOW_API = 'https://www.showapi.com';
const READING_REPO = 'https://github.com/attentiveness/reading';
const aboutLogo = require('../img/header.png');
const codeLogo = require('../img/qrcode.png');
const arrowsright = require('../img/arrowsright.png');

class About extends React.Component {
  static navigationOptions = {
    title: '个人中心',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-information-circle" size={25} color={tintColor} />
    ),
    headerRight: (
      <Icon.Button
        name="ios-settings"
        size={25}
        backgroundColor="transparent"
        underlayColor="transparent"
        activeOpacity={0.8}
        onPress={() => Linking.openURL(READING_REPO)}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.leftView}>
              <Image style={styles.img} source={aboutLogo}/>
              <View style={styles.headerText}>
                <Text style={[styles.username,styles.color3]}>从你的全世界路过</Text>
                <Text style={styles.id}>ID:213214343</Text>
              </View>
            </View>
            <View style={styles.rightView}>
              <Image style={styles.codeImg} source={codeLogo}/>
              <Image style={styles.rightImg} source={arrowsright}/>
            </View>
          </View>
          <View style={styles.pdl15}>
            <View style={[styles.line,styles.borderB1]}>
              <View style={styles.center}>
                <Text style={styles.color3}>扫描记录</Text>
              </View>
              <View style={styles.rightView}>
                <Image style={styles.rightImg} source={arrowsright}/>
              </View>
            </View>
            <View style={[styles.line,styles.borderB1]}>              
                <View style={styles.center}>
                  <Text style={styles.color3}>举报进度</Text>
                </View>
                <View style={styles.rightView}>
                  <Image style={styles.rightImg} source={arrowsright}/>
                </View>
            </View>
            <View style={[styles.line]}>
              <View style={styles.center}>
                <Text style={styles.color3}>我的收藏</Text>
              </View>
              <View style={styles.rightView}>
                  <Image style={styles.rightImg} source={arrowsright}/>
              </View>
            </View>
          </View>
          <View style={styles.pdl15}>
            <View style={[styles.line,styles.borderB1]}>
              <View style={styles.center}>
                <Text style={styles.color3}>直购订单</Text>
              </View>
              <View style={styles.rightView}>
                <Image style={styles.rightImg} source={arrowsright}/>
              </View>
            </View>
            <View style={[styles.line,styles.borderB1]}>
              <View style={styles.center}>
                <Text style={styles.color3}>我的代言人</Text>
              </View>
              <View style={styles.rightView}>
                  <Image style={styles.rightImg} source={arrowsright}/>
              </View>
            </View>
            <View style={[styles.line]}>
              <View style={styles.center}>
                <Text style={styles.color3}>我的消息</Text>
              </View>
              <View style={styles.rightView}>
                  <Image style={styles.rightImg} source={arrowsright}/>
              </View>
            </View>
          </View>
          <View style={styles.pdl15}>
            <View style={[styles.line,styles.borderB1]}>
              <View style={styles.center}>
                <Text style={styles.color3}>推荐给好友</Text>
              </View>
              <View style={styles.rightView}>
                <Image style={styles.rightImg} source={arrowsright}/>
              </View>
            </View>
            <View style={[styles.line]}>
              <View style={styles.center}>
                <Text style={styles.color3}>关于我们</Text>
              </View>
              <View style={styles.rightView}>
                  <Image style={styles.rightImg} source={arrowsright}/>
              </View>
            </View>
          </View>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:800,
    backgroundColor: '#f8f8f8'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:88,
    backgroundColor: '#fff',
    marginBottom: 12
  },
  img:{
    marginLeft:17,
    width : 58,
    height : 58,
    borderRadius:29
  },
  leftView:{
    flexDirection: 'row',
  },
  rightView:{
    flexDirection: 'row',
    alignItems:'center'
    // justifyContent:'flex-end',
  },
  codeImg:{
    marginRight:15,
    width:20,
    height:20
  },
  rightImg:{
    marginRight:15,
    justifyContent: 'center',
    alignItems:'center',    
    width:10,
    height:15
  },
  headerText:{
    justifyContent: 'center',
    alignItems:'flex-start',
    marginLeft: 12,
  },
  username:{
    fontSize: 15,
    marginTop:5,
    marginBottom: 5,
  },
  id:{
    color:'#b5b5b5'
  },
  pdl15:{
    backgroundColor: '#fff',
    paddingLeft:16,
    marginBottom: 12
  },
  borderB1:{
    borderBottomWidth:1,
    borderStyle:"solid",
    borderColor:'#c9c9c9'
  },
  line:{
    height:50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  center: {
    paddingTop:17,
  },
  color3:{
    color:'#333334',
  }
});

export default About;
