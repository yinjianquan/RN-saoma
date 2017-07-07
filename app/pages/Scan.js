import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Toast
} from 'react-native';
import Camera from 'react-native-camera';
import { QRScannerView } from 'ac-qrcode';
import Button from '../components/Button';
import { request } from '../utils/RequestUtil';
// import BarcodeScanner from 'react-native-barcode-scanner-universal'
// const QRCodeScreen = require('../utils/QRCodeScreen');

class Scan extends Component {
  static navigationOptions = {
    title: '正品扫描'
  };
  constructor(props) {  
    super(props);
    this.camera = null;
    this.state = {
      torchMode: 'off',
      cameraType: 'back',
      scan: true
    };
    this.takePicture = this.takePicture.bind(this);
  }
 
  render() {
    return (
      < QRScannerView
        style={{flex:1,alignItems:'center'}}
        onScanResultReceived={this.barcodeReceived.bind(this)}
        renderTopBarView={() => this._renderTitleBar()}
        renderBottomMenuView={() => this._renderMenu()}
      />
    )
  }

  _renderTitleBar(){
    return(
      <Text
        style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
      >这里添加标题</Text>
    );
  }

  _renderMenu() {
    return (
      <Button
        style={styles.bottomButton}
        text='扫描记录'
      />
    )
  }

  barcodeReceived = async (e) => {
    if (this.state.scan) {
      await this.setState({scan:false})
      fetch('http://192.168.120.108:8888/', {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then(res=> {
        Alert.alert(res)
        if (res.ok) {
          res.json().then(data => {
            this.setState({scan:true})
            Alert.alert(data.num)
          })
        }
      }).catch(e=> {
        alert(e)
        this.setState({scan:true})
      })      
    }
    
    
  }
  
  takePicture(data) {
    alert(data)
    // this.camera.capture()
    //   .then((data) => console.log(data))
    //   .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    textAlign: 'center',
    flex: 0,
    // backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 50
  },
  bottomButton: {
    color:'white',
    textAlign:'center',
    fontSize:20,
    padding:12,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 6
  }
});

export default Scan;