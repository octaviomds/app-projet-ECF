import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react'
import { View, Text,TouchableOpacity, TextInput, ScrollView, Image } from 'react-native'
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { Feather } from '@expo/vector-icons';
import { COLORS, FONTS } from '../../constants/theme';
import { IMAGES } from '../../constants/Images';


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
const SearchData = [
    {
        title: "Woman Fashion Shoes",
    },
    {
        title: "Man Shoes",
    },
    {
        title: "Girl Shoes",
    },
    {
        title: "Shorts Shoes",
    },
    {
        title: "Shorts",
    },
    {
        title: "unisex",
    },
  
  ]

const Search = () => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const navigation = useNavigation();

  return (
    <View style={{backgroundColor:colors.card,flex:1}}>
        <View style={[GlobalStyleSheet.container]}>
            <View style={[GlobalStyleSheet.row,{gap:10}]}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        height:48,
                        width:48,
                        borderRadius:8,
                        backgroundColor:theme.dark ? 'rgba(255,255,255,0.10)':colors.title,
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <Feather name='chevron-left' size={24} color={theme.dark ? COLORS.white :colors.card}/>
                </TouchableOpacity>
                <View style={{flex:1}}>
                    <TextInput
                        placeholder='Search Best items for You'
                        placeholderTextColor={'#666666'}
                        style={[FONTS.fontRegular,{
                        height:48,
                        width:'100%',
                        borderWidth:1,
                        borderColor:colors.border,
                        borderRadius:8,
                        paddingHorizontal:20,
                        color:colors.title,
                        fontSize:16
                        }]}
                    />
                </View>
            </View>
            <View style={{paddingTop:25}}>
                <Text style={[FONTS.fontMedium,{fontSize:18,color:colors.title}]}>Categories</Text>
                <View style={{ marginHorizontal: -15,paddingVertical:15 }}>
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
                                        <Text style={{ ...FONTS.fontMedium, fontSize: 13, color: data.active ?theme.dark ? COLORS.primary : colors.card : colors.title }}>{data.title}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
                <View style={[GlobalStyleSheet.row,{alignItems:'center',justifyContent:'space-between',paddingTop:10}]}>
                    <Text style={[FONTS.fontMedium,{fontSize:18,color:colors.title}]}>Search history</Text>
                    <Text style={[FONTS.fontRegular,{fontSize:14,color:colors.title,textDecorationLine:'underline'}]}>Clear All</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    {SearchData.map((data:any, index) => {
                        return (
                            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 5 }}>
                                <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }}>{data.title}</Text>
                                <TouchableOpacity>
                                    <Image
                                        style={{ height: 19, width: 19, resizeMode: 'contain', opacity: 0.5, tintColor: colors.title }}
                                        source={IMAGES.close}
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
            </View>
        </View>
    </View>
  )
}

export default Search