import React from 'react'
import { View, Text ,Image,TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { COLORS, FONTS } from '../../constants/theme';
import { useNavigation, useTheme } from '@react-navigation/native';
import LikeBtn from '../LikeBtn';

type Props = {
    title : string;
    color : any;
    //style ?: object;
    //rounded ?: any;
    //size ?: string;
    price : string;
    image ?: any;
    offer : string;
    hascolor?:any;
    onPress ?: (e : any) => void,
    // onpress:string;
}

const Cardstyle1 = ({title,price,image,offer,color,hascolor,onPress}:Props) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const navagation = useNavigation();
  return (
    <TouchableOpacity
        onPress={onPress} 
    >
        <View style={{height:undefined,width:'100%',aspectRatio:1/1.1,backgroundColor:theme.dark ? 'rgba(255,255,255,0.10)':colors.background,borderRadius:8,alignItems:'center',justifyContent:'center'}}>
            <Image
                style={{ height: undefined, width: '100%', aspectRatio: 1 / 1.1,resizeMode:'contain'}}
                source={image}
            />
        </View>
        {hascolor ?
            null
        :
            <View style={{
                width:80,
                borderBottomLeftRadius:30,
                borderTopLeftRadius:30,
                backgroundColor:color ? COLORS.danger :colors.title,
                alignItems:'center',
                justifyContent:'center',
                position:'absolute',
                paddingHorizontal:10,
                paddingVertical:5,
                top:26,
                left:-10,
                transform: [{rotate: '-90deg'}]
                }}
            >
                <Text style={[FONTS.fontMedium,{fontSize:12,color:theme.dark ? COLORS.title :colors.card,}]}>{offer}</Text>
            </View>

        }
        <View style={{position:'absolute',right:-5,top:-5}}>
            <LikeBtn/>
        </View>
        <Text  style={[FONTS.fontMedium,{fontSize:14,color:colors.title,marginTop:10,paddingRight:30}]}>{title}</Text>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={[FONTS.fontSemiBold,{fontSize:18,color:colors.title}]}>{price}</Text>
            <TouchableOpacity
                onPress={onPress} 
                activeOpacity={0.6} 
                style={{
                    height:28,
                    width:28,
                    borderRadius:8,
                    backgroundColor:theme.dark ? 'rgba(255,255,255,0.10)' :colors.background,
                    alignItems:'center',
                    justifyContent:'center'
                }}
            >
                <Feather name='arrow-right' size={16} color={colors.title}/>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default Cardstyle1