<template>
  <div class="column is-8 is-offset-2">
    <form>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label for="name" class="label">Office Name</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" name="name" placeholder="Office Name" /></div>
            <p class="help">The name that will show on all emails sent and all online pages</p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label for="smsName" class="label">SMS Office Name</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" name="smsName" placeholder="SMS Name" /></div>
            <p class="help">The name that will show on any automated SMS communications. If you have a long office name we recommend shortening this.</p>
          </div>
        </div>
      </div>
      <hr>
      <h5 class="subtitle is-5 has-text-centered">Office Address</h5>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="address1" class="label">Address</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input type="text" name="address1" class="input" placeholder="Line 1">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"></div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input type="text" name="address2" class="input" placeholder="Line 2">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label"><label for="city" class="label">City</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input type="text" class="input" placeholder="City">
            </div>
            </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label"><label for="state" class="label">State</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" placeholder="State"></div></div>
          <div class="field-label"><label for="state" class="label">ZIP</label></div>
          <div class="field-body"><div class="control"><input type="text" class="input" placeholder="Postal Code"></div></div>
        </div>
      </div>
      <hr>
      <h5 class="subtitle is-5 has-text-centered">Contact Information</h5>
      <div class="field is-horizontal">
        <div class="field-label">
          <label for="email" class="label">Email Address</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
            <input type="text" class="input" placeholder="Email Address">
          </div>
            <p class="help">The address where you will receive all AppointMaster notifications, standard reports, and any client email replies.</p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <label for="phone" class="label">Phone Number</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
            <input type="text" class="input" placeholder="Phone Number">
          </div>
            <p class="help">The phone number that will display on all outbound communications, as well as the caller ID of any outbound calls placed.</p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
