<script setup>
import { ref } from "vue";
import { useMutation, useQuery } from "vue-query";
import { useRouter } from "vue-router";
import api from "../api";

const router = useRouter();
const { isLoading, data: cats } = useQuery(
  "cats",
  async () => (await api.get("/cats")).data
);

const { isLoading: isDelete, mutate: deleteC } = useMutation(
  "cats",
  async (id) => await api.delete(`/cats/${id}`)
);

const goToCats = (id) => {
  router.push({ path: `/chats/${id}` });
};

const deleteCat = (id) => {
  deleteC(id);
  router.go("/chats");
};
</script>

<template>
  <div>
    <h1 class="title primary">Liste de nos chats et leur citation</h1>
    <div
      v-for="{ id, name, fact, src } in cats"
      :key="id"
      class="mt-6 shadow-md rounded bg-white px-8 py-4 flex items-center"
    >
      <img
        :src="src"
        :alt="'Photo de' + name"
        class="h-20 w-20 object-center rounded-full mr-4"
      />
      <div class="flex flex-col">
        <h3 class="mb-2 text-3xl font-semibold">{{ name }}</h3>
        <h4 class="text-xs italic">{{ fact }}</h4>
      </div>
      <div class="flex-grow flex items-center justify-end">
        <button class="btn primary" @click="goToCats(id)">Éditer</button>
        <button class="btn cancel ml-4" @click="deleteCat(id)">
          Supprimer
        </button>
      </div>
    </div>
  </div>
</template>