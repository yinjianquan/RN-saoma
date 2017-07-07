
import React from 'react';
import { StyleSheet, TextInput, Image,View, Keyboard, Text ,TouchableOpacity} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar
} from 'react-native-scrollable-tab-view';
import AV from 'leancloud-storage';
import DeviceInfo from 'react-native-device-info';
import Icon from 'react-native-vector-icons/Ionicons';
import ToastUtil from '../utils/ToastUtil';
const listHead = require('../img/listHead.jpg');

class Fake extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: '举报假货',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-pin" size={25} color={tintColor} />
    ),
    header : null
  });

  render() {
    return (
    //   <View >
        <ScrollableTabView 
            renderTabBar={() => (
                <DefaultTabBar style={styles.TabView} tabStyle={styles.tab} textStyle={styles.tabText} />
            )}
          tabBarBackgroundColor="#333333"
          tabBarUnderlineStyle={styles.tabBarUnderline}
          tabBarActiveTextColor="#3e9ce9"
          tabBarInactiveTextColor="#aaaaaa"
        >
        
            <View style={styles.content} tabLabel='假货爆料'>
                <TouchableOpacity >
                    <View style={styles.containerItem}>
                        <Image style={styles.itemImg} source={ listHead } />
                        <View style={styles.itemRightContent}>
                            <Text style={styles.title}>
                            遇到假货记得要打12315哦
                            </Text>
                            <View style={styles.itemRightBottom}>
                            <Text style={styles.userName}>
                                网易云音乐
                            </Text>
                            {/*<TimeAgo style={styles.timeAgo} time={article.date} />
                            */}
                            <Text style={styles.timeAgo}>
                                2018-06-24
                            </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.content} tabLabel='我的举报'>
                <Text>我的举报</Text>
            </View>
        </ScrollableTabView>
    //    </View>
    );
  }

//   renderItem() {
//     return (
    // <TouchableOpacity >
    //     <View style={styles.containerItem}>
    //       <Image style={styles.itemImg} source={ listHead } />
    //       <View style={styles.itemRightContent}>
    //         <Text style={styles.title}>
    //           遇到假货记得要打12315哦
    //         </Text>
    //         <View style={styles.itemRightBottom}>
    //           <Text style={styles.userName}>
    //             网易云音乐
    //           </Text>
    //           {/*<TimeAgo style={styles.timeAgo} time={article.date} />
    //           */}
    //           <Text style={styles.timeAgo}>
    //             2018-06-24
    //           </Text>
    //         </View>
    //       </View>
    //     </View>
    //   </TouchableOpacity>
//     );
//   }
}

const styles = StyleSheet.create({
  TabView:{
    height:75
  },
  tab: {
    paddingBottom: 0,
  },
  tabText: {
    fontSize: 16
  },
  tabBarUnderline: {
    opacity: 0
    // backgroundColor: rgba(0,0,0,0)
  },
  contentHead: {
    // borderRadius: 18,
    // width: 170,
    // height: 35,
    // // overflow: 'hidden',
    // backgroundColor: '#8b8b8b',
  },
  container: {
    // flex: 1,
    // // flexDirection: 'column',
    // backgroundColor: '#333333'
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  itemImg: {
    width: 88,
    height: 66,
    marginRight: 10
  }, 
  itemRightContent: {
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    fontSize: 14,
    textAlign: 'left',
    color: 'black'
  },
  itemRightBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userName: {
    flex: 1,
    fontSize: 14,
    color: '#87CEFA',
    marginTop: 5,
    marginRight: 5
  },
  timeAgo: {
    fontSize: 14,
    color: '#aaaaaa',
    marginTop: 5
  },

});

export default Fake;
