
const globalCounter = ref(0);

export const useCounter = () => {

  const privateCounter = ref(0);

  const incrementGlobalCounter = () => globalCounter.value++;
  const incrementPrivateCounter = () => privateCounter.value++;

  return {
    globalCounter,
    privateCounter,
    incrementGlobalCounter: () => globalCounter.value++,
    incrementPrivateCounter: () => privateCounter.value++
  };
};
