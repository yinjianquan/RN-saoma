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
import { StyleSheet, TextInput, Image,View, Keyboard, Text } from 'react-native';

import AV from 'leancloud-storage';
import DeviceInfo from 'react-native-device-info';
import Icon from 'react-native-vector-icons/Ionicons';
import ToastUtil from '../utils/ToastUtil';

const nearImg= require('../img/Fjdoors01.png');

let feedbackText;

class Feedback extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: '附近门店',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-pin" size={25} color={tintColor} />
    ),

  });

  constructor(props) {
    super(props);
    this.onActionSelected = this.onActionSelected.bind(this);
  }

  componentDidMount() {
    feedbackText = '';
    this.props.navigation.setParams({ handleCheck: this.onActionSelected });
  }

  onActionSelected() {
    if (feedbackText === undefined || feedbackText.replace(/\s+/g, '') === '') {
      ToastUtil.showShort('请填写建议内容哦~');
    } else {
      const feedback = AV.Object.new('Feedback');
      feedback.set('manufacturer', DeviceInfo.getManufacturer());
      feedback.set('system', DeviceInfo.getSystemName());
      feedback.set('deviceVersion', DeviceInfo.getSystemVersion());
      feedback.set('deviceModel', DeviceInfo.getModel());
      feedback.set('appVersion', DeviceInfo.getVersion());
      feedback.set('feedback', feedbackText);
      feedback.save();
      ToastUtil.showShort('您的问题已反馈，我们会及时跟进处理');
      this.textInput.clear();
      Keyboard.dismiss();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/*头部搜索框*/}
        <View style={styles.head}>
          <View style={styles.headsearch}>
            <View style={styles.headsearchimg}><Icon name="md-search" size={25} color='#b5b5b5' /></View>
            <TextInput style={{width: 300, height: 40, borderColor: 'gray', borderWidth: 0,paddingLeft: 10}} 
            placeholder="搜一搜你附近的品牌门店" placeholderTextColor="#b5b5b5"
            autoFocus={true}
            />
          </View>
          <View style={styles.headsiteimg}><Icon name="md-pin" size={25} color='#ffffff' /></View>
        </View>
        {/*主体内容模块*/}
        <View style={styles.content}>
          {/*附近分类tab*/}
          <View style={styles.contentnall}>
            <View style={styles.nallf}><Text>附近</Text></View>
            <View style={styles.nallq}><Text>全部分类</Text></View>
          </View>
          <View style={styles.contentmain}>
            <View style={styles.main}>
              <View style={styles.mainleft}><Image style={styles.nearImg} source={nearImg}/></View>
              <View style={styles.mainright}>
                <View style={styles.righttitle}><Text tyle={styles.texttitle}>角度看工会经费干活</Text><Text style={styles.textright}>12km</Text></View>
                <View style={{flexDirection: 'row',marginTop: 5,marginBottom: 5,}}><Icon name="md-pin" size={20} color='#fcd953' paddingRight= '20' /><Icon name="md-phone" size={20} color='#fcd953' /></View>
                <View><Text style={{flexDirection: 'row',fontSize: 14,color: '#b5b5b5'}}>地址：深圳市深南大道9028号华侨城威尼斯酒店旁益田假日广场B1层</Text></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    padding: 15,
    textAlignVertical: 'top'
  },
  head: {
    height: 54,
    backgroundColor: '#333333',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentnall: {
    height: 42,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10,
  },
  contentmain: {
    flexDirection: 'row',
  },
  main: {
    flex: 1,
    marginLeft: 18,
    marginRight: 18,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderStyle:"solid",
    borderColor:'#c9c9c9',
    flexDirection: 'row',
  },
  mainleft: {
    width: 84,
    height: 84,
    flexDirection: 'row',
  },
  nearImg: {
    width: 84,
    height: 84,
  },
  mainright: {
    width: 274,
    // height: 84,
    flexDirection: 'row',
    marginLeft: 20,
    flexWrap: 'wrap',
    
  },
  headsearch: {
    flexDirection: 'row',
    width: 330,
    height: 36,
    backgroundColor: '#8b8b8b',
    borderRadius: 18,
    overflow: 'hidden',
    marginTop: 9,
    marginLeft: 18,
    
  },
  headsearchimg: {
    paddingTop: 5,
    paddingLeft: 10,
  },
  headsiteimg: {
    marginRight: 30,
    marginTop: 10,
  },
  nallf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth:1,
    borderStyle:"solid",
    borderColor:'#c9c9c9'
  },
  nallq: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  righttitle: {
    width: 274,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  texttitle: {
    color: '#333333',
  },
  textright: {
    color: '#b5b5b5',
    
  }
});

export default Feedback;
