import axios from "axios";

export default {
  
    addUser: function(userData) {
        return axios.post("/api/users/add", userData);
    },
    logUser: function(userData) {
        return axios.post("/api/users/login", userData);
    },
    startQuiz: function(Token) {
        return axios.post("/quiz", Token);
    },
    Auth: function(Token) {
        return axios.post("/auth", Token);
    },
    quizSubmit: function(Token) {
        return axios.post("/check/quiz", Token);
    },
    searchFilter: function(filter) {
        return axios.post("/filter", filter);
    },
    showHistory: function(history) {
        return axios.post("/user/history", history);
    },
    topUsers: function(){
        axios.get('/api/table',(data)=>{
            return data;
        })
    }
};