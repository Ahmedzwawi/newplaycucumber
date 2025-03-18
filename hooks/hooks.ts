import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  // Ajouter un écouteur pour les dialogues
  page.on('dialog', async dialog => {
    if (dialog.message().includes('Vous êtes sur le point de vous connecter à un tunnel de développeur')) {
      // Accepter le dialogue (cliquer sur "Continuer")
      await dialog.accept();
    }
  });

  // Démarrer le tracing pour la session
  await page.context().tracing.start({
    screenshots: true,
    snapshots: true,
  });

  this.browser = browser;
  this.page = page;
});

After(async function (scenario) {
  if (scenario.result?.status === 'FAILED') {
    // Sauvegarder les traces en cas d'échec
    await page.context().tracing.stop({ path: `traces/trace-${scenario.pickle.name}.zip` });
  } else {
    await page.context().tracing.stop();
  }
  await browser.close();
});
