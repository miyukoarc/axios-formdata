import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        list: []
    },
    actions: {
        postRes: function() {

            let form = new FormData();
            form.append('platform', 'TMALL');
            form.append('page', 1);
            let params = new URLSearchParams(form)

            axios({

                method: 'POST',
                url: 'api/sys/listTmallShop',
                params,

            }).then(function(res) {
                console.log(res)
                store.state.list = res
            })

        }
    }
})

export default store