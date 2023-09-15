<!-- AddData.vue -->
<template>
  <div>
    <form @submit.prevent="addData">
      <input v-model="dataField" placeholder="Data to add" />
      <button type="submit">Add Data</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dataField: '',
    };
  },
  methods: {
    async addData() {
      try {
        const response = await axios.post('/api/addData', {
          name: "testicles",
          email: "testicles@testicles.com",
          password: "testicles"
        });

        console.log('Data added successfully:', response.data.message);

        // Clear the input field after successful submission
        this.dataField = '';
      } catch (error) {
        console.error('Error adding data:', error);
      }
    },
  },
};
</script>
