import React, { useState } from "react";
import { Audio } from "expo-av";
import { View, Text, TouchableOpacity } from "react-native";
import * as FileSystem from 'expo-file-system';
import * as Animatable from "react-native-animatable";
import { styles } from "./audioRecorder.styles";
import Icon from "react-native-vector-icons/Ionicons";

import axios from "axios";

export default function AudioRecorder() {
  type Iprops = {
    stopAndUnloadAsync: () => void;
    getURI: () => void;
  };

  const [recording, setRecording] = useState<any>();
  const [recordings, setRecordings] = useState([]);
  const [message, setMessage] = useState("");

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status === "granted") {
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,

          playsInSilentModeIOS: true,
          staysActiveInBackground: true,
        });

        console.log("Starting recording..");

        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
        setRecording(recording);
        console.log("Recording started");
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  const getDurationFormated = (millis: number) => {
    const min = millis / 100 / 60;
    const minutesDisplay = Math.floor(min);
    const sec = Math.round((min - minutesDisplay) * 60);
    const secondsDisplay = sec < 10 ? `0${sec}` : sec;
    return `${minutesDisplay}:${secondsDisplay}`;
  };
  console.log(":::");
  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const { sound, status } = await recording.createNewLoadedSoundAsync();

    const uri = recording.getURI();

    let records: any = [...recordings];
    records.push({
      uri: uri,
      sound: sound,
      duration: getDurationFormated(status.durationMillis),
    });

    setRecordings(records);
    console.log("::::", uri);
  }
  async function increaseSpeed(sound: any) {
    await sound.setRateAsync(0.8, false);
  }

  const generateText = async (uri: string) => {
    try {
      const fileExists = await FileSystem.getInfoAsync(uri)
   if(fileExists){
    console.log("aaaa", fileExists)
   }
      // const data = await axios.post(
      //   "http://192.168.0.100:5000/api/diagnostic",
      //   {
      //     prompt: uri,
      //   }
      // );
      // console.log("data", data);
    } catch (ee) {
      console.log(ee);
    }
  };

  function getRecordLines() {
    return recordings.map((recordingLine: any, index) => {
      increaseSpeed(recordingLine.sound);
      return (
        <View key={index}>
          <Text>
            Gravação {index + 1} - {recordingLine.duration}
          </Text>
          <TouchableOpacity
            onPress={() => {
              recordingLine.sound.playAsync();
               generateText(recordingLine.uri);
            }}
          >
            <Text>Play</Text>
          </TouchableOpacity>
        </View>
      );
    });
  }
  return (
    // <View style={styles.container}>
    //   <Text>Meu lindfo</Text>
    //   <TouchableOpacity
    //     //   style={styles.createAudioButton}
    //     onPress={recording ? stopRecording : startRecording}
    //   >
    //     <Text>{recording ? "Parar" : "Gravar"}</Text>
    //   </TouchableOpacity>

    //   <Text>Meus audios</Text>
    //   {getRecordLines()}
    // </View>
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Audio com efeito playback atrasado</Text>

        <View>
          <Text></Text>
        </View>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={styles.createAudioButton}
            onPress={recording ? stopRecording : startRecording}
          >
            <Text>
              <Icon
                name={recording ? "stop" : "play"}
                size={40}
                color={"#fff"}
              />
            </Text>
          </TouchableOpacity>
        </View>
        <Text>Meus audios</Text>
        {getRecordLines()}
      </Animatable.View>
    </View>
  );
}
