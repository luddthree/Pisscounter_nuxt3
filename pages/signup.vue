<!-- components/LoginData.vue -->
<template>
  <div>
    <h1>Login Data from MySQL Database</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Pin</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.pin }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const { data: users } = await useFetch('/api/login')
</script>