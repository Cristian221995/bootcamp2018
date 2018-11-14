
export const GET_TIMELINE = 'GET_TIMELINE';
export const GET_TRENDS = "GET_TRENDS"
const host = 'http://192.168.0.235:8080';   // 192.168.0.gaston  // 192.168.0.235 santi

export function getTimeline(){
    return (dispatch) => {
        const url = `${host}/timeline?count=100`; //we require 20 tweets

        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            var tweets = responseJson;
            // console.log(tweets);
            dispatch({ type: GET_TIMELINE, data: tweets}); //dispatch an object (action) whith the type and a Json with the timeline
        })
        .catch((error) => {
            console.error(error);
        });
    };
};

export function getTrends(){
    return (dispatch) => {
        const url = `${host}/trends?id=23424747`; 

        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            var trends = responseJson;
            // console.log(tweets);
            dispatch({ type: GET_TRENDS, data: trends}); //dispatch an object (action) whith the type and a Json with the timeline
        })
        .catch((error) => {
            console.error(error);
        });
    };
};