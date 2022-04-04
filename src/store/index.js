import { createStore } from 'vuex'
const initialState=()=>({
  user: {},
  bakery: {
    baker:{
      name:"Name",
      user:"User",
      password:"*******",
    },
    inventory: {
      ingredients: {
        flour: {
          name: "flour",
          title: "harina",
          value: 15.2,
          unit: "kg"
        },
        milk: {
          name: "milk",
          title: "leche",
          value: 10.7,
          unit: "lt"
        },
        chocolate: {
          name: "chocolate",
          title: "chocolate",
          kinds: [
            {
              title: "polvo",
              value: 2,
              unit: "kg"
            },
            {
              title: "líquido",
              value: 1.4,
              unit: "lt"
            },
            {
              title: "barras",
              value: 3,
              unit: "kg"
            },
          ],
        },
        raspberry: {
          name: "raspberry",
          title: "frambuesa",
          kinds: [
            {
              title: "jarabe",
              value: 1.4,
              unit: "lt"
            },
            {
              title: "mermelada",
              value: 0.5,
              unit: "lt"
            },
            {
              title: "natural",
              value: 3,
              unit: "kg"
            },
          ],
        },
        fruits: {
          name: "fruits",
          title: "frutas:",
          kinds: [
            {
              title: "mermelada de frutas",
              value: 3,
              unit: "lt"
            },
            {
              title: "piña",
              value: 1.4,
              unit: "kg"
            },
            {
              title: "fresa",
              value: 3,
              unit: "kg"
            },
            {
              title: "mango",
              value: 3,
              unit: "kg"
            },
            {
              title: "Piña",
              value: 1.4,
              unit: "kg"
            },
            {
              title: "Kiwi",
              value: 3,
              unit: "kg"
            },
            {
              title: "Arándanos",
              value: 3,
              unit: "kg"
            },
          ],
        }
      },
      decorations: {
        candles: {
          name: "candles",
          title: "velas de cumpleaños",
          value: 15,
          unit: "unidades"
        },
        arcs: {
          name: "arcs",
          title: "arcos decorativos",
          value: 5,
          unit: "unidades"
        },
        syrup: {
          name: "syrup",
          title: "jarabe de escritura",
          value: 1,
          unit: "lt"
        },
      }
    },
  },
  orders:[
    {
      user: {
        name: "Adrian González",
        phone: "6141520913",
        email: "adrigondo.profesional@gmail.com"
      },
      "cake": {
        cake: "Pastel de zanahoria",
        flavors: [ "Chocolate", "Frambuesa" ],
        decorations: [ "Velas de cumpleaños", "Arco con nombre" ],
        description: "213214"
      },
      completed: false,
      delivered: true
    },
    {
      user: {
        name: "Juan Escobar",
        phone: "000900009",
        email: "juan@gmail.com"
      },
      "cake": {
        cake: "Pastel de chocolate",
        flavors: [ "Chocolate", "Frambuesa" ],
        decorations: [ "Nombre escrito", "Arco con nombre" ],
        description: "Que diga siuuuuu!"
      },
      completed: true,
      delivered: false
    },
  ],
});

export default createStore({
  state: initialState(),
  getters: {
    getOrders(state){
      return state.orders;
    },
    getUser(state){
      return state.user;
    },
    getBaker(state){
      return state.bakery.baker;
    }
  },
  mutations: {
    addOrder(state, newOrder){
      state.orders.push(newOrder);
      /* console.log("Saved!");
      console.log(state.orders); */
    },
    updateOrders(state, newOrders){
      for(let i in state.orders){
        // console.log(state.orders[i])
        state.orders[i].completed=false;
        state.orders[i].delivered=false;
      }
      for(let i in newOrders){
        state.orders[newOrders[i][0]][newOrders[i][1]]=true;
      }
      console.log("Updated Orders!");
      console.log(state.orders);
    },
    setUser(state, newUser){
      state.user=newUser;
      console.log("User saved!");
      console.log(state.user);
    },
    setBaker(state, newBaker){
      state.bakery.baker=newBaker;
      console.log("Baker saved!");
      console.log(state.bakery);
    },
    updateIngredients(state, newIngredients){
      // console.log(state.bakery.inventory);
      
      for(let it in newIngredients){
        // console.log(state.bakery.inventory.ingredients[newIngredients[it][0]]);

        if(!state.bakery.inventory.ingredients[newIngredients[it][0]].kinds){
          // Accesss to quantity of ingredients with only 1 kind of presentation
          state.bakery.inventory.ingredients[newIngredients[it][0]].value=parseFloat(newIngredients[it][1][0]);
        }else{
          for(let j in newIngredients[it][1]){
            // Accesss to quantity of ingredients with more kinds of presentations
            state.bakery.inventory.ingredients[newIngredients[it][0]].kinds[j].value=parseFloat(newIngredients[it][1][j]);
          }
        }
      }
      console.log("Updated Ingredients!");
      console.log(state.bakery.inventory.ingredients);
    },
    updateDecorations(state, newDecorations){
      // console.log(state.bakery.inventory);

      for(let it in newDecorations){
        // console.log(state.bakery.inventory.Decorations[newDecorations[it][0]]);

        if(!state.bakery.inventory.decorations[newDecorations[it][0]].kinds){
          // Accesss to quantity of Decorations with only 1 kind of presentation
          state.bakery.inventory.decorations[newDecorations[it][0]].value=parseFloat(newDecorations[it][1][0]);
        }else{
          for(let j in newDecorations[it][1]){
            // Accesss to quantity of Decorations with more kinds of presentations
            state.bakery.inventory.decorations[newDecorations[it][0]].kinds[j].value=parseFloat(newDecorations[it][1][j]);
          }
        }
      }
      console.log("Updated Decorations!");
      console.log(state.bakery.inventory.decorations);
    },
  },
  actions: {
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
        },
        completed: false,
        delivered: false,
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
    },
    setBaker({commit}, Baker){
      let newBaker={
          name: Baker.name,
          user: Baker.user,
          password: Baker.password,
      }
      // console.log(newOrder);
      commit("setBaker", newBaker);
    },
    setBakeryData({commit}, bakeryData){
      let orders=[];
      for(let key in bakeryData){
        if(key.includes("order")){
          let update=key.split("_");
          orders.push([update[1], update[2]]);
          delete bakeryData[key];
        }
      }
      commit("updateOrders", orders);

      // console.log(bakeryData)

      let ingredients=[];
      for(let key in bakeryData){
        if(key.includes("ingredients")){
          let update=key.split("_");
          let values=bakeryData[key]
          ingredients.push([update[1], values]);
          delete bakeryData[key];
        }
      }
      // console.log(ingredients);
      commit("updateIngredients", ingredients);
      
      let decorations=[];
      for(let key in bakeryData){
        if(key.includes("decorations")){
          let update=key.split("_");
          let values=bakeryData[key]
          decorations.push([update[1], values]);
          delete bakeryData[key];
        }
      }
      // console.log(decorations);
      commit("updateDecorations", decorations);
    }
  },
  modules: {
  }
})
