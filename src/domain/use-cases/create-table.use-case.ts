export interface createTableUseCase {
  execute: (options: createTableOptions) => string;
}

export interface createTableOptions {
  base: number;
  limit: number;
}

export class createTable implements createTableUseCase {
  constructor() {}

  execute(options: createTableOptions): string {
    const { base, limit } = options;
    let result = '';
    for (let i = 1; i <= limit; i++) {
      result += `${base} x ${i} = ${base * i}\n`;
    }
    return result;
  }
}
