<template>
    <section>
        Habits page: {{ count }}
        {{ testText }}
        <button @click="increment()">+1</button>
    </section>
</template>

<script>
import componentScript from './habits-page.js';

export default {
    ...componentScript,
};
</script>
