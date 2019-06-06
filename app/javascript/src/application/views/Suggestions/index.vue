<template>
  <div id='suggestions'>
    <SuggestionCard 
      v-for="suggestion in suggestions" 
      :key="suggestion.id"
      :suggestion="suggestion"
    />
    <div v-if="showForm" class="add_suggestion_card add_suggestion-form">
      <h3>Nouvelle Suggestion</h3>
      <div class="input-container">
        Nom de la suggestion :
        <input v-model="nameNew" placeholder="Ex: Présentation sur ...">
      </div>
      <div class='input-container'>
        Description: 
        <textarea 
          v-model="descriptionNew" 
          class="new-description"
          placeholder="Ecrire ici la descrition de la suggestion"
        />
      </div>
      <div class='input-container inline-input'>
        <div>Auteur:</div>
        <select v-model="kataLeaderNew">
          <option value="bart">Bart</option>
          <option value="celo">Celo</option>
          <option value="lola">Lola</option>
          <option value="lucas ">Lucas </option>
          <option value="samy">Samy</option>
          <option value="seb">Seb</option>
          <option value="victor">Victor</option>
        </select>
        <img 
          v-if="kataLeaderNew"
          class="mug-shot"
          :src="`photos/${kataLeaderNew}.jpeg`"
        />
      </div>
      <div class='input-container inline-input'>
        <div>Catégorie</div>
        <select v-model="categoryNew">
          <option value="back">Back</option>
          <option value="front">Front</option>
          <option value="presentation">Présentation</option>
        </select>
        <div class="new-suggestion-category">
          <RubySvg v-if="categoryNew === 'back'"/>
          <VueLogoSvg v-else-if="categoryNew === 'front'"/>
          <NoIdeaSvg v-else/>
        </div>
      </div>
      <div class="button-container">
        <button @click="submitSuggestion">
          Valider
        </button>
        <button @click="toggleShowForm">
          Annuler
        </button>
      </div>
    </div>
    <div v-else class="add_suggestion_card add_suggestion_card_btn" @click="toggleShowForm">
      <div class="plus-svg-container">
        <PlusSvg :fill="'#022049'"/>
        <p></p>
        <p>Ajouter une suggestion</p>
      </div>
    </div>
  </div>
</template>

<script>
  moment.locale('fr');
  import PlusSvg from '../../../shared/assets/PlusSvg';
  import VueLogoSvg from '../../../shared/assets/VueLogoSvg';
  import RubySvg from '../../../shared/assets/RubySvg';
  import NoIdeaSvg from '../../../shared/assets/NoIdeaSvg';
  import SuggestionCard from '../../ui/SuggestionCard';

  export default {
    name: 'Suggestions',
    data: function () {
      return {
        suggestions: [],
        showForm: false,   
        categoryNew: "back",
        descriptionNew: "",
        kataLeaderNew: "samy",
        nameNew: "",
      }
    },
    mounted() {
      this.fetchData();
    },
    components: { VueLogoSvg, RubySvg, NoIdeaSvg, PlusSvg, SuggestionCard },
    computed: {},
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
      submitSuggestion() {
        this.axios
          .post(
            '/api/suggestions',
            { 
              category: this.categoryNew,
              description: this.descriptionNew,
              kata_leader: this.kataLeaderNew,
              name: this.nameNew, 
            },
          )
          .then((response) => {
            this.suggestions.push(response.data.suggestion);
            this.categoryNew = "back";
            this.descriptionNew = "";
            this.kataLeaderNew = "samy";
            this.nameNew = "";
            this.showForm = false;
          })
          .catch((e) => {
            console.log('error :', e);
          });
      },
      toggleShowForm() {
        this.showForm = !this.showForm;
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

  .add_suggestion_card {
    background-color: white;
    height: 400px;
    width: 300px;
    margin: 15px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .add_suggestion_card_btn {
    transition: 0.3s ease linear;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .plus-svg-container {
    width: 200px;
    height: 250px;
  }

  .new-description {
    outline: none;
    resize: none;
    height: 100px;
    width: 100%;
    border-radius: 5px;
  }

  .input-container {
    width: 90%;
    margin-top: 10px;
  }

  .inline-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mug-shot {
    border-radius: 50%;
    height: 50px;
  }

  .new-suggestion-category {
    height: 40px;
    width: 40px;
  }
</style>



