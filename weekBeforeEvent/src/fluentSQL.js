export default class FluentSQLBuilder {
  #database = [] //private member
  #limit = 0
  #select = []
  #where = []
  #orderBy = ''

  constructor({ database }){
    this.#database = database
  }

  static for(database){
    return new FluentSQLBuilder({ database })
  }

  limit(max){
    this.limit = max
    //Return the context to use build 
    return this
  }

  select(props){
    this.#select = props

    return this
  }

  where(query){
    this.#where = query

    return this
  }

  orderBy(query){
    this.#where = query

    return this
  }

  #performLimit(results){
    return this.#limit && results.length === this.#limit
  }

  build(){
    const results = []
    for(const item of this.#database){
      results.push(item)

      if(this.#performLimit(results)) break;

    }
    console.log({results})
    return results
  }

}