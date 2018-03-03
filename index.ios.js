import { AppRegistry } from "react-native";
import App from "./dist/App";

console.ignoredYellowBox = ["Remote debugger"];
AppRegistry.registerComponent("BookClub", () => App);
