import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "https://api.chucknorris.io/jokes"
const headers = { Accept: "application/json" }

export default new Vuex.Store({
  state: {
    currentContent: "This is a content",
    allContents: [],
    searchContent: [],
  },
  mutations: {
    //syncrous
    setCurrentContent(state, payload) {
      state.currentContent = payload;
      state.allContents.push(payload);
    },
    setSearchContent(state, payload){
      state.searchContent = payload;
    }
  },
  actions: {
    //asyncronous
    async setCurrentContent(state) {
      let j = []
      for(let i = 0; i<=2; i++){
        let content = await fetch(url + '/random', { headers });
        const i = await content.json();
        j.push(i)
      }
      state.commit("setCurrentContent", j)
    },
    async setSearchContent(state, keyword){
      const content = await fetch(url + '/search?query=' + keyword, { headers });
      const j = await content.json();
      state.commit("setSearchContent", j)
    }
  },
  modules: {},
  getters: {
    getCurrentContent: state => state.currentContent,
    getAllContents: state => state.allContents,
    getSearchContent: state => state.searchContent
  }
});
