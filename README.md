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
[INFO 11:44:36 AM] [Worker] Running coverage with configuration: {
  provider: 'v8',
  enabled: true,
  all: true,
  clean: true,
  cleanOnRerun: true,
  reportsDirectory: 'C:/Users/XXXXXXXX/AppData/Local/Temp/vitest-coverage-c7037ae8-54e4-4b9b-9d45-20f9a7b275e3',
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

[11:44:36 AM] [VSCODE] File changed: README.md
[INFO 11:44:36 AM] Running all tests in vitest-coverage-failures
[11:44:36 AM] Starting a test run because src/app/app.component.spec.ts src/app/components/component1/component1.component.spec.ts src/app/components/component2/component2.component.spec.ts src/app/components/component3/component3.component.spec.ts triggered a watch rerun event
[11:44:36 AM] Enqueuing "should create the app"
[11:44:36 AM] Enqueuing "should have the 'vitest-coverage-failures' title"
[11:44:36 AM] Enqueuing "should render title"
[11:44:36 AM] Enqueuing "should create"
[11:44:36 AM] Enqueuing "should create"
[11:44:36 AM] Enqueuing "should create"
[Error 11:44:36 AM] [API] Failed to notify Vitest about file change [Error Error] [birpc] rpc is closed, cannot call "onFilesChanged"
Error: [birpc] rpc is closed, cannot call "onFilesChanged"
    at Proxy.C (c:\Users\XXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:17:3172)
    at c:\Users\XXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:18:5594
    at Timeout._onTimeout (c:\Users\XXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:18:7758)
    at listOnTimeout (node:internal/timers:581:17)
    at processTimers (node:internal/timers:519:7)
[11:44:36 AM] [API] Vitest WebSocket connection closed, cannot call RPC anymore.
[11:44:36 AM] Ending test run 
[11:44:36 AM] Test run promise is finished, the queue is 0
[Error 11:44:36 AM] [API] Failed to close Vitest RPC [Error Error] [birpc] rpc is closed, cannot call "close"
Error: [birpc] rpc is closed, cannot call "close"
    at Proxy.C (c:\Users\XXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:17:3172)
    at At.dispose (c:\Users\XXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:18:6262)
    at c:\Users\XXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:18:4597
    at Array.map (<anonymous>)
    at Ar.dispose (c:\Users\XXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:18:4588)
    at c:\Users\XXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:22:11964
    at s.r (c:\Users\XXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:18:4355)
    at s.emit (node:events:518:28)
    at ChildProcess.<anonymous> (c:\Users\XXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:18:975)
    at ChildProcess.emit (node:events:530:35)
    at Process.ChildProcess._handle.onexit (node:internal/child_process:293:12)
[Error 11:44:41 AM] [API] Failed to close Vitest process [Error Error] Vitest process did not exit in time
Error: Vitest process did not exit in time
    at Timeout._onTimeout (c:\Users\XXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:18:6448)
    at listOnTimeout (node:internal/timers:581:17)
    at processTimers (node:internal/timers:519:7)
```