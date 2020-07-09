<template>
  <div class="main">
    <div class="notification" v-if="getError">Ваш лимит кончился!</div>
    <div class="container"> 
        <div class="row">

          <draggable
              class="items"
              :list="items"
              :group="{ name: 'items', pull: 'clone', put: false }"
              @change="log"
              :move="checkMove"
            >
                
            <div class="item"  v-for="element in items" :key="element.title + Math.random()">
              <div class="img">
                <img :src="element.img">
              </div>
              <p class="title">{{ element.title }}</p>
              <p class="price">$ {{ element.price }}</p>
            </div>
          </draggable>

          <div id="cart">
            <div class="col-12">
              <div class="cart-wrap">
                <div class="cart-body">
                  <draggable
                    class="items row"
                    :list="basket"
                    group="items"
                    @change="log"
                    :move="checkMove"
                  >
                    <div class="item"  v-for="element in basket" :key="element.title + Math.random()">
                      <div class="img">
                        <img :src="element.img">
                      </div>
                      <p class="title">{{ element.title }}</p>
                      <p class="price">$ {{ element.price }}</p>
                    </div>
                  </draggable>
                </div>
                <div class="cart-footer">
                  <button @click="clear" class="cart-button cart-clear">Clear Cart</button>
                  <div class="cart-footer-end">
                    <div class="cart-button cart-maxbudget">Budget <span>$ {{getBudget}}</span></div>
                    <div class="cart-button cart-items">Items <span>{{getCount}}</span></div>
                    <div class="cart-button cart-budget">Max Budget <span>$ {{maxBudget}}</span></div>
                  </div>                
                </div>
              </div>
              <p>Введите максимальный бюджет</p>
              <input v-model="maxBudget" placeholder="Введите максимальный бюджет">
            </div>
          </div>        
        </div>      
      </div>

    
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "clone",
  display: "Clone",
  order: 2,
  components: {
    draggable
  },
  data() {
    return {
      items: [
        { img: "https://c.dns-shop.ru/thumb/st1/fit/190/190/4b1a1b4786a8104bb59dbf46957162ea/d62b91936668722453ef00c34eec95b2aef6f8c0aa1fc1eedb5b0e39767d91d0.jpg.webp", title: "Honor Play 64", price: 4 },
        { img: "https://c.dns-shop.ru/thumb/st1/fit/190/190/5d775fd7bc5f4467ef5a4d850b01b382/0a7d4d870b5d0696d31b1d6ef6b1d48e8db10fa8833c6bff346d92ef73de6553.jpg.webp", title: "Acer Aspire 3", price: 3 },
        { img: "https://c.dns-shop.ru/thumb/st4/fit/190/190/7ba030429d411c35dce36d8651d2700d/34b0d4ad6b7b3c350fb32c3643416b8966a295b481cef341bf74cde00332e338.jpg.webp", title: "KFA2 GeForce RTX 2060", price: 8 },
        { img: "https://c.dns-shop.ru/thumb/st4/fit/190/190/3ea71721734c6827959049b71d135403/eb2825341310230d75e9c836486d15bc8f147548d795a18c84f91a34f7fb52ec.jpg.webp", title: "Hundai H-LED32ES", price: 21 }
      ],
      basket: [
        
      ],
      budget: 0,
      maxBudget: 50,
      error: false
    };
  },
  computed: {
    getBudget: function(){
      return this.budgetSum();
    },
    getCount: function(){
      return this.basket.length
    },
    getError: function(){
      if (this.budget>=this.maxBudget)
        return true
      else
        return false
    }
  },
  methods: {
    budgetSum: function(){
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      if (this.basket.length) {
        let basketPrices = this.basket.map(function(basket) {
          return basket.price;
        });
        this.budget = basketPrices.reduce(reducer)
      }
      return this.budget; 
    },
    log: function(evt) {
      window.console.log(evt);
    },
    clear: function(){
      this.basket = [];
      this.budget = 0;
      this.error = false;
    },
    checkMove: function(evt) {
      if (this.budget + evt.draggedContext.element.price>this.maxBudget){
        return false
      }
      return true;
    },
  }
};
</script>
<style >
  body *{
  font: icon;
}
#cart{
  display: flex;
  width: 100%;
}

#cart .cart-wrap{
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  min-height: 500px;
  border-radius: 25px;
  border: 5px solid #666664;
  background: #eaeaec;
    overflow: hidden;
}
#cart .cart-footer{
  width: 100%;
  height: 20%;
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  background: #323234;
  border-top: 5px solid #666664;
  padding: 10px 15px; 
}
#cart .cart-button{
  display: flex;
    align-items: center;
  background: #fff;
  color: #666664;
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: 700;
  border: 0px;
}
#cart .cart-button span{
  color: #2696c6;
  margin-left: 5px;
  font-weight: 700;
}
#cart .cart-clear:hover{
  color: #2696c6;
}
#cart .cart-clear{
  cursor: pointer;
}
#cart .cart-footer-end{
  display: flex;
}
#cart .cart-footer-end .cart-button{
  margin-right: 10px;
}
#cart .cart-footer-end .cart-button:last-child{
  margin-right: 0px;
}
#cart .cart-body{ 
  display: flex;
  width: 100%;
    height: 80%;
  overflow: hidden;
}

#cart .items.row{
  margin-left: 0px;
  margin-right: 0px;
}
#cart .items .item{
  width: 25%;
    margin: 10px 0px;
}
.items{
  display: flex;
  width: 100%;
  margin-bottom: 30px;
}
.items .item{
  text-align: center;
  border-radius: 25px;
  border: 1px solid #aaaaac;
  width: 100%;
  -webkit-box-shadow: 4px 10px 43px -10px rgba(0,0,0,0.4);
  -moz-box-shadow: 4px 10px 43px -10px rgba(0,0,0,0.4);
  box-shadow: 4px 10px 43px -10px rgba(0,0,0,0.4);
  padding: 15px;
  margin-right: 25px;
}
.items .item:hover{
  -webkit-box-shadow: 4px 10px 43px -10px rgba(38, 150, 198, 0.4);
  -moz-box-shadow: 4px 10px 43px -10px rgba(38, 150, 198, 0.4);
  box-shadow: 4px 10px 43px -10px rgba(38, 150, 198, 0.4);
  cursor:move;
}
.items .item:last-child{
  margin-right: 0px;
}
.items .item .img{
  width: 160px;
    height: 160px;
    margin: auto; 
    display: flex;
    align-items: center;
    justify-content: center;
}
.items .item .img img{
  max-width: 100%;
    max-height: 100%;
    pointer-events: none;
}

.notification{
    background: red;
    color: #fff;
    font-size: 25px;
    position: fixed;
    border-radius: 10px;
    padding: 15px;
    right: 10px;
    top: 10px;
}
</style>

