const ElementRXDBAdapter = require('./ElementRXDBAdapter');

let db;
const dbName = 'elementrxdb';

beforeAll(async () => {
  db = new ElementRXDBAdapter({
    name: dbName,
  });
  await db.init();
});

afterAll(async () => {
  await db.close();
});

describe('ElementPouchDBAdapter', () => {
  it('constructor takes a db name', () => {
    expect(db.name).toBe(dbName);
  });
});
