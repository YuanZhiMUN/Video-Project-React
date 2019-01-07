import axios from 'axios';

const KEY = 'AIzaSyBHoBF-jyG7xRqZPIRj101VK_xwcyT7s6s';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});




