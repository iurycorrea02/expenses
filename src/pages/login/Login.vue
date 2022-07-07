<!-- eslint-disable no-undef -->
<template>
<form class="form-login">
  <div class="card">
    <div class="card-header text-center">
      <h1 class="mb-0">Expenses</h1>
    </div>
    <div class="card-body">
      <div class="form-group">
        <input required type="email" v-model="email" class="form-control" placeholder="Email"/>
      </div>
      <div class="form-group">
        <input
          required
          type="password"
          v-model="password"
          class="form-control"
          placeholder="Senha"
        />
      </div>
      <div>
        <button class="btn btn-primary w-100">Login</button>
      </div>
      <span>
        you don't have an account?
        <router-link to="/register">Create account</router-link>
      </span>
    </div>
  </div>
</form>
</template>

<script>
// export default {
//   name: 'Login',
//   data: () => {
//     return {
//       email: '',
//       password: ''
//     }
//   },
//   methods: {

// doLogin () {

//   this.$firebase.auth().signInWithEmailAndPassword()

//   console.log('formulario')
// }
//   }
// }
import firebase from 'firebase/auth'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('home')
          // eslint-disable-next-line no-undef
          alert(`Welcome, ${{ email }}`)
        },
        (err) => {
          alert('Nao foi possivel fazer login' + err.message)
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.form-login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 18pt;
  }

  .card {
    width: 30%;
    color: var(--darker);
  }

}
</style>
