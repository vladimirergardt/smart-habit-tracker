<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const menuItems = ref([
        {
            name: 'dashboard',
            path: '/',
            icon: 'dashboard',
        },
        {
            name: 'habits',
            path: '/habits',
            icon: 'habits',
        },
    ]);
</script>

<template>
    <div class="side-bar">
        <ul class="side-bar__list">
            <li
                class="side-bar__list-item"
                v-for="(item, index) in menuItems"
                :key="index"
                @click="router.push(item.path)"
            >
                    {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.side-bar {
  width: 200px;
  height: calc(100vh - 50px);
  background: #586ead;
  color: white;
  font-size: 24px;

  &__list {
    width: 100%;
    margin: 0;
    padding: 0;

    &-item {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        background: #7fa3ff;
      }
    }
  }
}
</style>
