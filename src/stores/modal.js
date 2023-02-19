import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => {
    return { showSubModal: false };
  },

  actions: {
    changeVisible() {
      this.showSubModal = !this.showSubModal;
    },
  },
});
