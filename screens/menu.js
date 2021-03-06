import React,{useState} from 'react';
import {View, Text, Image,ScrollView, StyleSheet ,Dimensions,TouchableOpacity,TextInput ,StatusBar,FlatList} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {Categories, COLOURS} from '../assets/database/items';
import Material from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
var {width} = Dimensions.get('window');

const Menu =({navigation}) => {
  const [currentSelected, setCurrentSelected] = useState([0]);

  const renderCategories = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setCurrentSelected(index)}>
        <View
          style={{
            width: 120,
            height: 180,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor:
              currentSelected == index ? '#33DDFF' : COLOURS.white,
            borderRadius: 20,
            margin: 10,
            elevation: 5,
          }}>
          <View style={{width: 60, height: 60}}>
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'center',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              color: COLOURS.black,
              fontWeight: '600',
            }}>
            {item.name}
          </Text>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor:
                currentSelected == index ? COLOURS.white : '#a12adb',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="angle-right"
              style={{
                fontSize: 12,
                color: currentSelected == index ? COLOURS.black : COLOURS.white,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItems = (data, index) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        style={{
          width: '100%',
          height: 180,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() =>
          navigation.push('Details', {
            name: data.name,
            price: data.price,
            image: data.image,
            size: data.size,
            crust: data.crust,
            delivery: data.delivery,
            ingredients: data.ingredients,
            isTopOfTheWeek: data.isTopOfTheWeek,
            navigation: navigation,
          })
        }>
        <View
          style={{
            width: '90%',
            height: 160,
            backgroundColor: COLOURS.white,
            borderRadius: 20,
            elevation: 4,
            position: 'relative',
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{marginBottom: 50}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                display: data.isTopOfTheWeek ? 'flex' : 'none',
              }}>
              <FontAwesome
                name="crown"
                style={{
                  fontSize: 10,
                  color: COLOURS.accent,
                }}
              />
              
            </View>
            <Text
              style={{
                fontSize: 22,
                color: COLOURS.black,
                fontWeight: 'bold',
                paddingTop: 10,
              }}>
              {data.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
                opacity: 0.5,
              }}>
              {data.weight}
            </Text>
          </View>
          <View style={{width: 150, height: 150, marginRight: -45}}>
            <Image
              source={data.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 85,
                height: 50,
                backgroundColor: '#a12adb',
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo
                name="plus"
                style={{fontSize: 18, color: COLOURS.white}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <AntDesign
                name="star"
                style={{fontSize: 12, color: COLOURS.black, paddingRight: 5}}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: COLOURS.black,
                  fontWeight: 'bold',
                }}>
                {data.rating}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

   
    return(
        <View>
        <View style={styles.headerMain}>
        <View style={styles.headerFlex}>
          <TouchableOpacity onPress={()=> navigation.openDrawer()}>
            <Icons name="menu-outline" size={40} color="#333" />
          </TouchableOpacity>
          <TextInput 
          placeholder="Search..." 
          placeholderTextColor="#333"
          style={styles.searchBox}
          />
           <TouchableOpacity>
            <Icons name="search-outline" size={30} color="#333" style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>
    
      <ScrollView showsVerticalScrollIndicator={false}>
      <View >
            <View >
                <Text style={styles.text}>Hello</Text>
                <Text style={styles.subtext}>Welcome to Aliz Restuarant!</Text>
            </View>
      </View >
        <View
          style={{
            width: '100%',
            height: '90%',
            backgroundColor: COLOURS.white,
            position: 'relative',
          }}>
          <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
          
          
         
         
          <FlatList
            horizontal={true}
            data={Categories}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
          />
          <Text
            style={{
              paddingTop: 10,
              paddingHorizontal: 20,
              fontSize: 20,
              fontWeight: '600',
              color: COLOURS.black,
            }}>
           Select Your Favourite
          </Text>
          {Categories[currentSelected].items.map(renderItems)}
          <TouchableOpacity
            style={{
              margin:30,
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0.5,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                borderBottomWidth: 1,
                borderBottomColor: COLOURS.black,
              }}>
              Load more
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
              
     
    );
}

const styles = StyleSheet.create({
    headerMain: {
      width: width,
      height: width / 4 - 35,
      backgroundColor: '#fff',
      elevation: 8,
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    headerFlex: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchBox:{
      width: width - 80,
      height:  width / 7 - 15,
      backgroundColor:"#e5e5e5",
      marginHorizontal:10,
      borderRadius:25,
      fontSize:15,
      color:"#333",
      paddingHorizontal:10,
      position:"relative"
    },
    searchIcon:{
      position:"absolute",
      bottom: -15,
      right: 15,
    },
    text:{
        fontSize: 30,
        color: 'black',
        paddingHorizontal: 10,
        paddingTop:10,
        backgroundColor: COLOURS.white
    },
    subtext:{
        fontSize: 20,
        paddingHorizontal: 10,
        paddingBottom: 20,
        color: 'black',
        backgroundColor: COLOURS.white
    },
    box:{
      height:120,
      width:80,
      borderWidth:1,
      marginHorizontal: 10,
      marginVertical:20,
      borderRadius:10

    }
  });
  

export default Menu;