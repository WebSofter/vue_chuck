<template>
  <div>
    <a-card :loading="loading" title="Random Chuks">
      <a-card-grid v-for="(content,idx) in contents[0]" :key="idx" style="width:100%;text-align:left">
        <span>#{{idx+1}}</span> <a-avatar :src="content.icon_url" />: {{content.value}}
      </a-card-grid>
    </a-card>
    <a-divider>Search Chuks</a-divider>
    <a-form layout="inline" @submit="handleSubmit">
      <a-form-item label="Search by keyword">
        <a-input v-model="keyword"/>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">
          Search
        </a-button>
      </a-form-item>
    </a-form>

    <a-table :columns="columns" :data-source="searches.result">
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: 'Date',
    dataIndex: 'updated_at',
    key: 'updated_at',
    width: 250,
  },
  {
    title: 'Chuk',
    dataIndex: 'value',
    key: 'value',
    ellipsis: true,
  },
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    width: 250,
  },
];
import { mapGetters } from "vuex";
export default {
  components: {},
  data(){
    return {
      keyword: "",
      loading: true,
      columns,
    }
  },
  computed: {
    ...mapGetters({contents: "getAllContents"}),
    ...mapGetters({searches: "getSearchContent"}),
  },
  watch: {
    keyword(value){
      console.log(value)
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const self = this
      this.$store.dispatch("setSearchContent", this.keyword).then((res) => {
        console.log("SEARCHES", self.searches, res)
      })
    },
  },
  created(){
    this.loading = false
  }
}
</script>
<style scoped>
h4 {
  color: blueviolet;
  font-weight: bolder;
  font-size: 2.5rem;
}
</style>
