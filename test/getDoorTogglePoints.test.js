import {expect} from 'chai'
import getDoorTogglePoints from '../getDoorTogglePoints'

describe('door toggle points',()=>{
  it('should be [1] for door 1', ()=>{
    expect(getDoorTogglePoints(1)).to.be.eql([1])
  })
  it('should be [1,2] for door 2', ()=>{
    expect(getDoorTogglePoints(2)).to.be.eql([1,2])
  })
  it('should be [1,3] for door 3', ()=>{
    expect(getDoorTogglePoints(3)).to.be.eql([1,3])
  })
  it('should be [1,2,4] for door 4', ()=>{
    expect(getDoorTogglePoints(4)).to.be.eql([1,2,4])
  })
  it('should be [1,2,3,6] for door 6', ()=>{
    expect(getDoorTogglePoints(6)).to.be.eql([1,2,3,6])
  })
})
