<template>
  <div id="sportsList" class="md:container md:mx-auto">
    <Filters :filters="filters"/>
    <div class="leagueList mt-10 flex flex-wrap justify-around lg:justify-start">
      <League v-for="(league, index) in leagues" :key="index" :data="league"/>
    </div>
  </div>
</template>

<script>
import Filters from "@/components/Filters";
import League from "@/components/League";
import axios from "axios";
import {mapGetters} from 'vuex'

export default {
  name: "SportsList",
  components: {
    Filters,
    League
  },
  data() {
    return {
      dataSet: [],
    }
  },
  methods: {
    async getSportsData() {
      this.dataSet = await axios.get("http://localhost:3001/sports")
          .then((response) => {
            return response.data
          }).catch(() => {
            return []
          });
    }
  },
  mounted() {
    this.getSportsData();
  },
  computed: {
    ...mapGetters({
      activeFilters: 'getActiveFilters',
      showAll: 'isDefaultFilter'
    }),
    filters() {
      return this.dataSet.reduce((arr, sport) => {
        arr.push(sport.title);
        return arr;
      }, ['All Sports']);
    },
    sports() {
      return this.dataSet.map((sports) => {
        return sports;
      });
    },
    leagues() {
      let list = [];
      this.filteredSports.map((sport) => {
        sport.leagues.forEach((league) => {
          list.push(league);
        })
      })
      return list;
    },
    filteredSports() {
      if (this.showAll) {
        return this.sports
      } else {
        let list = [];
        this.sports.forEach((sport) => {
          if (this.activeFilters.includes(sport.title)) {
            list.push(sport);
          }
        });
        return list;
      }
    }
  }

}
</script>

<style scoped>

</style>