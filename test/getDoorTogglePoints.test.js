import {expect} from 'chai'
import getDoorTogglePoints from '../getDoorTogglePoints'

describe('door toggle points',()=>{
  it('should be [1] for door 1', ()=>{
    expect(getDoorTogglePoints(1)).to.be.eql([1])
  })
  it('should be [1,2] for door 2', ()=>{
    expect(getDoorTogglePoints(2)).to.be.eql([1,2])
  })
})
