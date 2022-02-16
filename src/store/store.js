import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store= new Vuex.Store({
state:{
    products:[
        {name:'Banana Skin',price:20},
        {name:'Shinny Star',price:40},
        {name:'Green Shelly',price:60},
        {name:'Red Shelly',price:40}
    ]
},
    getters:{
        saleProducts: state=>{
            return state.products.map((product) => {
                return {
                    name: '**' + 'product.name' + '**',
                    price: product.price / 2
                }
            });
        }
    },
    mutations:{

        reducePrice:(state,payload) =>{
            console.log(payload)
           state.products.forEach(product =>{
               product.price -= payload;
               console.log(product.price)
            });
        }
    },
    actions:{
        reducePrice:(context,payload) =>{
            console.log(payload)
            setTimeout(() =>{
                context.commit('reducePrice',payload)
            },200)
        },
    }


});