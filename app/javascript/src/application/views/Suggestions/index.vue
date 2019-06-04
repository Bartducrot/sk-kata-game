<template>
  <div id='suggestions'>
    <div
      v-for="suggestion in suggestions"
      :key="suggestion.id"
      class="suggestion-card"
    >
      <div class="card-title">
        <div class="suggestion-name">
          {{ suggestion.name }}
        </div>
        <div class="suggestion-category">
          <RubySvg v-if="suggestion.category === 'back'"/>
          <VueLogoSvg v-else-if="suggestion.category === 'front'"/>
          <NoIdeaSvg v-else/>
        </div>
      </div>
      <section class="card-description">
        {{ suggestion.description }}
      </section>
      <div class="card-footer">
        <div class="card-timestamp">
          {{ timestamp(suggestion.created_at) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  moment.locale('fr');
  import VueLogoSvg from '../../../shared/assets/VueLogoSvg';
  import RubySvg from '../../../shared/assets/RubySvg';
  import NoIdeaSvg from '../../../shared/assets/NoIdeaSvg';

  export default {
    name: 'Suggestions',
    data: function () {
      return {
        suggestions: [],
      }
    },
    mounted() {
      this.fetchData();
    },
    components: { VueLogoSvg, RubySvg, NoIdeaSvg },
    computed: {

    },
    methods: {
      fetchData() {
        this.axios
          .get('/api/suggestions', {})
          .then((response) => {
            this.suggestions = response.data.suggestions
          })
          .catch((e) => {
            console.log('error :', e);
          });
      },
      timestamp(created_at) {
        return moment(created_at).utc().format('DD/MM/YYYY à hh:mm')
      },
    }
  }
</script>

<style lang="scss" scoped>
  #suggestions {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-family: 'Permanent Marker', cursive;
  }

  .suggestion-card {
    height: 400px;
    width: 300px;
    background-color: rgba(255, 255, 255, 0.8);
    margin: 15px; 
    border-radius: 5px;
    transition: 1s ease linear;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 2fr 5fr 1fr;
    grid-template-areas: 
      "header"
      "main"
      "footer";

    .card-title {
      grid-area: header;
      border-radius: 5px 5px 0 0;
      background-color: #1fbed4;
      color: white;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .card-description {
      grid-area: main;
    }

    .card-footer {
      grid-area: footer;
      position: relative;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 1);
      grid-template-rows: 6fr 2fr;
      grid-template-areas: 
        "main"
        "header";
      box-shadow: 0 3px 10px #FFA;

      .card-title {
        border-radius: 0 0 5px 5px;
        background-color: #70c9d4;
      }
      .card-footer {
        display: none;
      }
    }
  }

  .card-timestamp {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 8px;
    color: grey;
  }

  .suggestion-category {
    height: 50px;
    width: 50px;
  }
</style>



