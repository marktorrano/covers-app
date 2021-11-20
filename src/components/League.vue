<template>
  <div class="leagueItem font-semibold mb-4">
    <div class="leagueItem__header">
      <span>{{ data.acronym }}</span>
    </div>
    <div class="leagueItem__teamList bg-tertiary flex-1 flex flex-col justify-between">
      <div class="leagueItem__teams">
        <div class="leagueItem__team" v-for="(team, idx) in data.teams" :key="idx">
          <clazy-load :src="'img/global/covers_logo.svg'" class="leagueItem__teamLogo">
            <div class="leagueItem__image">
              <img :src="team.logo" :alt="team.name">
            </div>
            <div class="preloader" slot="placeholder">
              <div class="lds-dual-ring"></div>
            </div>
          </clazy-load>
          <span class="text-primary text-center">{{ team.name }}</span>
        </div>
      </div>
      <div class="leagueItem__footer w-full pb-4 pt-8 px-4">
        <span class="leagueItem__cta w-full bg-secondary text-white cursor-pointer px-4 rounded py-1 flex justify-center">Get live {{ data.acronym }} odds</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "League",
  props: {
    data: Object,
    default: () => {
      return {}
    }
  }
}
</script>

<style scoped>

.leagueItem {
  width: 240px;
  @apply mx-2 flex flex-col;
}

.leagueItem__header {
  @apply flex flex-row justify-center bg-primary text-white rounded-t py-1;
}

.leagueItem__team {
  @apply px-8 flex flex-col justify-center;
}

.leagueItem__image {
  @apply w-16 h-16 bg-white rounded-full flex justify-center;
}

.preloader {
  @apply flex justify-center flex-col;
}

.leagueItem__teamLogo {
  @apply flex flex-col mt-6 mb-2 justify-center items-center;
}

.lds-dual-ring {
  display: inline-block;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid;
  border-color: #043f47 transparent #043f47 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>