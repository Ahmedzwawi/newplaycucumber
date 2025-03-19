module.exports = {
    default: {
   
      require: [
        "step-definitions/**/*.ts",   // Path to step definitions
        "hooks/**/*.ts"               // Path to hooks
      ],
      format: [
        "json:reports/cucumber-report.json", // JSON report for analysis
        "html:reports/cucumber-report.html",  // HTML report for human-readable output
        "allure-cucumberjs/reporter"

      ],
      //  tags: "@valid",  // Run specific tests with tags
      worldParameters: {           // Custom parameters for tests
        baseUrl: process.env.ENVIRONMENT === 'DEV' 
        ? 'http://192.168.1.95:9091/admin/login/?next=/admin/' 
        : 'http://192.168.1.95:9092/admin/login/?next=/admin/'      },
      requireModule: ["ts-node/register"], // Enable TypeScript
      timeout: 10000, // Set test timeout (10s)
    },
  };
