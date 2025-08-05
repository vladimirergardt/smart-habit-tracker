<template>
  <div class="app">
      <!--app topBar-->
      <transition name="fade" mode="out-in">
          <router-view name="topBar" />
      </transition>
    <main class="main-container">
        <!--app sideBar-->
        <transition name="fade" mode="out-in">
            <router-view name="sideBar" />
        </transition>

        <!--app content-->
        <section>
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </section>
    </main>
  </div>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'App',
        setup() {
        }
    })
</script>

<style lang="scss">
    @import "@/assets/main.scss";
</style>
