<template>
  <ClientOnly>
    <div class="countdown-component-wrapper">
      <div class="media-stack-container">
        <img
            v-if="resolvedImage"
            :src="resolvedImage"
            alt="喜多"
            class="promo-image-filled"
            draggable="false"
        />
        <img
            ref="apngRef"
            src="/assets/image/kita.apng"
            alt="喜多灵堂"
            class="apng-animation"
            draggable="false"
        />
      </div>

      <div class="hope-countdown">
        <template v-if="timeLeft > 0">
          <span class="time-unit">{{timeDisplay.days }}</span> ::
          <span class="time-unit">{{timeDisplay.hours }}</span> :
          <span class="time-unit">{{timeDisplay.minutes }}</span> :
          <span class="time-unit">{{timeDisplay.seconds }}</span>
        </template>

        <div v-else class="expired-text">
          {{ expired }}
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  time: { type: [String, Number], required: true },
  image: { type: String, default: '' },
  expired: { type: String, default: '时间已过' }
});


// 图像处理中间层
const resolvedImage = computed(() => {
  if (!props.image) return '';

  // 判断是否为网络路径 (http 或 https 开头)
  const isNetworkPath = /^https?:\/\//.test(props.image);

  if (isNetworkPath) {
    // 如果是网络路径，浏览器会自动处理下载和缓存
    // 你可以在这里添加代理地址或者缓存逻辑
    return props.image;
  } else {
    // 如果是本地路径 (假设放在 public 目录下)
    // 确保以 / 开头
    return props.image.startsWith('/') ? props.image : `/${props.image}`;
  }
});


const apngRef = ref(null);
const timeLeft = ref(0);
let timer = null;

// ... timeDisplay 和 calculate 逻辑保持不变 ...
const timeDisplay = computed(() => {
  const t = Math.max(0, timeLeft.value);
  const pad = (n) => String(n).padStart(2, '0');
  return {
    days: Math.floor(t / 86400000).toString().padStart(2, '0'),
    hours: pad(Math.floor((t / 3600000) % 24)),
    minutes: pad(Math.floor((t / 60000) % 60)),
    seconds: pad(Math.floor((t / 1000) % 60))
  };
});

const calculate = () => {
  const end = new Date(props.time).getTime();
  timeLeft.value = end - Date.now();
};

onMounted(() => {
  calculate();
  timer = setInterval(calculate, 1000);

  // 预加载逻辑
  if (props.image && /^https?:\/\//.test(props.image)) {
    const img = new Image();
    img.src = props.image;
    img.onload = () => {
      console.log('网络图片预下载完成');
    };
  }

  if (apngRef.value) {
    const baseSrc = apngRef.value.src.split('?')[0];
    apngRef.value.src = `${baseSrc}?t=${Date.now()}`;
  }
});

onUnmounted(() => clearInterval(timer));
</script>

<style scoped>
/* 整体包裹层，负责居中和子元素间距 */
.countdown-component-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px; /* 媒体容器和倒计时之间的间距 */
  margin: 20px 0;
}

/* 核心：重叠容器 */
.media-stack-container {
  position: relative; /* 开启定位上下文，供子元素绝对定位 */
  width: 320px; /* 强制容器宽度为 320px */
  height: 180px; /* 强制容器高度为 180px */
  border: 1px solid var(--border-color); /* 可选：给整个组合加上边框 */
  border-radius: 8px; /* 可选：圆角 */
  overflow: hidden; /* 防止底层图片溢出容器圆角 */
}

/* 1. APNG 图片：固定尺寸并绝对定位到左上角 */
.apng-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* 填满父容器 (320px) */
  height: 100%; /* 填满父容器 (180px) */
  object-fit: contain; /* 确保 APNG 比例正确地填满 */
  z-index: 2; /* 确保 APNG 在最上面 */

  /* --- 核心防护代码 --- */
  pointer-events: none;       /* 禁止任何鼠标/手指事件（无法长按，无法右键） */
  user-select: none;          /* 禁止选中 */
  -webkit-user-drag: none;    /* 禁止拖拽 (针对 Chrome/Safari) */
  -webkit-touch-callout: none; /* 明确禁止系统默认菜单 (iOS Safari 特有) */
}

/* 2. 下方单张图片的样式：精确填充指定区域 */
.promo-image-filled {
  position: absolute;
  /* 根据你的要求计算出的定位和尺寸 */
  left: 110px;
  top: 22px;
  width: 102px;
  height: 122px;

  object-fit: cover;  /* 确保图片填满该区域，可能会有部分裁剪 */
  z-index: 1;         /* 确保图片在下面 */
  display: block;

  pointer-events: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
}

/* 3. 倒计时样式 */
/* 修改 3. 倒计时样式 */
.hope-countdown {
  font-family: "Torus SemiBold", "Torus", "AlibabaPuHuiTi-3-55-Regular", monospace;
  color: var(--theme-color);
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
}

.time-unit {
  font-family: "Torus SemiBold", "Torus", "AlibabaPuHuiTi-3-55-Regular", monospace;
  /* 减少左右内边距，从 6px 缩减到 2px 或 3px */
  padding: 2px 0;
  border-radius: 4px;
  /* 如果还是觉得远，可以加一个微小的负外边距 */
  margin: 0 1px;
}

.expired-text {
  font-family: "Torus SemiBold", "Torus", "AlibabaPuHuiTi-3-55-Regular", sans-serif;
  color: var(--text-color-lighter); /* 或者你喜欢的颜色 */
  font-size: 1.1rem;
  letter-spacing: 1px;
}

</style>