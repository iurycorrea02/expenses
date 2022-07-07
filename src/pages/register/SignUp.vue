<template>
<form class="form-signUp">
  <div class="sign-up">
    <div class="card-header text-center">
      <h1>Create a new Account</h1>
    </div>
    <div class="card-body">
      <div class="form-group">
        <input
          required
          type="email"
          placeholder="Email"
          v-model="email"
          class="form-control"
        >
      </div>
      <div class="form-group">
        <input
          required
          type="password"
          v-model="password"
          class="form-control"
          placeholder="Password"
        />
      </div>
      <div>
        <button @click="signUp" class="btn btn-primary w-100">Register</button>
      </div>
      <span>
        or return
        <router-link to="/login"> login.</router-link>
      </span>
    </div>
  </div>
</form>
</template>

<script>
// import firebase from 'firebase'

// export default {
//   name: 'signUp',
//   data () {
//     return {
//       email: '',
//       password: ''
//     }
//   },
//   methods: {
//     signUp () {
//       firebase.auth().createUserWithEmailAndPassword(this.email, this.senha).then(
//         (user) => {
//           this.$router.replace('home')
//         },
//         (err) => {
//           alert('Error' + err.message)
//         }
//       )
//     }
//   }
// }
</script>

<style lang="scss" scoped>
.form-signUp {
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
