import {expect} from 'chai'

describe('door state', ()=>{
  it('should be true for door 1', ()=>{
    expect(getDoorState(1)).to.be.true
  })
})
