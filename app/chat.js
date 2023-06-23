import { React, useState, useEffect, useRef } from "react";
import { View, FlatList, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import SVGSend from "./styles/StyleButtonSend";
import { Audio } from "expo-av";
// import RNFS from 'react-native-fs';  
const Chat = () => {
    // openai api
    //bot propiedades
    const botName = "ULA Assisten"
    const botVoice = '21m00Tcm4TlvDq8ikWAM'
    // user propiedades
    const userName = "Juan"
    // openai requerimientos
    const API_KEY = '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'
    const [typing, setTyping] = useState(false)
    const [textInput, setTextInput] = useState('');
    const [messages, setmessages] = useState([])
    //inicio del chat
    if (messages.length === 0) {
        processMessageToChatGPT(0)
    }
    //accion de boton 
    const handleSend = async () => {
        if (!textInput == "") {
            const text = textInput
            setTextInput('');
            var i = (messages.length) + 1
            const newMessage = {
                id: `${i}`,
                message: text,
                sender: "user",
                name: "Juan",
            }
            const newMessages = [...messages, newMessage]

            setmessages(newMessages)
            setTyping(true)
            await processMessageToChatGPT(newMessages)
        }
    }
    //conectar con openai
    async function processMessageToChatGPT(chatMessages) {
        if (chatMessages === 0) {
            await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "model": "gpt-3.5-turbo",
                    "messages": [
                        {
                            role: "system",
                            content: `chat gpt desde ahora vas a tener el rol de ser un asistente virtual de la universidad de los lagos llamada "${botName}" encargada de ayudar a un usuario de llamado "${userName}". Tu objetivo es siempre ayudar a tu usuario dándole respuestas claras y cortas a sus preguntas dependiendo de la persnalidad que el usuario te asigne, esta el usuario puede cambiarla posteriormente. Tus respues no son como una inteligencia artificial sino como un amigo. Tu cara es de: lobo. Tu personalidad es : amable.`
                        },
                        {
                            role: "assistant", content: "presentate"
                        }
                    ]
                })
            }).then((data) => {
                return data.json();
            }).then((data) => {
                handleGenerateTTS("o")
                setmessages([
                    {
                        id: "1",
                        message: data.choices[0].message.content,
                        sender: "GPT",
                        name: botName,
                    }
                ])
                setTyping(false)
            })
        } else {
            let apiMessages = chatMessages.map((messageObject) => {
                let role = "";
                if (messageObject.sender === "GPT") {
                    role = "assistant"
                } else {
                    role = "user"
                }
                return { role: role, content: messageObject.message }
            })
            const systemMessage = {
                role: "system",
                content: `chat gpt desde ahora vas a tener el rol de ser un asistente virtual de la universidad de los lagos llamada "${botName}" encargada de ayudar a un usuario de llamado "${userName}". Tu objetivo es siempre ayudar a tu usuario dándole respuestas claras y cortas a sus preguntas dependiendo de la persnalidad que el usuario te asigne, esta el usuario puede cambiarla posteriormente. Tus respues no son como una inteligencia artificial sino como un amigo. Tu cara es de: lobo. Tu personalidad es : amable.`
            }
            const apiRequestBody = {
                "model": "gpt-3.5-turbo",
                "messages": [
                    systemMessage,
                    ...apiMessages
                ]
            }
            var i = (messages.length) + 2
            await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(apiRequestBody)
            }).then((data) => {
                return data.json();
            }).then((data) => {
                handleGenerateTTS("o")
                setmessages([
                    ...chatMessages, {
                        id: `${i}`,
                        message: data.choices[0].message.content,
                        sender: "GPT",
                        name: botName,
                    }
                ])
                setTyping(false)

            })
        }
    };

    //eleven labs
    //   eleven labs t2


        // Define a state variable to hold the audio URL
        const textToSpeech = async (inputText) => {
            // elevenlabs api
            const selectedVoice = "21m00Tcm4TlvDq8ikWAM";
        // elevenlabs llamado
            const llamado = (
                {
                  method: "POST",
                  url: `https://api.elevenlabs.io/v1/text-to-speech/${selectedVoice}`,
                  headers: {
                    accept: "audio/mpeg",
                    "Content-Type": "application/json",
                    "xi-api-key": '7e1106c99c8c91e6378a9406d72254cb',
                  },
                  data:{
                    text: inputText,
                    model_id: "eleven_multilingual_v1",
                    voice_settings: {
                      stability: 0,
                      similarity_boost: 0,
                    },
                },
                }
              );
              const response=await axios.request(llamado);
              return response.data
          };
        //   eleven labs t2
        const [audioURL, setAudioURL] = useState(null);
    
        const handleGenerateTTS = async (text) => {
        //     // Call the textToSpeech function to generate the audio data for the text "Hello welcome"
        //     const data = await textToSpeech(`${text}`)
        //     // Create a new Blob object from the audio data with MIME type 'audio/mpeg'
        //     const blob = new Blob([data], { type: 'audio/mpeg' });
        //     const url = new FileReader();
        //     url.readAsDataURL(blob);
        //     const result =await FileSystem.writeAsStringAsync(url,"nose.mp3",'utf8')
        // console.log(url);
        //     // Create a URL for the blob object
        //     // const url = URL.createObjectURL(blob);
        //     // // Set the audio URL state variable to the newly created URL
        //     // console.log(url);
        //     // setAudioURL(url);
        //     // console.log(audioURL);
          };
 

    //baja al final de la lista (no funciona)
    const list = useRef(null);
    return (
        <View style={{ alignItems: 'center', backgroundColor: '#34383E', borderRadius: 20, width: 390, height: 431, marginBottom: 3, }}>
            <FlatList
                ref={list}
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                style={style.body}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: item.sender === 'GPT' ? 'row' : 'row-reverse', padding: 10, marginRight: 10 }}>
                        <View style={{ backgroundColor: "#231D28", borderRadius: 12, padding: 10, margin: -5 }}>
                            <Text bold style={item.sender === 'GPT' ? style.botName : style.userName}>{item.name}</Text>
                            <Text style={item.sender === 'GPT' ? style.bot : style.user}>{item.message}</Text>

                        </View>
                    </View>
                )}
            />
            {typing ? <Text style={{ alignSelf: 'flex-start', marginLeft: 11, color: '#CFCCD2', backgroundColor: '#9E9CA0', borderRadius: 15, padding: 3 }}>Escribiendo...</Text> : <Text></Text>}
            <View style={style.bodyText}>
                <TextInput
                    style={style.input}
                    value={textInput}
                    onChangeText={text => setTextInput(text)}
                    placeholder={"habla con "+botName}

                />

                <TouchableOpacity style={style.buttonsend} onPress={() => { handleSend() }}>
                    <SVGSend />
                </TouchableOpacity>
                <TouchableOpacity style={style.button}>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    body: {
        width: '102%',
        paddingHorizontal: 13,
        marginBottom: -18,
    },
    bodyText: {
        backgroundColor: 'black',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 2,
        padding: 7,
        borderRadius: 20
    },
    botName: {
        color: '#EA5043',
        alignSelf: 'flex-start'
    },
    userName: {
        color: '#30676B',
        alignSelf: 'flex-end'
    },
    bot: {
        fontSize: 16,
        marginLeft: 15,
        color: 'white'
    },
    user: {
        fontSize: 16,
        marginRight: 15,
        color: 'white'
    },
    input: {
        width: 320,
        alignSelf: 'center',
        backgroundColor: '#B5B7BC',
        borderColor: '#69696A',
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 43,
        paddingVertical: 5,
    },
    buttonsend: {
        width: 45,
        height: 45,
        marginLeft: -44,
        alignSelf: 'center',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'white',
        width: 45,
        height: 45,
        alignSelf: 'center',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8
    },
    buttonText: {
        fontSize: 25,
        color: '#fff',
    }
});
export default Chat