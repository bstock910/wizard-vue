<template>
  <div class="container">
    <section class="section content has-text-centered">
      <h2 class="subtitle is-3">Welcome to the AppointMaster setup wizard</h2>
      <p>This will walk you through all steps necessary to set up and manage your account.</p>
      <p>You will be able to revisit any of these settings at a later time.</p>
      <hr>
      <h4 class="title is-4">Account Setup</h4>
      <p class="subtitle is-6">Manage account address, contact information, and social media presence</p>
      <router-link :to="{name: 'account'}"><button class="button is-info">
        Get Started
      </button></router-link>
      <hr>
      <h4 class="title is-4">Vaccine Reminder Setup</h4>
      <p class="subtitle is-6">Manage all settings for automated vaccine reminder emails and text messages</p>
      <router-link :to="{name: 'vaccines'}"><button class="button is-info">
        Get Started
      </button></router-link>
      <hr>
      <h4 class="title is-4">Postcard Setup</h4>
      <p class="subtitle is-6">Manage all settings tied to automated postcard processing for vaccine reminders</p>
      <router-link :to="{name: 'postcards'}"><button class="button is-info">
        Get Started
      </button></router-link>
      <hr>
      <h4 class="title is-4">Appointment Reminder Setup</h4>
      <p class="subtitle is-6">Manage all settings tied to automated email, text, and phone appointment reminder processing</p>
      <router-link :to="{name: 'appointments'}"><button class="button is-info">
        Get Started
      </button></router-link>
      <hr>
      <h4 class="title is-4">Recall Setup</h4>
      <p class="subtitle is-6">Manage all settings tied to automated email and text recall processing</p>
      <router-link :to="{name: 'recalls'}"><button class="button is-info">
        Get Started
      </button></router-link>
      <hr>
      <h4 class="title is-4">Reactivation Setup</h4>
      <p class="subtitle is-6">Manage all settings tied to automated email and text reactivation processing</p>
      <router-link :to="{name: 'reactivation'}"><button class="button is-info">
        Get Started
      </button></router-link>
      <hr>
      <h4 class="title is-4">Online Scheduling Setup</h4>
      <p class="subtitle is-6">Manage all settings tied to your online scheduling system, allowing your clients to book online</p>
      <router-link :to="{name: 'scheduling'}"><button class="button is-info">
        Get Started
      </button></router-link>
      <hr>
      <h4 class="title is-4">Surveys Setup</h4>
      <p class="subtitle is-6">Manage all settings tied to automated vaccine reminder emails and text messages</p>
      <router-link :to="{name: 'surveys'}"><button class="button is-info">
        Get Started
      </button></router-link>
      <hr>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
