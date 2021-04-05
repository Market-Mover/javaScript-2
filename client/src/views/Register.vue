<template>
  <div class="container sign mt-5">
    <form class="text-center p-5 " @submit.prevent="onSubmit">
      <p class="h4 mb-4"></p>
      <!-- 2 column grid layout with text inputs for the first and last names -->
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline">
            <input type="text" id="form3Example1" class="form-control border-bottom" v-model="user.firstName"/>
            <label class="form-label" for="form3Example1">Förnamn</label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input type="text" id="form3Example2" class="form-control border-bottom" v-model="user.lastName"/>
            <label class="form-label" for="form3Example2">Efternamn</label>
          </div>
        </div>
      </div>

     
      <div class="form-outline mb-4">
        <input type="email" id="form3Example3" class="form-control border-bottom" v-model="user.email"/>
        <label class="form-label" for="form3Example3">E-post</label>
      </div>

      
      <div class="form-outline mb-4">
        <input type="password" id="form3Example4" class="form-control border-bottom" v-model="user.password"/>
        <label class="form-label" for="form3Example4">Lösenord</label>
      </div>

      
      <button type="submit" class="btn btn-info btn-flex mb-4">Registrera</button>

      <div class="text-center">
        <p>Redan medlem? <router-link to="/login">Logga in</router-link></p>
        
      </div>

    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['register',]),
    onSubmit(){
      if(this.user.firstName !== '' && this.user.lastName !== '' && this.user.email !== '' && this.user.password !== '') {
        this.register(this.user)
        // this.saveEmail(this.email)
      }
      
    }
  }
}
</script>

<style>
.sign {
  min-height: 800px;
}
</style>