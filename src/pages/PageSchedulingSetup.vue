<template>
  <div class="container">
  <div class="spacer"></div>
  <h2 class="subtitle is-3 has-text-centered">Online Scheduling Setup</h2>
  <nav class="level">
    <div class="level-item has-text-centered" v-for="(label, index) in labels" :key="index"><button class="button is-fullwidth nav-button" :class="{'is-info': index === currentStepNumber - 1}">
      {{label}}
    </button></div>
  </nav>
  <section class="section">
    <keep-alive>
      <component
        ref="currentStep"
        :is="currentStep">
      </component>
    </keep-alive>
  </section>
  <div class="buttons is-right">
    <button
      @click="goBack"
      v-if="currentStepNumber > 1"
      class="button is-info"
    >Back
    </button>
    <button
      @click="goNext"
      :disabled="!canGoNext"
      class="button is-info"
    >{{isLastStep ? 'Submit' : 'Next'}}</button>
  </div>
  <div class="spacer"></div>
</div>
</template>

<script>
import SchedulingHome from '@/components/scheduling/SchedulingHome'
import SchedulingOfficeHours from '@/components/scheduling/SchedulingOfficeHours'
import SchedulingScheduleSelection from '@/components/scheduling/SchedulingScheduleSelection'
import SchedulingReasonSelection from '@/components/scheduling/SchedulingReasonSelection'
import SchedulingAdditional from '@/components/scheduling/SchedulingAdditional'
import SchedulingSummary from '@/components/scheduling/SchedulingSummary'
export default {
  components: {
    SchedulingHome,
    SchedulingOfficeHours,
    SchedulingScheduleSelection,
    SchedulingReasonSelection,
    SchedulingAdditional,
    SchedulingSummary
  },
  data () {
    return {
      currentStepNumber: 1,
      canGoNext: true,
      asyncState: null,
      steps: [
        'SchedulingHome',
        'SchedulingOfficeHours',
        'SchedulingScheduleSelection',
        'SchedulingReasonSelection',
        'SchedulingAdditional',
        'SchedulingSummary'
      ],
      labels: [
        'Getting Started',
        'Office Hours',
        'Schedule Selection',
        'Reason Selection',
        'Additional Settings',
        'Summary'
      ]
    }
  },
  computed: {
    isLastStep () {
      return this.currentStepNumber === this.length
    },
    inProgress () {
      return this.currentStepNumber <= this.length
    },
    length () {
      return this.steps.length
    },
    currentStep () {
      return this.steps[this.currentStepNumber - 1]
    },
    progress () {
      return (this.currentStepNumber / this.length) * 100
    }
  },
  methods: {
    goBack () {
      this.currentStepNumber--
      this.canGoNext = true
    },
    goNext () {
      this.currentStepNumber++
      // this.canGoNext = false
      this.$nextTick(() => {
        this.canGoNext = !this.$refs.currentStep.$v.$invalid
      })
    }
  }
}
</script>

<style scoped>

</style>
