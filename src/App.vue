<template>
  <div class="container">
    <div id="parchment"></div>
    <div id="contain">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/seedInventory">Seed Inventory</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </div>

  <svg>
    <filter id="wavy2">
      <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
      <feDisplacementMap in="SourceGraphic" scale="20" />
    </filter>
  </svg>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.scrollHeight();
    window.addEventListener('resize', this.scrollHeight);
  },
  updated() {
    // Optionally, you can call it here too if needed
    this.scrollHeight();
  },
  watch: {
    $route() {
      // Wait for the new view to be rendered
      this.$nextTick(() => {
        this.scrollHeight();
      });
    }
  },
  unmounted() {
    window.removeEventListener('resize', this.scrollHeight);
  },
  methods: {
    scrollHeight() {
      const content = document.querySelector('#parchment');
      const container = document.querySelector('#contain');
      if (content && container) {
        content.style.height = container.offsetHeight + 'px';
      }
    }
  }
}


</script>

<style>

/* WARNING ! This solution seems to not work on all navigators.
This problem was reported to me on :
https://stackoverflow.com/questions/14585101/old-paper-background-texture-with-just-css/

August 2021 : ok on Chrome v92+, Firefox v90+, Edge v92+
*/

html, body {
	height: 100%;
}

#parchment {
  position: absolute;
  display: flex;
	width: 80%;
  /* center page with absolute position */
  top: 0%; left: 50%; transform: translate(-50%, 0);
  margin: 2em 0;
	padding: 4em;
	box-shadow: 2px 3px 20px black, 0 0 125px #8f5922 inset;
	background: #fffef0;
  /* v2.1 : borders effect with SVG : try to play with scale to change them */
  filter: url(#wavy2);
  /* v2.2 : Noise added for a vellum paper effect */
  background-image: url(data:image/png;base64,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);
}

#contain {
  position: relative;
 	display: flex;
  flex-direction: column;
  align-items: center;
	width: 75%;
  height: auto;
  margin: 0 auto;
	padding: 4em;
}


#app {
  //border: 1px solid red;
}
</style>
