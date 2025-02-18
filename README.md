# VitestCoverageFailures

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

## To experience coverage failures

Experiencing the vitest coverage failure is not consistent. It may not happen every time you run the tests. The following steps are a guide to try and reproduce the issue.

1. Install dependencies `yarn`
2. Open repository in VS Code
3. Open VS Code Testing panel
4. Run all tests
   1. Succeeds
5. Run Tests With Coverage
   1. Experience errors in the terminal
   2. If the error doesn't crop up, try these steps:
      1. Restart VS Code and try again
      2. Try running coverage tests multiple times
      3. Turn on "Continuous Run" and try running coverage again
      4. Try opening a test file while continuous run is on

Vitest Output:

``` shell
[INFO 3:27:47 PM] [Worker] Running coverage with configuration: {
  provider: 'v8',
  enabled: true,
  all: true,
  clean: true,
  cleanOnRerun: true,
  reportsDirectory: 'C:/Users/XXXXXXXXX/AppData/Local/Temp/vitest-coverage-98af695a-fc89-476f-8ad9-598b78139b38',
  exclude: [
    'coverage/**',
    'dist/**',
    '**/node_modules/**',
    '**/[.]**',
    'packages/*/test?(s)/**',
    '**/*.d.ts',
    '**/virtual:*',
    '**/__x00__*',
    '**/\x00*',
    'cypress/**',
    'test?(s)/**',
    'test?(-*).?(c|m)[jt]s?(x)',
    '**/*{.,-}{test,spec,bench,benchmark}?(-d).?(c|m)[jt]s?(x)',
    '**/__tests__/**',
    '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
    '**/vitest.{workspace,projects}.[jt]s?(on)',
    '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
    'setup-vitest.ts',
    'src/**/*.spec.ts'
  ],
  reportOnFailure: true,
  reporter: [ [ 'json', [Object] ] ],
  extension: [
    '.js',     '.cjs',
    '.mjs',    '.ts',
    '.mts',    '.tsx',
    '.jsx',    '.vue',
    '.svelte', '.marko',
    '.astro'
  ],
  allowExternal: false,
  excludeAfterRemap: false,
  ignoreEmptyLines: true,
  processingConcurrency: 20,
  include: [ '**/*.{ts,html}' ]

[INFO 3:27:50 PM] Running all tests in vitest-coverage-failures
[3:27:50 PM] Starting a test run because src/app/app.component.spec.ts src/app/components/component1/component1.component.spec.ts src/app/components/component2/component2.component.spec.ts src/app/components/component3/component3.component.spec.ts triggered a watch rerun event
[3:27:50 PM] Enqueuing "should create the app"
[3:27:50 PM] Enqueuing "should have the 'vitest-coverage-failures' title"
[3:27:50 PM] Enqueuing "should render title"
[3:27:50 PM] Enqueuing "should create: 1"
[3:27:50 PM] Enqueuing "should create: 2"
[3:27:50 PM] Enqueuing "should create: 3"
[3:27:50 PM] Enqueuing "should create: 4"
[3:27:50 PM] Enqueuing "should create: 5"
[3:27:50 PM] Enqueuing "should create: 6"
[3:27:50 PM] Enqueuing "should create: 7"
[3:27:50 PM] Enqueuing "should create: 8"
[3:27:50 PM] Enqueuing "should create: 9"
[3:27:50 PM] Enqueuing "should create: 10"
[3:27:50 PM] Enqueuing "should create: 11"
[3:27:50 PM] Enqueuing "should create: 12"
[3:27:50 PM] Enqueuing "should create: 13"
[3:27:50 PM] Enqueuing "should create: 14"
[3:27:50 PM] Enqueuing "should create: 15"
[3:27:50 PM] Enqueuing "should create: 16"
[3:27:50 PM] Enqueuing "should create: 17"
[3:27:50 PM] Enqueuing "should create: 18"
[3:27:50 PM] Enqueuing "should create: 19"
[3:27:50 PM] Enqueuing "should create: 20"
[3:27:50 PM] Enqueuing "should create: 21"
[3:27:50 PM] Enqueuing "should create: 22"
[3:27:50 PM] Enqueuing "should create: 23"
[3:27:50 PM] Enqueuing "should create: 24"
[3:27:50 PM] Enqueuing "should create: 25"
[3:27:50 PM] Enqueuing "should create: 1"
[3:27:50 PM] Enqueuing "should create: 2"
[3:27:50 PM] Enqueuing "should create: 3"
[3:27:50 PM] Enqueuing "should create: 4"
[3:27:50 PM] Enqueuing "should create: 5"
[3:27:50 PM] Enqueuing "should create: 6"
[3:27:50 PM] Enqueuing "should create: 7"
[3:27:50 PM] Enqueuing "should create: 8"
[3:27:50 PM] Enqueuing "should create: 9"
[3:27:50 PM] Enqueuing "should create: 10"
[3:27:50 PM] Enqueuing "should create: 11"
[3:27:50 PM] Enqueuing "should create: 12"
[3:27:50 PM] Enqueuing "should create: 13"
[3:27:50 PM] Enqueuing "should create: 14"
[3:27:50 PM] Enqueuing "should create: 15"
[3:27:50 PM] Enqueuing "should create: 16"
[3:27:50 PM] Enqueuing "should create: 17"
[3:27:50 PM] Enqueuing "should create: 18"
[3:27:50 PM] Enqueuing "should create: 19"
[3:27:50 PM] Enqueuing "should create: 20"
[3:27:50 PM] Enqueuing "should create: 21"
[3:27:50 PM] Enqueuing "should create: 22"
[3:27:50 PM] Enqueuing "should create: 23"
[3:27:50 PM] Enqueuing "should create: 24"
[3:27:50 PM] Enqueuing "should create: 25"
[3:27:50 PM] Enqueuing "should create: 1"
[3:27:50 PM] Enqueuing "should create: 2"
[3:27:50 PM] Enqueuing "should create: 3"
[3:27:50 PM] Enqueuing "should create: 4"
[3:27:50 PM] Enqueuing "should create: 5"
[3:27:50 PM] Enqueuing "should create: 6"
[3:27:50 PM] Enqueuing "should create: 7"
[3:27:50 PM] Enqueuing "should create: 8"
[3:27:50 PM] Enqueuing "should create: 9"
[3:27:50 PM] Enqueuing "should create: 10"
[3:27:50 PM] Enqueuing "should create: 11"
[3:27:50 PM] Enqueuing "should create: 12"
[3:27:50 PM] Enqueuing "should create: 13"
[3:27:50 PM] Enqueuing "should create: 14"
[3:27:50 PM] Enqueuing "should create: 15"
[3:27:50 PM] Enqueuing "should create: 16"
[3:27:50 PM] Enqueuing "should create: 17"
[3:27:50 PM] Enqueuing "should create: 18"
[3:27:50 PM] Enqueuing "should create: 19"
[3:27:50 PM] Enqueuing "should create: 20"
[3:27:50 PM] Enqueuing "should create: 21"
[3:27:50 PM] Enqueuing "should create: 22"
[3:27:50 PM] Enqueuing "should create: 23"
[3:27:50 PM] Enqueuing "should create: 24"
[3:27:50 PM] Enqueuing "should create: 25"
[3:27:50 PM] [API] Vitest WebSocket connection closed, cannot call RPC anymore.
[3:27:50 PM] Ending test run 
[3:27:50 PM] Test run promise is finished, the queue is 0
[Error 3:27:50 PM] [API] Failed to close Vitest RPC [Error Error] [birpc] rpc is closed, cannot call "close"
Error: [birpc] rpc is closed, cannot call "close"
    at Proxy.C (c:\Users\XXXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:17:3172)
    at At.dispose (c:\Users\XXXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:18:6262)
    at c:\Users\XXXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:18:4597
    at Array.map (<anonymous>)
    at Ar.dispose (c:\Users\XXXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:18:4588)
    at c:\Users\XXXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:22:11964
    at s.r (c:\Users\XXXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:18:4355)
    at s.emit (node:events:518:28)
    at ChildProcess.<anonymous> (c:\Users\XXXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:18:975)
    at ChildProcess.emit (node:events:530:35)
    at Process.ChildProcess._handle.onexit (node:internal/child_process:293:12)
[Error 3:27:55 PM] [API] Failed to close Vitest process [Error Error] Vitest process did not exit in time
Error: Vitest process did not exit in time
    at Timeout._onTimeout (c:\Users\XXXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:18:6448)
    at listOnTimeout (node:internal/timers:581:17)
    at processTimers (node:internal/timers:519:7)

```