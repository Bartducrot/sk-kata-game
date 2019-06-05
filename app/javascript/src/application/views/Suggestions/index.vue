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
      <section class="card-main">
        <div class="card-description">
          {{ suggestion.description }}
        </div>
        <div v-if="suggestion.kata_leader" class="suggestion-author">
          <img class="mug-shot" :src="`photos/${suggestion.kata_leader}.jpeg`"/>
          <div>{{ suggestion.kata_leader }}</div>
        </div>
      </section>
      <div class="card-footer">
        <div class="card-timestamp">
          suugestion crée le {{ timestamp(suggestion.created_at) }}
        </div>
        <div v-if="suggestion.planned_date" class="suggestion-planned-date">
          Kata du {{ dateOnly(suggestion.planned_date) }}
        </div>
        <div v-else class="suggestion-planned-date">
          Pas encore plannifié 
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
      timestamp(date) {
        return moment(date).format('DD/MM/YYYY à HH:mm');
      },
      dateOnly(date) {
        return moment(date).utc().format('dddd DD MMMM');
      }
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

    .card-main {
      grid-area: main;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-template-areas: 
        "description";
      overflow: auto;

      .card-description {
        grid-area: description;
        text-align: justify;
        padding: 15px;
        font-size: 12px;
      }
    }

    .card-footer {
      grid-area: footer;
      position: relative;
    }
    .suggestion-planned-date {
      display: none;
      color: white;
      text-align: center;
    }
    .suggestion-author {
      grid-area: side;
      display: none;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 1);
      grid-template-rows: 1fr 6fr 1fr;
      grid-template-areas: 
        "footer"
        "main"
        "header";
      box-shadow: 0 3px 10px #FFA;
      
      .card-main {
        grid-template-columns: 4fr 2fr;
        grid-template-areas: 
          "description side";
      }

      .card-title {
        border-radius: 0 0 5px 5px;
        background-color: #70c9d4;
      }

      .suggestion-planned-date {
        display: block;
      }

      .card-footer {
        background-color: #342E96;
        border-radius: 5px 5px 0 0;
      }

      .card-timestamp {
        display: none;
      }

      .suggestion-author {
        display: flex;
        flex-direction: column;
        align-items: center;
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
    height: 40px;
    width: 40px;
  }

  .mug-shot {
    border-radius: 50%;
    height: 50px;
    margin-top: 30px;
  }
</style>



