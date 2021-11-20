<template>
  <div id="filters" class="">
    <div class="hidden lg:block">
      <span
          class="filterItems"
          :class="{'active': isActive(sport)}"
          @click="$store.dispatch('toggleFilter', sport)"
          v-for="(sport, index) in filters"
          :key="index">
        {{ sport }}
      </span>
    </div>
    <div class="md:inline lg:hidden mx-2">
      <div class="inline select-none" v-click-outside="hideMobileFilter">
        <div class="filter__header inline flex justify-between bg-primary text-white px-4 py-2 w-60 rounded cursor-pointer" @click="showMobileFilter">
          <span>Filters <span class="ml-2"> ({{ filterCount }})</span></span>
          <svg v-if="filterCollapsed" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
        <div class="filterList__mobile flex flex-col absolute bg-white" v-if="filterCollapsed">
          <span
              class="px-4 py-2 w-60 cursor-pointer"
              :class="{'active': isActive(sport)}"
              @click="$store.dispatch('toggleFilter', sport)"
              v-for="(sport, index) in filters"
              :key="index">
          {{ sport }}
        </span>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Filters",
  methods: {
    isActive(filterName) {
      return this.activeFilters.includes(filterName);
    },
    toggleFilter(filterName) {
      this.$store.dispatch('toggleFilter', filterName)
    },
    showMobileFilter() {
      this.filterCollapsed = true;
    },
    hideMobileFilter() {
      this.filterCollapsed = false;
    }
  },
  computed: {
    ...mapGetters({
      activeFilters: 'getActiveFilters',
      isDefaultFilter: 'isDefaultFilter'
    }),
    filterCount() {
      return this.isDefaultFilter ? 'All' : this.activeFilters.length;
    }
  },
  props: {
    filters: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      selected: 'All Filters',
      filterCollapsed: false
    }
  }
}
</script>

<style scoped>

.filterItems {
  @apply px-12 py-2 border-2 rounded mx-2 border-primary cursor-pointer select-none text-primary font-semibold;
}

.active {
  @apply text-white bg-primary;
}

</style>