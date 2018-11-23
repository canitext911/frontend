<template>
  <div id="app">
    <h1>Can I Text 911?</h1>
    <p>
      Coming Soon
    </p>
    <p>
      <Button @click="handleRegistry">View FCC Registry</Button>
    </p>
    <p>
      <small>Questions? Email support@shengslogar.com</small>
    </p>
  </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  name: 'App',
  methods: {
    handleRegistry() {
      window.open('https://www.fcc.gov/files/text-911-master-psap-registryxlsx');
    },
  },
  components: { Button },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font: 16px Oxygen, sans-serif;
  height: 100vh;
  margin: 0;
  cursor: default;
  color: #444;
}

h1 {
  font-size: 4rem;
  margin: 0;
  color: #000;
}

#app {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  min-height: 100%;
  width: 100%;
}
</style>
