import axios from 'axios';

export default function SingnUpAxios(url, callback){
    axios(
        {
            url: '/' + url,
            method: 'post',

            baseURL: 'http://localhost:8080',
            withCredentials: true,
        }
    ).then(function(response){
        callback(response.data)
    })
}