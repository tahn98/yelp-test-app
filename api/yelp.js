import axios from 'axios';

export default axios.create({
	baseURL : 'https://api.yelp.com/v3/businesses',
	headers : {
		Authorization : 
			'Bearer jdYs9GHrHga3CwpUwDSD0E8kn2yosSMod6_fjnChfLsElinl-673CtWBvzGWmfRJicSgpVSl8ZV1qyCb0bm4gH69TZ9LzxAbR96CM_ViEl6BEdm87WBQZ15dEc07XnYx'
	}
});