const email = (name) => {
  let arrayEmmail = name.split(' ');
  let beforeAt = arrayEmmail.join(`_`)
  let lowerBeforeAt = beforeAt.toLowerCase()
  return `${lowerBeforeAt}@trybe.com`
}

const newEmployees = (name) => {
  return {
    nomeCompleto: name,
    email: `${email(name)}`,
  }
};