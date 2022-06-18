<template>
    <div class="contact-modern pb--120 pb_md--80 pb_sm--80">
        <div class="container">
            <div class="row align-items-end">
                <div class="col pr--50 ptb-md--80 ptb-sm--80">
                    <div class="contact-modern bg_color--24 space_dec--100 pt--120 pb--120 pl--60 pr--60">
                        <div class="inner">
                            <h2 class="heading heading-h2 ">Start planning your perfect day</h2>

                            <div class="classic-address text-left mt--60">
                                <h4 class="heading heading-h4 ">Message me</h4>
                                <div class="social-share social--transparent ">
                                    <a href="https://www.facebook.com/JessicaDalwoodHarpist/?fref=ts" target="_blank">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                </div>
                                  <form v-on:submit.prevent="onSubmit">
              <div class="col-lg-12 mt--30">
                  <h3>Email Address*</h3>
                  <input v-model="con_email" name="con_email" type="text" placeholder="Email *" class="bg_color--1"/>
                </div>

                <div class="col-lg-12 mt--30">
                  <h3>Phone Number</h3>
                  <input v-model="con_phone" type="text" name="con_phone" placeholder="Phone number (not required)" class="bg_color--1" />
                </div>

                <div class="col-lg-12 mt--30">
                  <h3>Message</h3>
                  <textarea v-model="con_message" rows="10" name="con_message" placeholder="Your message" style="padding: 10px;" class="bg_color--1"></textarea>
                </div>
                                    <recaptcha id="check" style="padding: 15px"/>
                <div class="col-lg-2 mt--30" >
                  <input type="submit" value="Send message" class="bg_color--1 mb--30"/>
                  <p class="form-message"></p>
                </div>

            </form>
                            </div>

                        </div>
                    </div>
                </div>
        
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      con_email: '',
      con_phone: '',
      con_message: ''
    };
  },
  methods: {
    async onSubmit() {
      try {
        const token = await this.$recaptcha.getResponse()
        this.$store.commit('recaptcha/setToken', token);

        const response = await this.$axios.get('/api/check-token', {
          method: 'POST',
          body: JSON.stringify({
            token,
            email: this.con_email,
            phone: this.con_phone,
            message: this.con_message
          })
        }).then(res => res.json())

        console.log('Server Response: ', response)

        await this.$recaptcha.reset()

            if (response.data.success) {
                //const result = await this.$axios.post(process.env.CONTACT_FORM_API, formData);
                console.log("ATTEMPT SENDING DATA");
                console.log(formData);

                // cleanup logic
            } else {
                // handle error case
            }

      } catch (error) {
        console.log('Invalid Token');
        }
}
  }
};
</script>