new Vue({
    el: '#orders',
    data: {
    orders: []
    },
    created: function () {
          const vm = this;
          axios.get('/api/orders/')
          .then(function(response){
          vm.orders = response.data
          })
    }
}

)