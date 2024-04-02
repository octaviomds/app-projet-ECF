import { View, Text,  ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';
import Header from '../../layout/Header';
import { IMAGES } from '../../constants/Images';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Cardstyle2 from '../../components/Card/Cardstyle2';
import { COLORS, FONTS } from '../../constants/theme';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Rating } from 'react-native-ratings';


const TrackorderData = [
    {
        image:IMAGES.item9,
        title:'Echo Vibe Urban Runners',
        price:"$179",
        delevery:"FREE Delivery",
        offer:"40% OFF",
        btntitle:'Track Order'
    },
]

const Writereview = () => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const [isChecked, setIsChecked] = useState(false);
    const [Checked, setChecked] = useState(false);

    return (
        <View style={{backgroundColor:colors.card,flex:1}}>
            <Header
                title='Write Review'
                leftIcon='back'
                titleRight
            />
            <ScrollView contentContainerStyle={{flex:1}}>
                <View style={[GlobalStyleSheet.container,{paddingTop:0}]}>
                    <View style={{
                        marginHorizontal: -15
                    }}>
                        {TrackorderData.map((data:any, index) => {
                            return (
                                <View key={index}>
                                    <Cardstyle2
                                        key={index}
                                        title={data.title}
                                        price={data.price}
                                        delevery={data.delevery}
                                        image={data.image}
                                        offer={data.offer}
                                        removelikebtn
                                        //onPress={() => navigation.navigate('ProductsDetails')}
                                    />
                                </View>
                            )
                        })}
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 24, color: colors.title }}>Overall Rating</Text>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: 'rgba(0, 0, 0, 0.50)', marginTop: 5 }}>Your Average Rating Is 4.0</Text>
                    </View>
                    <Rating
                        ratingCount={5}
                        imageSize={50}
                        style={{ paddingTop: 20 }}
                    />
                     <View style={{ marginBottom: 15, marginTop: 30 }}>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title, marginBottom: 5 }}>Full Name</Text>
                        <Input
                            onChangeText={(value) => console.log(value)}
                            backround
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title, marginBottom: 5 }}>Product Review</Text>
                        <Input
                            onChangeText={(value) => console.log(value)}
                            inputLg
                            backround
                        />
                    </View>
                    <View>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }}>Would you recommend this product to a friend?</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 10 }}>
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row', alignItems: 'center', gap: 5
                                }}
                                onPress={() => setIsChecked(!isChecked)}
                            >
                                <TouchableOpacity
                                   style={[{
                                        borderWidth: 1,
                                        width: 24,
                                        height: 24,
                                        borderRadius: 50,
                                        borderColor: colors.border,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    },isChecked == true && {
                                        borderColor:colors.title
                                    }]}
                                    onPress={() => setIsChecked(!isChecked)}
                                >
                                    <View style={[{
                                        width: 14,
                                        height: 14,
                                        backgroundColor: colors.card,
                                        borderRadius: 50
                                    }, isChecked == true && {
                                        backgroundColor: colors.title,
                                    }]}></View>
                                </TouchableOpacity>
                                <Text style={{ ...FONTS.fontMedium, fontSize: 16, color: colors.title }}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row', alignItems: 'center', gap: 5
                                }}
                                onPress={() => setChecked(!Checked)}
                            >
                                <TouchableOpacity
                                    style={[{
                                        borderWidth: 1,
                                        width: 24,
                                        height: 24,
                                        borderRadius: 50,
                                        borderColor: colors.border,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    },Checked == true && {
                                        borderColor:colors.title
                                    }]}
                                    onPress={() => setChecked(!Checked)}
                                >
                                    <View style={[{
                                        width: 14,
                                        height: 14,
                                        backgroundColor: colors.card,
                                        borderRadius: 50
                                    }, Checked == true && {
                                        backgroundColor: colors.title,
                                    }]}></View>
                                </TouchableOpacity>
                                <Text style={{ ...FONTS.fontMedium, fontSize: 16, color: colors.title }}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={[GlobalStyleSheet.container,{paddingHorizontal:0,paddingBottom:0}]}>
                <View style={{height:88,width:'100%',borderTopWidth:1,borderTopColor:colors.border,justifyContent:'center',paddingHorizontal:15}}>
                    <Button
                        title='Submit Review'
                        color={theme.dark ? COLORS.white :COLORS.primary}
                        text={theme.dark ? COLORS.primary : COLORS.white}
                        //onPress={() => navigation.navigate('Myorder')}
                    />
                </View>
            </View>
        </View>
    )
}

export default Writereview