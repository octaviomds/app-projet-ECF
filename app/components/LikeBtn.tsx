import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { useTheme } from '@react-navigation/native';

const LikeBtn = () => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const [isLike, setIsLike] = useState(false);

    return (
        <Pressable
            accessible={true}
            accessibilityLabel="Like Btn"
            accessibilityHint="Like this item"
            onPress={() => { setIsLike(!isLike) }}
            style={{
                height: 50,
                width: 50,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {isLike ?
                <FontAwesome size={20} color={ COLORS.danger} name="heart" />
                :
                <FontAwesome size={20} color={theme.dark ? '#fff': '#C6B4B8'} name="heart" />
            }
        </Pressable>
    );
}

export default LikeBtn