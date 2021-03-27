module.exports = {
  findAll() {
    const fillings = [
      {
        description: 'Mussarela', ingredients: [
          { description: 'Molho de tomate' },
          { description: 'Mussarela ralada' },
          { description: 'Parmesão ralado' },
          { description: 'Azeitona verde' },
          { description: 'Orégano' },
        ]
      },
      {
        description: 'Marguerita', ingredients: [
          { description: 'Azeite' },
          { description: 'Goma de tapioca' },
          { description: 'Molho de tomate' },
          { description: 'Mussarela ralada' },
          { description: 'Tomate' },
          { description: 'Manjericão' },
          { description: 'Orégano' },
        ]
      },
      {
        description: 'Calabresa', ingredients: [
          { description: 'Ovo' },
          { description: 'Azeite' },
          { description: 'Molho de tomate' },
          { description: 'Mussarela ralada' },
          { description: 'Linguiça calabresa' },
          { description: 'Cebola' },
          { description: 'Azeitona verde' },
          { description: 'Orégano' },
        ]
      },
      {
        description: 'Portuguesa', ingredients: [
          { description: 'Ovo' },
          { description: 'Molho de tomate' },
          { description: 'Mussarela ralada' },
          { description: 'Presunto ralado' },
          { description: 'Cebola' },
          { description: 'Tomate' },
          { description: 'Azeitona verde' },
          { description: 'Orégano' },
        ]
      },
    ];

    return fillings;
  },
};
