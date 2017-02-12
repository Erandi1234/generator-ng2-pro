'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  

  writing: function () {
    const name = this.options.name || 'myInterface';
    const titleCase = string => string.charAt(0).toUpperCase() + string.slice(1);
    const lowerCase = string => string.charAt(0).toLowerCase() + string.slice(1);
    var path = process.cwd();
    
    this.fs.copyTpl(
      this.templatePath('_interface.ts'),
      this.destinationPath(`${path}/${name}.ts`),
      { 
        interfacenameClass :titleCase(name),
        
       }
    );
  },

 
 
});