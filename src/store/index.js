import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {},
    orders:[],
  },
  getters: {
    getOrders(state){
      return state.orders;
    },
    getUser(state){
      return state.user;
    }
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
    addOrder(state, newOrder){
      state.orders.push(newOrder)
      console.log("Saved!");
      console.log(state.orders);
    },
    setUser(state, newUser){
      state.user=newUser
      console.log("User saved!");
      console.log(state.user);
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
    addOrder({commit}, order){
      let newOrder={
        user: {
          name: order.name[0],
          phone: order.phone[0],
          email: order.email[0],
        },
        cake: {
          cake: order.cake[0],
          flavors: order.flavors,
          decorations: order.decorations,
          description: order.description[0],
        }
      }
      // console.log(newOrder);
      commit("addOrder", newOrder);
    },
    setUser({commit}, user){
      let newUser={
          name: user.name[0],
          phone: user.phone[0],
          email: user.email[0],
      }
      // console.log(newOrder);
      commit("setUser", newUser);
    }
  },
  modules: {
  }
})
