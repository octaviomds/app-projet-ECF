import { useTheme } from '@react-navigation/native';
import React from 'react'
import { View, Text ,ScrollView, Image ,} from 'react-native'
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { IMAGES } from '../../constants/Images';
import { COLORS, FONTS } from '../../constants/theme';
import Cardstyle2 from '../../components/Card/Cardstyle2';
import Button from '../../components/Button/Button';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';


const CardStyleData =[
    {
        image:IMAGES.item9,
        title:'Echo Vibe Urban Runners',
        price:"$179",
        delevery:"FREE Delivery"
    },
    {
        image:IMAGES.item10,
        title:'Swift Glide Sprinter Soles',
        price:"$199",
        delevery:"FREE Delivery"
    },
    {
        image:IMAGES.item11,
        title:'Sky Burst Skyline Burst Shoes',
        price:"$149",
        delevery:"FREE Delivery"
    },
    {
        image:IMAGES.item12,
        title:'Zen Dash Active Flex Shoes',
        price:"$299",
        delevery:"FREE Delivery"
    },
    {
        image:IMAGES.item13,
        title:'Nova Stride Street Stompers',
        price:"$99",
        delevery:"FREE Delivery"
    },
]

type MyCartScreenProps = StackScreenProps<RootStackParamList, 'MyCart'>;

const MyCart = ({navigation} : MyCartScreenProps)=> {

  
  const theme = useTheme();
  const { colors } : {colors : any} = theme;

  return (
      <View style={{backgroundColor:colors.card,flex:1}}>
          <Header
            title='My Cart'
            leftIcon='back'
            rightIcon1={'search'}
          />
           <View style={[GlobalStyleSheet.container, { paddingHorizontal: 15, paddingTop: 15, paddingBottom: 15, borderBottomWidth: 1, borderBlockColor: colors.border }]}>
                <Text style={{ ...FONTS.fontRegular, fontSize: 18, color: colors.title }}>Subtotal<Text style={{ ...FONTS.fontBold, fontSize: 18 }}> $3,599</Text></Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 5 }}>
                    <Image
                        style={{ height: 23, width: 23, resizeMode: 'contain' }}
                        source={IMAGES.check}
                    />
                    <Text style={{ ...FONTS.fontMedium, fontSize: 15, color:'#CC0D39' }}>Your order is eligible for free Delivery</Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={[GlobalStyleSheet.container,{padding:0}]}>
                    {CardStyleData.map((data:any,index) => {
                        return(
                            <View key={index}>
                                <Cardstyle2
                                    title={data.title}
                                    price={data.price}
                                    delevery={data.delevery}
                                    image={data.image}
                                    
                                />
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
            <View style={GlobalStyleSheet.container}>
                <Button
                    title='Proceed to Buy (8 items)'
                    color={theme.dark ? COLORS.white:COLORS.primary}
                    text={theme.dark ? COLORS.primary : COLORS.white}
                    onPress={() => navigation.navigate('DeleveryAddress')}
                />
            </View>
      </View>
  )
}

export default MyCart