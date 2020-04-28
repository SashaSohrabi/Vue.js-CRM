<template>
  <div>
    <div class="page-title">
      <h3>Профиль</h3>
    </div>

    <form class="form">
      <div class="input-field">
        <input id="description" type="text" v-model="name" />
        <label for="description">Имя</label>
        <span class="helper-text invalid">name</span>
      </div>

      <div class="switch">
        <label>
          Off
          <input type="checkbox" />
          <span class="lever"></span>
          On
        </label>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    name: ""
  }),
  mounted() {
    this.name = this.info.name;
    setTimeout(() => {
      M.updateTextFields();
    });
  },
  computed: {
    ...mapGetters(["info"])
  }
};
</script>

<style scoped>
.switch {
  margin-bottom: 2rem;
}
</style>