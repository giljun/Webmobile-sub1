<template>
  <v-app>
    <Header/>
    <v-content>
      <router-view/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import store from './store'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
	name: 'App',
  components:{
    Header,
  	store,
    Footer
  },
	data() {
		return {
			//
		}
	}
}
</script>
