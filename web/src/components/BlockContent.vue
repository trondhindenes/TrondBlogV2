<template>
  <portable-text
    :blocks="blocks"
    :serializers="serializers"
    :projectId="$static.metadata.sanityOptions.projectId"
    :dataset="$static.metadata.sanityOptions.dataset"
  />
</template>

<script>
import PortableText from 'sanity-blocks-vue-component'
import 'prism-es6/components/prism-python'

export default {
  props: {
    blocks: Array
  },
  components: {
    PortableText
  },
  data() {
    return {
      serializers: {
        types: {
          mainImage: ({ node }) => (
            <figure>
              <img
                src={this.$urlForImage(node, this.$static.metadata.sanityOptions)
                  .auto('format')
                  .url()}
                alt={node.alt}
              />
              <figcaption>{node.caption}</figcaption>
            </figure>
          ),
          code: ({ node }) => (
            <div v-highlight>
              <pre class={''.concat('codeblock language-', node.language)}>
                <code>{node.code}</code>
              </pre>
            </div>
          )
        }
      }
    }
  }
}
</script>

<static-query>
  {
    metadata{
    sanityOptions{
      projectId
      dataset
    }
  }
}
</static-query>

<style lang="scss">
.codeblock {
  //margin: 0 auto;
  //--bg-code: rgba(0, 0, 0, 0);
  //--bg-color: rgba(0, 0, 0, 0);
  //background-color:  #20a7e00f;
  --border-color: rgba(0, 0, 0, 0)
}
</style>
