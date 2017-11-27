AccountsTemplates.addFields([
  {
    _id: 'firstName',
    type: 'text',
    displayName: 'Nome',
    required: true,
    re: /(?=.*[a-z])/,
    errStr: 'At least 1 digit, 1 lower-case and 1 upper-case',
    placeholder: "Digite seu nome"
  },
  {
    _id: 'lastName',
    type: 'text',
    displayName: 'Sobrenome',
    required: true,
    // minLength: 1,
    re: /(?=.*[a-z])/,
    errStr: 'At least 1 digit, 1 lower-case and 1 upper-case',
    placeholder: "Digite seu sobrenome"
  }
]);
