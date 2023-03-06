import { ref } from "vue";

export default function useExtractUser(userDetails) {
  const currentUser = ref("");
  function getName() {
    currentUser.value.name = userDetails;
  }
  return { currentUser, getName };
}
