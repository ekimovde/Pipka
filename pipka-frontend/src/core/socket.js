import { io } from "socket.io-client";
import openSocket from "socket.io-client";

// const socket = io(window.location.origin.replace("3000", "3003"));
// var socket = io("http://localhost:3003");
const socket = openSocket("http://localhost:3003");

export default socket;
