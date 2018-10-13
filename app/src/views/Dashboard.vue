<template>
  <div>
    Dashboard
  </div>
</template>

<script>
import expenseService from '@/services/expenseService'

export default {
  name: 'Dashboard',
  data () {
    return {
      testFromApi: []
    }
  },
  mounted () {
    expenseService.testFetch().then(response => {
      this.testFromApi = response.data
    })
  }
}
</script>
