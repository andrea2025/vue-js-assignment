import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    messages: ['hllo','hi', 'bye'],
    },
    mutations: {
    setMessages(state, messages) {
    state.messages = messages;
    }
    }
    // actions: {
    // getMessages({ commit }) {
    // if (ws) {
    // return;
    // }
    // ws = new WebSocket('/api/messages');
    // ws.addEventListener('message', (e) => {
    // const data = JSON.parse(e.data);
    // commit('setMessages', data.messages);
    // });
    // }
    // }
   });
