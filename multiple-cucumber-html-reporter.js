const report = require('multiple-cucumber-html-reporter');

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + "h" + today.getMinutes() + "m" + today.getSeconds() + "s";
var dateTime = date+'_'+time;

report.generate({
	jsonDir: 'cypress/reports/cucumber-json',
	reportPath: "cypress/reports/MultipleReport_"+dateTime+".html",
	metadata:{
        browser: {
            name: 'Chrome',
            version: '86.0.4240.75'
        },
        device: 'PipelineCI',
        platform: {
            name: 'Linux',
            version: 'Ubuntu 18.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Automação Conecta - Service Now '},
            {label: 'Release', value: '1.0.1'},
            {label: 'Execution Start Time', value: 'April 3rd 2023, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'April 3rd 2023 02:56 PM EST'}
        ]
    }
});