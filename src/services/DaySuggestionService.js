const DoughService = require('./DoughService');
const CrustsService = require('./CrustsService');
const FillingsService = require('./FillingsService');
const SizesService = require('./SizesService');

module.exports = {
  findByDayOfTheWeek(dayOfTheWeek) {
    const dough = DoughService.findAll()[0];
    const crusts = CrustsService.findAll();
    const fillings = FillingsService.findAll();
    const sizes = SizesService.findAll();

    return {
      1: {
        dough,
        crust: crusts[1],
        filling: fillings[2],
        size: sizes[0]
      },
      2: {
        dough,
        crust: crusts[1],
        filling: fillings[3],
        size: sizes[1]
      },
      3: {
        dough,
        crust: crusts[0],
        filling: fillings[1],
        size: sizes[2]
      },
      4: {
        dough,
        crust: crusts[4],
        filling: fillings[3],
        size: sizes[3]
      },
      5: {
        dough,
        crust: crusts[3],
        filling: fillings[0],
        size: sizes[4]
      },
      6: {
        dough,
        crust: crusts[4],
        filling: fillings[1],
        size: sizes[0]
      },
      7: {
        dough,
        crust: crusts[2],
        filling: fillings[2],
        size: sizes[1]
      },
    }[dayOfTheWeek];
  },

  selectPizzaOfTheDay(dayOfTheWeek) {
    const pizza = this.findByDayOfTheWeek(dayOfTheWeek);

    return {
      pizza,
      message: 'Parabéns, você recebeu pontos de benefício por ter escolhido a pizza do dia!'
    }
  }
};
