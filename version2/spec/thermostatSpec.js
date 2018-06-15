'use strict';
describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('starts with a temperature of 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
  it('temperature can be increased', function(){
    expect(thermostat.up()).toEqual(21);
  });
  it('temperature can be lowered', function(){
    expect(thermostat.down()).toEqual(19);
  });
});
