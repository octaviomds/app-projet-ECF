import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { View, Text ,ScrollView,Image,TouchableOpacity} from 'react-native'
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS,FONTS } from '../../constants/theme';
import { IMAGES } from '../../constants/Images';
import Cardstyle1 from '../../components/Card/Cardstyle1';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';


const ArrivalData = [
  {
      title: "All",
      active: true,
  },
  {
      title: "Child",
  },
  {
      title: "Man",
  },
  {
      title: "Woman",
  },
  {
      title: "Dress",
  },
  {
      title: "unisex",
  },

]

const cardData =[
  {
      image:IMAGES.item5,
      title:"Swift Glide Sprinter Soles",
      price:"$199",
      offer:"30% OFF",
      color:false,
      hascolor:false
  },
  {
      image:IMAGES.item6,
      title:"Echo Vibe Urban Runners",
      price:"$149",
      //offer:"30% OFF"
      color:false,
      hascolor:true
  },
  {
      image:IMAGES.item7,
      title:"Zen Dash Active Flex Shoes",
      price:"$299",
      //offer:"30% OFF"
      color:false,
      hascolor:true
  },
  {
      image:IMAGES.item8,
      title:"Nova Stride Street Stompers",
      price:"$99",
      offer:"70% OFF",
      color:true,
      hascolor:false
  },
  {
      image:IMAGES.item5,
      title:"Swift Glide Sprinter Soles",
      price:"$199",
      offer:"30% OFF",
      color:false,
      hascolor:false
  },
  {
      image:IMAGES.item6,
      title:"Echo Vibe Urban Runners",
      price:"$149",
      offer:"50% OFF",
      color:false,
      hascolor:false
  },
  {
      image:IMAGES.item7,
      title:"Zen Dash Active Flex Shoes",
      price:"$299",
      offer:"30% OFF",
      color:false,
      hascolor:false
  },
  {
      image:IMAGES.item8,
      title:"Nova Stride Street Stompers",
      price:"$99",
      offer:"70% OFF",
      color:true,
      hascolor:false
  },
]


type WishlistScreenProps = StackScreenProps<RootStackParamList, 'Wishlist'>;

const Wishlist = ({navigation} : WishlistScreenProps) => {

  const theme = useTheme();
  const { colors } : {colors : any} = theme;

  return (
     <View style={{backgroundColor:colors.card,flex:1}}>
        <Header
          title='Wishlist'
          leftIcon={'back'}
          rightIcon1={'search'}
        />
        <ScrollView contentContainerStyle={{flexGrow:1}}>
          <View style={[GlobalStyleSheet.container,{paddingHorizontal:20,paddingTop:20}]}>
            <View style={{ marginHorizontal: -15 }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 15 }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10 }}>
                        {ArrivalData.map((data:any, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        backgroundColor: data.active ? colors.title :theme.dark ? 'rgba(255,255,255,0.10)': colors.background,
                                        height: 38,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 8,
                                        //borderColor: theme.dark ? COLORS.white : colors.borderColor,
                                        //marginTop: 10,
                                        paddingHorizontal: 20,
                                        paddingVertical: 5
                                    }}>
                                    <Text style={{ ...FONTS.fontMedium, fontSize: 13, color: data.active ?theme.dark ? COLORS.title : colors.card : colors.title }}>{data.title}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
          </View>
          <View style={[GlobalStyleSheet.container,{paddingHorizontal:20,paddingTop:5}]}>
                  <View style={[GlobalStyleSheet.row]}>
                      {cardData.map((data:any, index) => {
                          return (
                              <View style={[GlobalStyleSheet.col50, { marginBottom: 20, }]} key={index}>
                                  <Cardstyle1
                                        title={data.title}
                                        image={data.image}
                                        price={data.price}
                                        offer={data.offer}
                                        color={data.color}
                                        hascolor={data.hascolor}
                                        onPress={() => navigation.navigate('ProductsDetails')}
                                  />
                              </View>
                          )
                      })}
                  </View>
              </View>
        </ScrollView>
     </View>
  )
}

export default Wishlist