<script setup>
import CatForm from "../components/CatForm.vue";
import { useMutation } from "vue-query";
import { useRouter } from "vue-router";
import api from "../api";

const router = useRouter();

const { isLoading, mutate: add } = useMutation(
  "cats",
  async (value) => await api.post("/cats", value)
);
const onSubmit = (cat) => {
  add(cat.value);
  router.push({ path: "/chats" });
};
</script>

<template>
  <CatForm mode="create" @on-submit="onSubmit" />
</template>