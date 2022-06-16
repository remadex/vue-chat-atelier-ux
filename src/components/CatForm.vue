<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps(["mode", "id", "name", "fact", "src"]);
const emit = defineEmits(["onSubmit"]);

const router = useRouter();

const cat = ref({
  name: "",
  fact: "",
  src: "",
});

if (props.id) {
  cat.value = {
    name: props.name,
    fact: props.fact,
    src: props.src,
  };
}

const catValidate = computed(() => {
  return !cat.value.name || !cat.value.fact || !cat.value.src;
});

const submit = () => {
  emit("onSubmit", cat);
};

const reset = () => {
  router.push({ path: "/chats" });
};
</script>

<template>
  <form @submit.prevent="submit" @reset.prevent="reset">
    <h2 class="title primary">
      {{ mode === "edit" ? "Edition d'un chat" : "Ajouter un chat" }}
    </h2>
    <div class="form-control input">
      <label for="name">Nom du chat</label>
      <input type="text" id="name" v-model="cat.name" />
    </div>
    <div class="form-control input">
      <label for="fact">Citation du chat</label>
      <input type="text" id="fact" v-model="cat.fact" />
    </div>
    <div class="form-control input">
      <label for="src">Image du chat</label>
      <input type="text" id="src" v-model="cat.src" />
    </div>
    <div class="flex justify-end mt-8">
      <button type="submit" class="btn primary" :disabled="catValidate">
        {{ mode === "edit" ? "Editer" : "Ajouter" }}
      </button>
      <button type="reset" class="btn cancel ml-6">Annuler</button>
    </div>
  </form>
</template>