<template>
    <div class="order">
        <form ref="form">
            <label>First name:</label>
            <input v-model="firstName" placeholder="First name" required /><br />
            <label>Last name:</label>
            <input v-model="lastName" placeholder="Last name" required /><br />
            <label>Middle name:</label>
            <input v-model="middleName" placeholder="Middle name" /><br />
            <label>Address:</label>
            <input v-model="address" placeholder="Address" required /><br />
            <label>Delivery date:</label>
            <select v-model="deliveryDate" required>
                <option disabled value="">Choose date</option>
                <option v-for="date in deliveryDates" :value="date" :key="date">{{ date }}</option>
            </select><br />
            <input class="button" type="submit" value="Confirm" @click="createOrder" />
        </form>
    </div>
</template>

<script>
import { call } from 'vuex-pathify';
import utils from '@/utils';

export default {
  name: 'Order',
  data() {
    return {
      firstName: '',
      lastName: '',
      middleName: '',
      address: '',
      deliveryDate: '',
      deliveryDays: 7,
    };
  },
  computed: {
    deliveryDates() {
      const date = new Date();
      const dates = [];

      for (let i = 1; i <= this.deliveryDays; ++i) {
        date.setDate(date.getDate() + 1);

        dates.push(utils.getFormattedDate(date));
      }

      return dates;
    },
  },
  methods: {
    clearBasket: call('basket/clear'),
    createOrder() {
      if (!this.$refs.form.checkValidity()) {
        return;
      }

      this.clearBasket();
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
input, select {
    margin: 15px;
}
</style>
