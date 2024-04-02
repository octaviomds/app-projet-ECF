import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import {  ScrollView, Text, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Ripple from 'react-native-material-ripple';
import { useTheme } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import LoginSheet from '../../components/BottomSheet/LoginSheet';
import RegisterSheet from '../../components/BottomSheet/RegisterSheet';
import SuccessSheet from '../../components/BottomSheet/SuccessSheet';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Header from '../../layout/Header';

type Props = {
    height ?: string,
 }
 

const BottomSheet = forwardRef((props, ref) => {

    const {colors} : {colors : any} = useTheme();

    const refRBSheet = useRef<any>(null);
    
    const [activeSheet , setActiveSheet] = useState<any>('');
    const [isSheet , setIsSheet] = useState(false); 
 
    useImperativeHandle(ref, () => ({

        openSheet : async (value:string) => {
            await setActiveSheet(value);
            await refRBSheet.current.open();
        },
        closeSheet() {
            refRBSheet.current.close();
        }
    
    }));

    const ActionData = [
        {
            icon : 'check-circle',
            title : "Success Sheet",
            sheet : 'success',
        },
        {
            icon : 'log-out',
            title : "Login Sheet",
            sheet : 'login',
        },
        {
            icon : 'file-text',
            title : "Register Sheet",
            sheet : 'register',
        },
    ]

    const handleSheet = async (value:any) => {
        await setActiveSheet(value);
        setIsSheet(true);
    }
    useEffect(() => {
        if(isSheet){
            refRBSheet.current.open();
        }
    },[activeSheet]);

    return (
        <>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                height={activeSheet === "success" ? 210 :
                        activeSheet === "login" ? 345 :
                        activeSheet === "register" ? 435 : 230}
                openDuration={100}
                customStyles={{
                    
                    container:{
                        backgroundColor: colors.cardBg,
                    },
                    draggableIcon: {
                        marginTop:10,
                        marginBottom:0,
                        height:5,
                        width:80,
                        backgroundColor: colors.border,
                    }
                }}
            >
                {activeSheet === "success" ?
                    <SuccessSheet />:
                activeSheet === "login" ?
                    <LoginSheet sheetRef={refRBSheet}/>:
                activeSheet === "register" ?
                    <RegisterSheet sheetRef={refRBSheet}/>
                    :
                    <SuccessSheet />
                }

            </RBSheet>

            <View style={{flex:1,backgroundColor:colors.card}}>
                <View style={{backgroundColor:colors.card,flex:1}}>
                    <Header 
                        title={'Bottom Sheets'}
                        leftIcon={'back'}
                        titleRight
                    />
                    <ScrollView>
                        <View style={[GlobalStyleSheet.container,{padding:0,paddingTop:10}]}>
                            <View style={{}}>
                                <View style={{}}>
                                    {ActionData.map((data:any,index) => {
                                        return(
                                            <Ripple
                                                // onPress={async () => {await setActiveSheet(data.sheet);refRBSheet.current.open()}}
                                                onPress={() => handleSheet(data.sheet)}
                                                key={index}
                                                style={[{
                                                    flexDirection: 'row',
                                                    marginHorizontal: 15,
                                                    height: 48,
                                                    alignItems: 'center',
                                                    paddingVertical: 10,
                                                    borderRadius: SIZES.radius,
                                                },
                                                index === ActionData.length - 1 && {
                                                    borderBottomWidth:0,
                                                }
                                                ]}
                                            >
                                                <View style={{
                                                    height: 30,
                                                    width: 30,
                                                    borderRadius: 6,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginRight: 10,
                                                }}>
                                                    <Feather size={16} color={colors.title} name={data.icon}/>
                                                </View>
                                                <Text style={{...FONTS.fontLg,...FONTS.fontRegular,flex:1,color:colors.title}}>{data.title}</Text>
                                                <Feather color={colors.text} name={'chevron-right'} size={22}/>
                                            </Ripple>
                                        )
                                    })}
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    );
});

export default BottomSheet;