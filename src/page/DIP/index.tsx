import React from "react";
import './modeSdk'
import LoginFormBad from "./LoginFormBad";
import LoginFormGood from "./LoginFormGood";
import axios from "axios";

export default () => {
  return <>
    <LoginFormGood onSubmit={(values) => {
      axios.post("http://localhost:8000/", values).then(res => {
        window.open('https://www.jd.com/')
      })
    }} />
    <LoginFormGood onSubmit={(values) => {
      axios.post("http://localhost:8000/", values).then(res => {
        window.open('https://www.baidu.com/')
      })
    }} />
  </>
}