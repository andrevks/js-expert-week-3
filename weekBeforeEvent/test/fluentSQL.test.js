import { expect, describe, test } from "@jest/globals";
import FluentSQLBuilder from "../src/fluentSQL";

const data = [
  {
    id:0,
    name:'Alfredo',
    category:'developer'
  },
  {
    id:1,
    name:'Nastacia',
    category:'developer'
  },
  {
    id:2,
    name:'Jao',
    category:'network administrator'
  },
]

describe("Test Suit for FluentSQL Builder", () =>{
  test('#for should return a FluentSQLBuilder instance', () =>{
    const result = FluentSQLBuilder.for(data)
    const expected = new FluentSQLBuilder({ database: data })
    expect(result).toStrictEqual(expected)
  })
  test('#build should return the empty object instance', () =>{
    const result = FluentSQLBuilder.for(data).build()
    const expected = []
    expect(result).toStrictEqual(expected)
  })
  
  test.todo('#limit given a colletion limit results')
  test.todo('#where given a colletion it should filter data')
  test.todo('#select given a colletion it should return only specific fields')
  test.todo('#orderBy given a colletion it should order results by field')
  
  test.todo('pipeline')

})
