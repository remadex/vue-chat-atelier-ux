<script setup>
import { useRoute, useRouter } from "vue-router";
import { useQuery, useMutation } from "vue-query";
import api from "../api";
import CatForm from "../components/CatForm.vue";

const route = useRoute();
const router = useRouter();

const { isLoading, data: cat } = useQuery(
  "cats",
  async () => (await api.get(`/cats/${route.params.id}`)).data
);

const { isLoading: isUpdate, mutate: update } = useMutation(
  "cats",
  async (value) => await api.put(`/cats/${route.params.id}`, value)
);

const updateCat = (catForm) => {
  update(catForm.value);
  router.push({ path: "/chats" });
};
</script>

<template>
  <CatForm mode="edit" v-bind="cat" @on-submit="updateCat" v-if="cat" />
</template>