import axios from 'axios';


const KEY='AIzaSyBMPzu1I5cPVav1XT1WW3YMODvYQiMQ8gM';


export default axios.create({
	baseURL:'https://www.googleapis.com/youtube/v3/',
	params:{
		part:'snippet',
		maxResults:6,
		key:KEY,



	}


})