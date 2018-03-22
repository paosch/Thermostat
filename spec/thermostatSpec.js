'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases in temperature with up()', function(){
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases in temperature with down()', function(){
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('does not go below 10 degrees', function(){
    for (var i = 1; i < 11; i ++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has a power saving mode on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch power saving mode off', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch power saving mode back on', function(){
    thermostat.switchPowerSavingModeOff();
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('when power saving mode is on, maximum temperature is 25 degrees', function() {
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

  it('when power saving mode is off, maximum temperature is 32 degrees', function() {
      for (var i = 0; i < 12; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });

  it('temperature can be reset to 20 degrees', function(){
    for (var i = 0; i < 5; i++) {
      thermostat.up();}
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('says energy usage is low when temperature below 18 degrees', function(){
      for ( var i = 0; i < 3; i++){
      thermostat.down();
    }
     // thermostat.temperature = 17
      expect(thermostat.energyUsage()).toEqual('low-usage');
  });

  it('says energy usage is high when temperature is over 25 degrees', function(){
    for (var i = 0; i < 6; i++){
      thermostat.up();
    }
    // thermostat.temperature = 26;
    expect(thermostat.energyUsage()).toEqual('high-usage');
  });

  it('says energy usage is medium when temperature between 18 and 25 degrees', function(){
    expect(thermostat.energyUsage()).toEqual('medium-usage');
  });








  });
