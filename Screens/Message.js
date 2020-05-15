import React from 'react'
import { View, Text } from 'react-native'

const Message = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:"#ffedbc"}}>
            <Text style={{color:"white", fontSize:30}}>Message</Text>
        </View>
    );
};

export default Message;
