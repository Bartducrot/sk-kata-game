<template>
  <div class='timeline-container'>
    <div class='section-description'>Qui est arrivé quand?</div>
    <div v-for="year in years" class="timeline-year">
      <div v-for="month in months" :class="monthClass(month, year)" class='timeline-month'>
        <div class="timeline-month-name">
          {{ monthName(month) }} {{ year }}
        </div>
        <div v-for="user in usersInMonth(month, year)" class="timeline-user-card">
          <img class="mug-shot small" :src="`photos/${user.photo}`"/>
          {{ user.firstName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

moment.locale('fr');

export default {
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
    users: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      nbMonth: moment().diff(moment('2016/01'), 'month'),
      years: [2016, 2017, 2018, 2019],
      months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
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
