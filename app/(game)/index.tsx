import GameOverScreen from "@/app/(game)/GameOverScreen";
import GameScreen from "@/app/(game)/GameScreen";
import StartGameScreen from "@/app/(game)/StartGameScreen";
import AppWrapper from "@/myComponent/ui/AppWrapper";
import PrimaryButton from "@/myComponent/ui/PrimaryButton";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Alert } from "react-native";

type Props = {};

const Game = (props: Props) => {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(true);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("@/assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("@/assets/fonts/OpenSans-Bold.ttf"),
  });

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  };
  const gameOverHandler = (guessRoundsLength: number) => {
    setIsGameOver(true);
    setGuessRounds(guessRoundsLength);
  };
  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return <AppWrapper>{screen}</AppWrapper>;
};

export default Game;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#320019",
    borderRadius: 8,
    elevation: 10,
    shadowColor: "#000",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 2 },
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    color: "#ddb52f",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    marginVertical: 8,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

const AppLoading = () => <Text>Loading</Text>;
