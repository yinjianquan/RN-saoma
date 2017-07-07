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
import { StyleSheet, Image, Text, Linking, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';

const bg = require('./../img/test1.gif')
// const logo = require('./../img/s.gif')
class CheckQuality extends React.Component {
  static navigationOptions = {
    title: '正品验证',
    tabBarIcon: ({ tintColor }) => (
      // <Text style={{fontFamily:'iconfont',fontSize:25,color:tintColor,marginTop:22}}>&#xe64e;</Text>
      <Icon name="md-information-circle" size={25} color={tintColor} />
    ),
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar  
          animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
          hidden={false}  //是否隐藏状态栏。  
          backgroundColor={'transparent'} //状态栏的背景色  
          translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
          barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
        ></StatusBar>
        <Image source={bg} style={ styles.bg }>
          <View style={[styles.center]}>
            <Text style={styles.title}>
              扫商品外包装与内包装条形码/二维码
            </Text>
            <Text style={styles.subtitle}>
              可验商品是否原装正品
            </Text>
            <View >
              <Button 
                style={styles.button}
                text='开始扫描'
                onPress={()=>{
                  this.aaaa()
                }}>
              </Button>
              
            </View>
          </View>
        </Image>
      </View>
    );
  }
  aaaa () {
    const { navigate } = this.props.navigation;
    navigate('Scan');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  bg: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:null,
    height:null,
    backgroundColor:'rgba(0,0,0,0)',
  },
  center: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    width: 385,
    height: 385,
    marginTop: -50,
    marginBottom: -50
  },
  version: {
    fontSize: 16,
    textAlign: 'center',
    color: '#aaaaaa',
    marginTop: 5
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
    marginTop: 80
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff'
  },
  button: {
    marginTop: 310,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderWidth: 1,
    borderColor: '#fcd953',
    borderRadius: 25,
    width: 160,
    paddingTop: 13.6,
    paddingBottom: 13.6,
    textAlign: 'center',
    fontSize: 16,
    color: '#fcd953',
  }
});

export default CheckQuality;
