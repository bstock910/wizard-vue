<template>
  <div class="container">
    <div class="spacer"></div>
    <h2 class="subtitle is-3 has-text-centered">Account Setup</h2>
    <nav class="level">
      <div class="level-item has-text-centered" v-for="(label,index) in labels" :key="index"><button class="button is-fullwidth nav-button" :class="{'is-info': index === currentStepNumber - 1}">
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
import AccountHome from '@/components/account/AccountHome'
import AccountReview from '@/components/account/AccountSummary'
import AccountSettings from '@/components/account/AccountSettings'
import AccountSocial from '@/components/account/AccountSocial'

export default {
  components: {
    AccountHome,
    AccountReview,
    AccountSettings,
    AccountSocial
  },
  data () {
    return {
      currentStepNumber: 1,
      canGoNext: true,
      asyncState: null,
      steps: [
        'AccountHome',
        'AccountSettings',
        'AccountSocial',
        'AccountReview'
      ],
      labels: [
        'Getting Started',
        'Account Settings',
        'Social Media',
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
