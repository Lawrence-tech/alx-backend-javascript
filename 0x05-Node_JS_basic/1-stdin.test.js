const { stdin, onProcessExit } = require('jest-process-exit');

const mockLog = jest.spyOn(console, 'log');

describe('1-stdin.js', () => {
  let originalLog;
  beforeAll(() => {
    originalLog = console.log;
  });

  afterAll(() => {
    console.log = originalLog;
    mockLog.mockRestore();
  });

  it('should display the welcome message and user input', async () => {
    stdin('John');
    await onProcessExit(async () => {
      const messages = mockLog.mock.calls.map((args) => args[0]);
      expect(messages).toContain('Welcome to Holberton School, what is your name?');
      expect(messages).toContain('Your name is: John');
      expect(messages).toContain('This important software is now closing');
    });
  });
});
