import { createTable } from '../domain/use-cases/create-table.use-case.js';

interface runOptions {
  base: number;
  limit: number;
  showTable: boolean;
}

export class serverApp {
  static run(options: runOptions) {
    console.log({ options });

    const table = new createTable().execute(options);
    if (options.showTable) {
      console.log(table);
    }
  }
}
