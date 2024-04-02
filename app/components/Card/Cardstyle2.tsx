import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { useTheme } from '@react-navigation/native';
import LikeBtn from '../LikeBtn';
import CheckoutItems from '../CheckoutItems';
import { IMAGES } from '../../constants/Images';
import { Feather } from '@expo/vector-icons';

type Props = {
    title : string;
    //color : any;
    //style ?: object;
    //rounded ?: any;
    //size ?: string;
    price : string;
    image ?: any;
    delevery : string;
    removelikebtn?: any;
    offer?:string,
    btntitle?:string,
    onPress ?: (e : any) => void,
    //hascolor:any
}

const Cardstyle2 = ({title,price,image,delevery,removelikebtn,offer,btntitle,onPress}:Props) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

  return (
    <View
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
            paddingBottom: 15,
            marginTop: 15,
            paddingHorizontal: 15,
            
        }}
    >
        <View style={{height: undefined, width:SIZES.width / 2.8,aspectRatio:1/1, borderRadius: 8,backgroundColor:theme.dark ? 'rgba(255,255,255,0.10)':colors.background}}>
            <Image
                style={{ height: undefined, width:SIZES.width / 2.8,aspectRatio:1/1, borderRadius: 8, }}
                source={image}
            />
            {removelikebtn ? null :
            
                <View style={{position:'absolute',top:-5,left:-5}}>
                    <LikeBtn />
                </View>
            }
        </View>
        <View style={{flex:1}}>
            <Text numberOfLines={1} style={[FONTS.fontMedium,{fontSize:16,color:colors.title,paddingRight:5}]}>{title}</Text>
            <View style={{flexDirection:'row',alignItems:'center',gap:10,marginTop:10}}>
                <Text style={[FONTS.fontSemiBold,{fontSize:16,color:colors.title}]}>{price}</Text>
                <Text style={[FONTS.fontMedium,{fontSize:14,color:removelikebtn ? COLORS.success :'#CC0D39'}]}>{delevery}</Text>
            </View>
            {removelikebtn ? 
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
                    <View>
                        <Text style={[FONTS.fontMedium,{fontSize:14,color:COLORS.danger}]}>{offer}</Text>
                    </View>
                    {btntitle ? 
                        <TouchableOpacity 
                            activeOpacity={0.6} 
                            style={{
                                borderRadius:8,
                                backgroundColor:theme.dark ? 'rgba(255,255,255,0.10)':colors.background,
                                alignItems:'center',
                                justifyContent:'center',
                                paddingHorizontal:10,
                                paddingVertical:5
                            }}
                            onPress={onPress}
                        >
                            <Text style={[FONTS.fontMedium,{fontSize:13,color:colors.title}]}>{btntitle}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity 
                            activeOpacity={0.6} 
                            style={{
                                height:28,
                                width:28,
                                borderRadius:8,
                                backgroundColor:theme.dark ? 'rgba(255,255,255,0.10)':colors.background,
                                alignItems:'center',
                                justifyContent:'center'
                            }}
                            onPress={onPress}
                        >
                            <Feather name='arrow-right' size={16} color={colors.title}/>
                        </TouchableOpacity>
                    }
                </View>
                :
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
                    <CheckoutItems/>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 2, }}>
                        <Image
                            style={{ height: 16, width: 16, resizeMode: 'contain', tintColor: theme.dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}
                            source={IMAGES.delete}
                        />
                        <Text style={{ ...FONTS.fontMedium, fontSize: 14, color: theme.dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>Remove</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    </View>
  )
}

export default Cardstyle2