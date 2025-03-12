<template>
  <div class="columns is-multiline">
    <div
      class="column is-one-third-desktop is-half-tablet is-full-mobile"
      v-for="(emoji, index) in emojis"
      :key="index"
    >
      <div class="box square-box">
        <div class="box-content">
          {{ emoji }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SeedInventory',
  data() {
    return {
      // Define your 9 emojis here
      emojis: ['🌱', '🪴', '🌲', '🌳', '🌴', '🌵', '🌾', '🌿', '🍀']
    }
  }
}
</script>

<style scoped>
/* Ensure the columns wrap and have appropriate gaps */
.columns.is-multiline {
  margin: auto;
}

/* Make each box square using a pseudo-element */
.square-box {
  position: relative;
  width: 100%;
}

.square-box::before {
  content: "";
  display: block;
  padding-top: 100%; /* forces square aspect ratio */
}

.box-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em; /* adjust as needed */
}

/* Tablet breakpoint adjustments */
@media screen and (max-width: 1023px) and (min-width: 769px) {
  .column.is-half-tablet {
    flex: 1 0 300px;
    
    max-width: 150px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>