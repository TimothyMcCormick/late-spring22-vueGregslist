<template>
  <div class="container-fluid">
    <div class="row g-3 my-2">

    <Job v-for="j in jobs" :key="j.id" :job="j"/>
    
</div>
  </div>
  <Modal id="job-form">
    <template #header> Create Job</template>
    <template #body><JobForm /></template>
  </Modal>
</template>


<script>
import { AppState } from "../AppState";
import { computed, reactive, onMounted } from "vue";
import { jobsService } from "../services/JobsService";
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop";
export default {
  setup() {
    onMounted(async() => {
      try {
        await jobsService.getAll()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      jobs: computed(() => AppState.jobs)
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
