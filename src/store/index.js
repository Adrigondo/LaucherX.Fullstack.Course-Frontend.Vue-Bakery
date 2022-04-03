import { createStore } from 'vuex'

export default createStore({
  state: {
    orders:[
      {
        user: {
          name: "",
          phone: "",
          email: "",
        },
        cake: {
          type: "",
          flavors:[],
          decorations:[],
        }
      }
    ]
  },
  getters: {
    /* contadorCuadrado(state) {
      return state.counter * state.counter;
    } */
  },
  mutations: {
    /* subirContador(state, random){
      state.counter += random;
    },
    bajarContador(state, random){
      state.counter -= random;
    },
    colorChange(state, color) {
      state.color = color;
    } */
    addOrder(state, order){
      
    }
  },
  actions: {
    /* async subirContador() { 
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results)
      this.commit("subirContador", results);
    },
    async bajarContador() { 
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results)
      this.commit("bajarContador", results);
    },
    colorChange({commit}, color) {
      commit("colorChange", color);
    } */
    addOrder({commit}, name, phone, email, type, flavors, decorations){
      let newOrder={
        user: {
          name: name,
          phone: phone,
          email: email,
        },
        cake: {
          type: type,
          flavors: flavors,
          decorations: decorations,
        }
      }
      commit("addOrder", newOrder);
    }
  },
  modules: {
  }
})
