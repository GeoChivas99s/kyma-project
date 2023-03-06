import React, { useState } from "react";
import { Audio } from "expo-av";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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
  }

  function getRecordLines() {
    return recordings.map((recordingLine:any, index) => {
      return (
        <View key={index}>
          <Text>
            Gravação {index + 1} - {recordingLine.duration}
          </Text>
          <TouchableOpacity onPress={() => recordingLine.sound.playAsync()}>
            <Text>Play</Text>
          </TouchableOpacity>
        </View>
      );
    });
  }
  return (
    <View style={styles.container}>
      <Text>Meu lindfo</Text>
      <TouchableOpacity
        //   style={styles.createAudioButton}
        onPress={recording ? stopRecording : startRecording}
      >
        <Text>{recording ? "Parar" : "Gravar"}</Text>
      </TouchableOpacity>

      <Text>Meus audios</Text>
      {getRecordLines()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    borderWidth: 2,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "cyan",
  },
  button: {
    width: 100,
    height: 40,
  },
});
