import React from "React";
const express = require(express);
const stockapi = require("./stockapi");
import axios from 'axios';


delete(e) {
	e.preventDefault();
	axios.delete("https://api.worldtradingdata.com/api/v1//{this.state.id")
	.then(res => console.log(res.data));
}