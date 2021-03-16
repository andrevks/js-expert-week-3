export default class FluentSQLBuilder {
  #database = [] //private member
  constructor({ database }){
    this.#database = database
  }

  static for(database){
    return new FluentSQLBuilder({ database })
  }

  build(){
    const results = []

    return results
  }

}