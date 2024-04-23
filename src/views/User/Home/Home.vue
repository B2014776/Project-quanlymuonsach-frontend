<template>
  <div class="col relative p-4">
    
    <img class="rounded-[12px] w-[1500px] h-auto opacity-60"
         src="D:/project_daydu_ct499/quanlimuonsach_frontend/public/banner1.png"
         alt="Book wallpaper">

    
    <div ref="textContainer" class="text-[37px] italic absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#f4f3f3]">
      <span v-for="(char, index) in text" :key="index" :style="{ opacity: char.visible ? 1 : 0 }">{{ char.char }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const textContainer = ref(null);
const text = ref([
  { char: 'Sách', visible: false },
  { char: ' giống', visible: false },
  { char: ' như', visible: false },
  { char: ' một', visible: false },
  { char: ' chiếc', visible: false },
  { char: ' xe', visible: false },
  { char: ',', visible: false },
  { char: ' sách', visible: false },
  { char: ' sẽ', visible: false },
  { char: ' đưa', visible: false },
  { char: ' bạn', visible: false },
  { char: ' đi', visible: false },
  { char: ' đến', visible: false },
  { char: ' nơi', visible: false },
  { char: ' mà', visible: false },
  { char: ' không', visible: false },
  { char: ' cần', visible: false },
  { char: ' rời', visible: false },
  { char: ' khỏi', visible: false },
  { char: ' chổ.', visible: false },
]);

onMounted(() => {
  let delay = 0;

  text.value.forEach((item, index) => {
    setTimeout(() => {
      item.visible = true;
    }, delay);

    delay += 300; // Đặt khoảng thời gian 200ms cho mỗi chữ
  });
});
</script>



<script setup></script>

<style lang="scss" scoped>
  @import "./Home.scss";
</style>
