'use strict';

function Thermostat(){
  this.temperature = 20
  this.MINIMUM_TEMPERATURE = 10
  this.DEFAULT_TEMPERATURE = 20
  this.powerSavingMode = true
  this.MAX_TEMP_PSM_ON = 25
  this.MAX_TEMP_PSM_OFF = 32
  this.MEDIUM_USAGE_LIMIT = 18;

}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  if (!this.isMaximumTemperature())
  this.temperature += 1;
};


Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};


Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
};

Thermostat.prototype.togglePowerSavingMode = function(){
  this.powerSavingMode = !this.powerSavingMode;
};


Thermostat.prototype.isMaximumTemperature = function(){
  if(this.isPowerSavingModeOn())
    return this.temperature >= this.MAX_TEMP_PSM_ON;
  else
  return this.temperature >= this.MAX_TEMP_PSM_OFF;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};


Thermostat.prototype.energyUsage = function() {
   if(this.temperature < this.MEDIUM_USAGE_LIMIT){
     return 'low-usage';
   }
   if(this.temperature >= this.MEDIUM_USAGE_LIMIT && this.temperature <= this.MAX_TEMP_PSM_ON){
     return 'medium-usage';
   }
     return 'high-usage';
   };
