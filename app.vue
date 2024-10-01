<template>
  <div>
    <h1>Global Counter: {{ globalCounter }}</h1>
    <h1>Private Counter: {{ privateCounter }}</h1>
  </div>
</template>

<script lang="ts" setup>

const { globalCounter, privateCounter, incrementGlobalCounter, incrementPrivateCounter } = useCounter();

incrementGlobalCounter();
incrementPrivateCounter();

</script>
