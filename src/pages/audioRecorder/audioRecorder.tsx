import React, { useState } from "react";
import { Audio } from "expo-av";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import * as FileSystem from "expo-file-system";
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
    // await Audio.setAudioModeAsync({
    //   allowsRecordingIOS: false,
    // });
    const uri = recording.getURI();
    // const { sound, status } = await recording.createNewLoadedSoundAsync();

    let records: any = [...recordings];
    records.push({
      uri: uri,
      //  sound: sound,
      // duration: getDurationFormated(status.durationMillis),
    });

    setRecordings(records);
    // console.log("::::", uri);
  }
  // async function increaseSpeed(sound: any) {
  //   await sound.setRateAsync(0.8, false);
  // }

  const generateText = async (url: string) => {
    try {
      //     const fileExists = await FileSystem.getInfoAsync(uri)
      //  if(fileExists){
      //   console.log("aaaa", fileExists)
      //  }

      const { uri } = await FileSystem.getInfoAsync(url);

      // const audioBlob = await FileSystem.readAsStringAsync(audioFile.uri, {
      //   encoding: FileSystem.EncodingType.Base64,
      // });
      // const nameAudio = uri.split("/").reverse()[0]

      // const audio = new File([audioBlob], nameAudio, {
      //   type: 'audio/m4a',
      // });
      const formData = new FormData();
      formData.append("file", {
        uri,
        type: Platform.OS === "ios" ? "audio/m4a" : "audio/x-wav",
        name: Platform.OS === "ios" ? `${Date.now()}.m4a` : `${Date.now()}.wav`,
      });
      console.info("formData", formData.getAll("file"));
      const data = await fetch("http://192.168.0.104:5000/api/diagnostic", {
        method:"POST",
        headers: {
          'Content-Type': 'multipart/form-data',

        },
        body: formData,
      });
      console.log("data", await data.json());
    } catch (ee) {
      console.log(ee);
    }
  };

  function getRecordLines() {
    return recordings.map((recordingLine: any, index) => {
      // increaseSpeed(recordingLine.sound);
      return (
        <View key={index}>
          <Text>
            Gravação {index + 1} -{/* {recordingLine.duration} */}
          </Text>
          <TouchableOpacity
            style={{
              width: 100,
              borderWidth: 2,
              height: 100,
              backgroundColor: "#fe34",
            }}
            onPress={() => {
              //  recordingLine.sound.playAsync();
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
