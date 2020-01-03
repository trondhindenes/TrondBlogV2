<template>
    <div class="posts">
      <div
        v-for="edge in $page.markdownPosts.edges"
        :key="edge.node.title"
        >
      <h1>{{ edge.node.title }}</h1>
      <vue-markdown>{{ edge.node.body }}</vue-markdown>
      </div>
    </div>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  markdownPosts: allSanityMarkDownPost(sortBy: "title") {
    edges {
      node {
        title
        body
        }
      }
    }
}

</page-query>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  components: {
    VueMarkdown
  },
  created() {
    this.$log.debug('hello', 'hello')
  }
}


</script>

<style lang="scss">

</style>
