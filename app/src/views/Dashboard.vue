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
    this.test()
  },
  methods: {
    async test () {
      const response = await expenseService.testFetch()
      this.testFromApi = response.data
    }
  }
}
</script>
