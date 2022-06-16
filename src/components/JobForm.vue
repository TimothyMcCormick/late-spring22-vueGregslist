<template>
  <form class="row" action="">
    <div class="col-4">
      <label for="">company</label>
      <input class="form-control" type="text" v-model="jobData.company" />
    </div>
    <div class="col-4">
      <label for="">job title</label>
      <input class="form-control" type="text" v-model="jobData.jobTitle" />
    </div>
    <div class="col-4">
      <label for="">hours</label>
      <input class="form-control" type="number" v-model="jobData.hours" />
    </div>
    <div class="col-4">
      <label for="">rate</label>
      <input class="form-control" type="number" v-model="jobData.rate" />
    </div>
    <div class="col-8">
      <label for="">image Url</label>
      <input class="form-control" type="text" v-model="jobData.imgUrl" />
    </div>
    <div class="col-12">
      <label for="">description</label>
      <textarea
        class="form-control"
        name=""
        id=""
        cols="30"
        rows="5"
        v-model="jobData.description"
      ></textarea>
    </div>
    <div class="col-6">
      <button
        v-if="jobData.id"
        type="button"
        class="btn btn-primary"
        @click="editJob"
      >
        Edit Job
      </button>
      <button v-else type="button" class=" m-2 btn btn-primary" @click="createJob">
        Create
      </button>
    </div>
  </form>
</template>


<script>
import { AppState } from "../AppState";
import { computed, reactive, onMounted, ref, watchEffect } from "vue";
import { housesService } from "../services/HousesService";
import { Modal } from "bootstrap";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { jobsService } from "../services/JobsService";
export default {
  props: { editJob: { type: Object, required: false, default: {} } },
  setup(props){
    const jobData = ref({});
    watchEffect(() => {
      logger.log(props.editJob);
      jobData.value = props.editJob;
    });
    return {
      jobData,
      async createJob(){
        try {
          logger.log(jobData.value);
          await jobsService.createJob(jobData.value);
          jobData.value = {};
          Modal.getOrCreateInstance(document.getElementById("job-form")).hide();
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async editJob() {
        try {
          await jobsService.editJob(jobData.value);
          Modal.getOrCreateInstance(document.getElementById("edit-job" + jobData.value.id)).hide();
          Pop.toast("edited job", "success");
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>