<template>
  <div id="timeline">
    <div class='section-description'>Qui est arrivé quand?</div>
    <div class='timeline-container'>
      <div v-for="year in years" class="timeline-year" :key="year">
        <div v-for="month in months" :class="monthClass(month, year)" class='timeline-month' :key="month">
          <div class="timeline-month-name">
            {{ monthName(month) }} {{ year }}
          </div>
          <div v-for="user in usersInMonth(month, year)" class="timeline-user-card" :key="user.firstName">
            <img class="mug-shot small" :src="`photos/${user.photo}`"/>
            {{ user.firstName }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

moment.locale('fr');
import { users } from '../../constants.js'

export default {
  name: 'TimeLine',
  props: {},
  data() {
    return {
      nbMonth: moment().diff(moment('2016/01'), 'month'),
      years: [2016, 2017, 2018, 2019],
      months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      users: users,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    usersInMonth(month, year) {
      return this.users.filter(user => moment(user.startDate, 'YYYY/MM').format('YYYY/MM') === `${year}/${month}`);
    },
    monthClass(month, year) {
      return {
        'no-event': this.usersInMonth(month, year).length === 0,
      }
    },
    monthName(month) {
      return moment(month, 'MM').format('MMMM');
    },
  },
};
</script>

<style lang="sass" scoped>
  .section-description {
    font-size: 2em;
    font-family: 'Lilita One', cursive;
    color: white;
    width: 100%;
    text-align: center;
  }

  .mug-shot {
    border-radius: 50%;
    height: 200px;
    border: 4px solid transparent;
    transition: .5s ease linear;


    &.small {
      height: 50px;
    }
  }

  .timeline-container {
    display: flex;
    max-width: 100vw;
    overflow: auto;
  }

  .timeline-year {
    display: flex;
  }

  .timeline-month {
    color: white;
    font-size: 1em;
    font-family: 'Lilita One', cursive;
    max-height: 75vh;
    overflow: auto;

    &.no-event {
      opacity: .5;
    }
  }

  .timeline-month-name {
    padding: 15px;
    white-space: nowrap;
    border-bottom: 1px solid white;
    position: sticky;
    top: 0;
    background-color: #022149;
  }

  .timeline-user-card {
    background-color: rgba(31, 189, 237, .2);
    margin: 15px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 25px;
    width: 200px;
  }
</style>

