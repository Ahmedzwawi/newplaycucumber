module.exports = {
  default: {
    require: [
      "step-definitions/**/*.ts",   // Path to step definitions
      "hooks/**/*.ts"               // Path to hooks
    ],
    format: [
      "json:reports/cucumber-report.json", // JSON report for analysis
      "html:reports/cucumber-report.html",  // HTML report for human-readable output
      "allure-cucumberjs/reporter",
      "progress"  // Print the progress to the console

    ],
    tags :process.env.TAGS ||"",
    // tags: "@valid",  // Run specific tests with tags
    worldParameters: {           // Custom parameters for tests
      env1Url:'http://int.siteinfos.com/admin/login/?next=/admin/',
      env2Url:'http://rec.siteinfos.com/admin/login/?next=/admin/',
    },
    requireModule: ["ts-node/register"], // Enable TypeScript
    timeout: 10000, // Set test timeout (10s)
  }
};
