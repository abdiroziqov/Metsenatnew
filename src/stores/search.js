import { defineStore } from "pinia";
import {ref, computed} from "vue";

export const useCounterStore = defineStore("counter", () => {
    const search = ref();
    const getSearch = computed(() => {
        return search.value
    })
    const setSearch = function(payload) {
        search.value = payload
    }

    return { search, getSearch, setSearch };
});

