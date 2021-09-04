import { writeFile } from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

const targetPath = `./src/environments/environment.ts`;

const environmentFileContent = `
export const environment = {
    production: false,
    appName: 'Udagram',
    apiHost: "${process.env.API_HOST}"
  };
`;

writeFile(targetPath, environmentFileContent, err => {
   if (err) {
      console.log(err);
   }
   console.log(`Wrote variables to ${targetPath}`);
});