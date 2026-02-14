class Person {

  static validate (person) {
    if (!person.name) {
      throw new Error('Name is required')
    }
    if (!person.cpf) {
      throw new Error('CPF is required')
    }
    return true
  }

  static format (person) {
    const [name, ...lastName] = person.name.split(' ')
    return {
      name,
      lastName: lastName.join(' '),
      cpf: person.cpf.replace(/\D/g, '')
    }
  }

  static savePerson (person) {
    if (!['name', 'lastName', 'cpf'].every(key => person[key])) {
      throw new Error(`cannot save invalid person: ${JSON.stringify(person)}`)
    }
    console.log('saving person', person)
  }

  static process (person) {
    this.validate(person)
    const formattedPerson = this.format(person)
    this.savePerson(formattedPerson)
    return 'ok'
  }
}  

export default Person;