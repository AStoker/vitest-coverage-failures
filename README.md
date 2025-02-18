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

Vitest Output With situation:

``` shell
[3:50:10 PM] Disposing test runner
[3:50:10 PM] Ending test run <none>
[INFO 3:50:10 PM] [API] Vitest process 46868 closed successfully
[3:50:10 PM] [API] Vitest WebSocket connection closed, cannot call RPC anymore.
[INFO 3:50:10 PM] [API] Resolving configs: vitest.config.ts
[INFO 3:50:10 PM] [API] Running Vitest v3.0.6 (vitest-coverage-failures/vitest.config.ts) with "node C:/Users/XXXXXXXXX/.vscode/extensions/vitest.explorer-1.14.3/dist/worker.js"
[INFO 3:50:14 PM] [API] Watching vitest.config.ts
[INFO 3:50:14 PM] [VSCODE] Watching vitest-coverage-failures with pattern **/*
[INFO 3:50:14 PM] [API] Collecting tests: src/app/components/component1/component1.component.spec.ts
[3:50:14 PM] Not starting the runner because tests are being collected for src/app/components/component1/component1.component.spec.ts
[3:50:16 PM] There is no test run for "component1.component.spec.ts"
[3:50:16 PM] No test run to finish for src/app/components/component1/component1.component.spec.ts
[3:50:16 PM] [VSCODE] Ignoring file: node_modules\.vite\results.json
[3:50:17 PM] [VSCODE] File deleted: .git\fsmonitor--daemon\cookies\50556-602
[INFO 3:50:19 PM] Running 1 file(s): src/app
[3:50:19 PM] Starting a test run because src/app/app.component.spec.ts src/app/components/component1/component1.component.spec.ts src/app/components/component3/component3.component.spec.ts src/app/components/component2/component2.component.spec.ts triggered a watch rerun event
[3:50:19 PM] Enqueuing "should create: 1"
[3:50:19 PM] Enqueuing "should create: 2"
[3:50:19 PM] Enqueuing "should create: 3"
[3:50:19 PM] Enqueuing "should create: 4"
[3:50:19 PM] Enqueuing "should create: 5"
[3:50:19 PM] Enqueuing "should create: 6"
[3:50:19 PM] Enqueuing "should create: 7"
[3:50:19 PM] Enqueuing "should create: 8"
[3:50:19 PM] Enqueuing "should create: 9"
[3:50:19 PM] Enqueuing "should create: 10"
[3:50:19 PM] Enqueuing "should create: 11"
[3:50:19 PM] Enqueuing "should create: 12"
[3:50:19 PM] Enqueuing "should create: 13"
[3:50:19 PM] Enqueuing "should create: 14"
[3:50:19 PM] Enqueuing "should create: 15"
[3:50:19 PM] Enqueuing "should create: 16"
[3:50:19 PM] Enqueuing "should create: 17"
[3:50:19 PM] Enqueuing "should create: 18"
[3:50:19 PM] Enqueuing "should create: 19"
[3:50:19 PM] Enqueuing "should create: 20"
[3:50:19 PM] Enqueuing "should create: 21"
[3:50:19 PM] Enqueuing "should create: 22"
[3:50:19 PM] Enqueuing "should create: 23"
[3:50:19 PM] Enqueuing "should create: 24"
[3:50:19 PM] Enqueuing "should create: 25"
[3:50:19 PM] Enqueuing "should create: 1"
[3:50:19 PM] Enqueuing "should create: 2"
[3:50:19 PM] Enqueuing "should create: 3"
[3:50:19 PM] Enqueuing "should create: 4"
[3:50:19 PM] Enqueuing "should create: 5"
[3:50:19 PM] Enqueuing "should create: 6"
[3:50:19 PM] Enqueuing "should create: 7"
[3:50:19 PM] Enqueuing "should create: 8"
[3:50:19 PM] Enqueuing "should create: 9"
[3:50:19 PM] Enqueuing "should create: 10"
[3:50:19 PM] Enqueuing "should create: 11"
[3:50:19 PM] Enqueuing "should create: 12"
[3:50:19 PM] Enqueuing "should create: 13"
[3:50:19 PM] Enqueuing "should create: 14"
[3:50:19 PM] Enqueuing "should create: 15"
[3:50:19 PM] Enqueuing "should create: 16"
[3:50:19 PM] Enqueuing "should create: 17"
[3:50:19 PM] Enqueuing "should create: 18"
[3:50:19 PM] Enqueuing "should create: 19"
[3:50:19 PM] Enqueuing "should create: 20"
[3:50:19 PM] Enqueuing "should create: 21"
[3:50:19 PM] Enqueuing "should create: 22"
[3:50:19 PM] Enqueuing "should create: 23"
[3:50:19 PM] Enqueuing "should create: 24"
[3:50:19 PM] Enqueuing "should create: 25"
[3:50:19 PM] Enqueuing "should create: 1"
[3:50:19 PM] Enqueuing "should create: 2"
[3:50:19 PM] Enqueuing "should create: 3"
[3:50:19 PM] Enqueuing "should create: 4"
[3:50:19 PM] Enqueuing "should create: 5"
[3:50:19 PM] Enqueuing "should create: 6"
[3:50:19 PM] Enqueuing "should create: 7"
[3:50:19 PM] Enqueuing "should create: 8"
[3:50:19 PM] Enqueuing "should create: 9"
[3:50:19 PM] Enqueuing "should create: 10"
[3:50:19 PM] Enqueuing "should create: 11"
[3:50:19 PM] Enqueuing "should create: 12"
[3:50:19 PM] Enqueuing "should create: 13"
[3:50:19 PM] Enqueuing "should create: 14"
[3:50:19 PM] Enqueuing "should create: 15"
[3:50:19 PM] Enqueuing "should create: 16"
[3:50:19 PM] Enqueuing "should create: 17"
[3:50:19 PM] Enqueuing "should create: 18"
[3:50:19 PM] Enqueuing "should create: 19"
[3:50:19 PM] Enqueuing "should create: 20"
[3:50:19 PM] Enqueuing "should create: 21"
[3:50:19 PM] Enqueuing "should create: 22"
[3:50:19 PM] Enqueuing "should create: 23"
[3:50:19 PM] Enqueuing "should create: 24"
[3:50:19 PM] Enqueuing "should create: 25"
[3:50:19 PM] Enqueuing "should create: 1"
[3:50:19 PM] Enqueuing "should create: 2"
[3:50:19 PM] Enqueuing "should create: 3"
[3:50:19 PM] Enqueuing "should create: 4"
[3:50:19 PM] Enqueuing "should create: 5"
[3:50:19 PM] Enqueuing "should create: 6"
[3:50:19 PM] Enqueuing "should create: 7"
[3:50:19 PM] Enqueuing "should create: 8"
[3:50:19 PM] Enqueuing "should create: 9"
[3:50:19 PM] Enqueuing "should create: 10"
[3:50:19 PM] Enqueuing "should create: 11"
[3:50:19 PM] Enqueuing "should create: 12"
[3:50:19 PM] Enqueuing "should create: 13"
[3:50:19 PM] Enqueuing "should create: 14"
[3:50:19 PM] Enqueuing "should create: 15"
[3:50:19 PM] Enqueuing "should create: 16"
[3:50:19 PM] Enqueuing "should create: 17"
[3:50:19 PM] Enqueuing "should create: 18"
[3:50:19 PM] Enqueuing "should create: 19"
[3:50:19 PM] Enqueuing "should create: 20"
[3:50:19 PM] Enqueuing "should create: 21"
[3:50:19 PM] Enqueuing "should create: 22"
[3:50:19 PM] Enqueuing "should create: 23"
[3:50:19 PM] Enqueuing "should create: 24"
[3:50:19 PM] Enqueuing "should create: 25"
[3:50:20 PM] No task result for "app.component.spec.ts", ignoring
[3:50:20 PM] No task result for "AppComponent", ignoring
[3:50:20 PM] Enqueuing "should create the app" because it was just collected
[3:50:20 PM] Enqueuing "should have the 'vitest-coverage-failures' title" because it was just collected
[3:50:20 PM] Enqueuing "should render title" because it was just collected
[3:50:20 PM] No errors found for "app.component.spec.ts"
[3:50:20 PM] No errors found for "AppComponent"
[3:50:20 PM] Marking "should create the app" as passed
[3:50:20 PM] Marking "should have the 'vitest-coverage-failures' title" as passed
[3:50:20 PM] Marking "should render title" as passed
[3:50:21 PM] No task result for "component1.component.spec.ts", ignoring
[3:50:21 PM] No task result for "Component1Component", ignoring
[3:50:21 PM] Enqueuing "should create: 1" because it was just collected
[3:50:21 PM] Enqueuing "should create: 2" because it was just collected
[3:50:21 PM] Enqueuing "should create: 3" because it was just collected
[3:50:21 PM] Enqueuing "should create: 4" because it was just collected
[3:50:21 PM] Enqueuing "should create: 5" because it was just collected
[3:50:21 PM] Enqueuing "should create: 6" because it was just collected
[3:50:21 PM] Enqueuing "should create: 7" because it was just collected
[3:50:21 PM] Enqueuing "should create: 8" because it was just collected
[3:50:21 PM] Enqueuing "should create: 9" because it was just collected
[3:50:21 PM] Enqueuing "should create: 10" because it was just collected
[3:50:21 PM] Enqueuing "should create: 11" because it was just collected
[3:50:21 PM] Enqueuing "should create: 12" because it was just collected
[3:50:21 PM] Enqueuing "should create: 13" because it was just collected
[3:50:21 PM] Enqueuing "should create: 14" because it was just collected
[3:50:21 PM] Enqueuing "should create: 15" because it was just collected
[3:50:21 PM] Enqueuing "should create: 16" because it was just collected
[3:50:21 PM] Enqueuing "should create: 17" because it was just collected
[3:50:21 PM] Enqueuing "should create: 18" because it was just collected
[3:50:21 PM] Enqueuing "should create: 19" because it was just collected
[3:50:21 PM] Enqueuing "should create: 20" because it was just collected
[3:50:21 PM] Enqueuing "should create: 21" because it was just collected
[3:50:21 PM] Enqueuing "should create: 22" because it was just collected
[3:50:21 PM] Enqueuing "should create: 23" because it was just collected
[3:50:21 PM] Enqueuing "should create: 24" because it was just collected
[3:50:21 PM] Enqueuing "should create: 25" because it was just collected
[3:50:21 PM] No task result for "component3.component.spec.ts", ignoring
[3:50:21 PM] No task result for "Component3Component", ignoring
[3:50:21 PM] Enqueuing "should create: 1" because it was just collected
[3:50:21 PM] Enqueuing "should create: 2" because it was just collected
[3:50:21 PM] Enqueuing "should create: 3" because it was just collected
[3:50:21 PM] Enqueuing "should create: 4" because it was just collected
[3:50:21 PM] Enqueuing "should create: 5" because it was just collected
[3:50:21 PM] Enqueuing "should create: 6" because it was just collected
[3:50:21 PM] Enqueuing "should create: 7" because it was just collected
[3:50:21 PM] Enqueuing "should create: 8" because it was just collected
[3:50:21 PM] Enqueuing "should create: 9" because it was just collected
[3:50:21 PM] Enqueuing "should create: 10" because it was just collected
[3:50:21 PM] Enqueuing "should create: 11" because it was just collected
[3:50:21 PM] Enqueuing "should create: 12" because it was just collected
[3:50:21 PM] Enqueuing "should create: 13" because it was just collected
[3:50:21 PM] Enqueuing "should create: 14" because it was just collected
[3:50:21 PM] Enqueuing "should create: 15" because it was just collected
[3:50:21 PM] Enqueuing "should create: 16" because it was just collected
[3:50:21 PM] Enqueuing "should create: 17" because it was just collected
[3:50:21 PM] Enqueuing "should create: 18" because it was just collected
[3:50:21 PM] Enqueuing "should create: 19" because it was just collected
[3:50:21 PM] Enqueuing "should create: 20" because it was just collected
[3:50:21 PM] Enqueuing "should create: 21" because it was just collected
[3:50:21 PM] Enqueuing "should create: 22" because it was just collected
[3:50:21 PM] Enqueuing "should create: 23" because it was just collected
[3:50:21 PM] Enqueuing "should create: 24" because it was just collected
[3:50:21 PM] Enqueuing "should create: 25" because it was just collected
[3:50:21 PM] No task result for "component2.component.spec.ts", ignoring
[3:50:21 PM] No task result for "Component2Component", ignoring
[3:50:21 PM] Enqueuing "should create: 1" because it was just collected
[3:50:21 PM] Enqueuing "should create: 2" because it was just collected
[3:50:21 PM] Enqueuing "should create: 3" because it was just collected
[3:50:21 PM] Enqueuing "should create: 4" because it was just collected
[3:50:21 PM] Enqueuing "should create: 5" because it was just collected
[3:50:21 PM] Enqueuing "should create: 6" because it was just collected
[3:50:21 PM] Enqueuing "should create: 7" because it was just collected
[3:50:21 PM] Enqueuing "should create: 8" because it was just collected
[3:50:21 PM] Enqueuing "should create: 9" because it was just collected
[3:50:21 PM] Enqueuing "should create: 10" because it was just collected
[3:50:21 PM] Enqueuing "should create: 11" because it was just collected
[3:50:21 PM] Enqueuing "should create: 12" because it was just collected
[3:50:21 PM] Enqueuing "should create: 13" because it was just collected
[3:50:21 PM] Enqueuing "should create: 14" because it was just collected
[3:50:21 PM] Enqueuing "should create: 15" because it was just collected
[3:50:21 PM] Enqueuing "should create: 16" because it was just collected
[3:50:21 PM] Enqueuing "should create: 17" because it was just collected
[3:50:21 PM] Enqueuing "should create: 18" because it was just collected
[3:50:21 PM] Enqueuing "should create: 19" because it was just collected
[3:50:21 PM] Enqueuing "should create: 20" because it was just collected
[3:50:21 PM] Enqueuing "should create: 21" because it was just collected
[3:50:21 PM] Enqueuing "should create: 22" because it was just collected
[3:50:21 PM] Enqueuing "should create: 23" because it was just collected
[3:50:21 PM] Enqueuing "should create: 24" because it was just collected
[3:50:21 PM] Enqueuing "should create: 25" because it was just collected
[3:50:21 PM] No errors found for "component1.component.spec.ts"
[3:50:21 PM] No errors found for "Component1Component"
[3:50:21 PM] Marking "should create: 1" as passed
[3:50:21 PM] Marking "should create: 2" as passed
[3:50:21 PM] Marking "should create: 3" as passed
[3:50:21 PM] Marking "should create: 4" as passed
[3:50:21 PM] Marking "should create: 5" as passed
[3:50:21 PM] Marking "should create: 6" as passed
[3:50:21 PM] Marking "should create: 7" as passed
[3:50:21 PM] Marking "should create: 8" as passed
[3:50:21 PM] Marking "should create: 9" as passed
[3:50:21 PM] Marking "should create: 10" as passed
[3:50:21 PM] Marking "should create: 11" as passed
[3:50:21 PM] Marking "should create: 12" as passed
[3:50:21 PM] Marking "should create: 13" as passed
[3:50:21 PM] Marking "should create: 14" as passed
[3:50:21 PM] Marking "should create: 15" as passed
[3:50:21 PM] Marking "should create: 16" as passed
[3:50:21 PM] Marking "should create: 17" as passed
[3:50:21 PM] Marking "should create: 18" as passed
[3:50:21 PM] Marking "should create: 19" as passed
[3:50:21 PM] Marking "should create: 20" as passed
[3:50:21 PM] Marking "should create: 21" as passed
[3:50:21 PM] Marking "should create: 22" as passed
[3:50:21 PM] Marking "should create: 23" as passed
[3:50:21 PM] Marking "should create: 24" as passed
[3:50:21 PM] Marking "should create: 25" as passed
[3:50:21 PM] No errors found for "component3.component.spec.ts"
[3:50:21 PM] No errors found for "Component3Component"
[3:50:21 PM] Marking "should create: 1" as passed
[3:50:21 PM] Marking "should create: 2" as passed
[3:50:21 PM] Marking "should create: 3" as passed
[3:50:21 PM] Marking "should create: 4" as passed
[3:50:21 PM] Marking "should create: 5" as passed
[3:50:21 PM] Marking "should create: 6" as passed
[3:50:21 PM] Marking "should create: 7" as passed
[3:50:21 PM] Marking "should create: 8" as passed
[3:50:21 PM] Marking "should create: 9" as passed
[3:50:21 PM] Marking "should create: 10" as passed
[3:50:21 PM] Marking "should create: 11" as passed
[3:50:21 PM] Marking "should create: 12" as passed
[3:50:21 PM] Marking "should create: 13" as passed
[3:50:21 PM] Marking "should create: 14" as passed
[3:50:21 PM] Marking "should create: 15" as passed
[3:50:21 PM] Marking "should create: 16" as passed
[3:50:21 PM] Marking "should create: 17" as passed
[3:50:21 PM] Marking "should create: 18" as passed
[3:50:21 PM] Marking "should create: 19" as passed
[3:50:21 PM] Marking "should create: 20" as passed
[3:50:21 PM] Marking "should create: 21" as passed
[3:50:21 PM] Marking "should create: 22" as passed
[3:50:21 PM] Marking "should create: 23" as passed
[3:50:21 PM] Marking "should create: 24" as passed
[3:50:21 PM] Marking "should create: 25" as passed
[3:50:21 PM] No errors found for "component2.component.spec.ts"
[3:50:21 PM] No errors found for "Component2Component"
[3:50:21 PM] Marking "should create: 1" as passed
[3:50:21 PM] Marking "should create: 2" as passed
[3:50:21 PM] Marking "should create: 3" as passed
[3:50:21 PM] Marking "should create: 4" as passed
[3:50:21 PM] Marking "should create: 5" as passed
[3:50:21 PM] Marking "should create: 6" as passed
[3:50:21 PM] Marking "should create: 7" as passed
[3:50:21 PM] Marking "should create: 8" as passed
[3:50:21 PM] Marking "should create: 9" as passed
[3:50:21 PM] Marking "should create: 10" as passed
[3:50:21 PM] Marking "should create: 11" as passed
[3:50:21 PM] Marking "should create: 12" as passed
[3:50:21 PM] Marking "should create: 13" as passed
[3:50:21 PM] Marking "should create: 14" as passed
[3:50:21 PM] Marking "should create: 15" as passed
[3:50:21 PM] Marking "should create: 16" as passed
[3:50:21 PM] Marking "should create: 17" as passed
[3:50:21 PM] Marking "should create: 18" as passed
[3:50:21 PM] Marking "should create: 19" as passed
[3:50:21 PM] Marking "should create: 20" as passed
[3:50:21 PM] Marking "should create: 21" as passed
[3:50:21 PM] Marking "should create: 22" as passed
[3:50:21 PM] Marking "should create: 23" as passed
[3:50:21 PM] Marking "should create: 24" as passed
[3:50:21 PM] Marking "should create: 25" as passed
[3:50:21 PM] Ending test run 
[3:50:21 PM] Test run promise is finished, the queue is 0
[3:50:21 PM] [VSCODE] Ignoring file: node_modules\.vite\results.json
[3:50:22 PM] [VSCODE] File deleted: .git\fsmonitor--daemon\cookies\50556-603
[3:50:27 PM] [VSCODE] File deleted: .git\fsmonitor--daemon\cookies\50556-604
[INFO 3:50:30 PM] [Worker] Running coverage with configuration: {
  provider: 'v8',
  enabled: true,
  all: true,
  clean: true,
  cleanOnRerun: true,
  reportsDirectory: 'C:/Users/XXXXXXXXX/AppData/Local/Temp/vitest-coverage-2e5f9456-d0db-459c-be0f-71224f5e1fee',
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

[INFO 3:50:30 PM] Running all tests in vitest-coverage-failures
[3:50:30 PM] Starting a test run because src/app/app.component.spec.ts src/app/components/component1/component1.component.spec.ts src/app/components/component3/component3.component.spec.ts src/app/components/component2/component2.component.spec.ts triggered a watch rerun event
[3:50:30 PM] Enqueuing "should create the app"
[3:50:30 PM] Enqueuing "should have the 'vitest-coverage-failures' title"
[3:50:30 PM] Enqueuing "should render title"
[3:50:30 PM] Enqueuing "should create: 1"
[3:50:30 PM] Enqueuing "should create: 2"
[3:50:30 PM] Enqueuing "should create: 3"
[3:50:30 PM] Enqueuing "should create: 4"
[3:50:30 PM] Enqueuing "should create: 5"
[3:50:30 PM] Enqueuing "should create: 6"
[3:50:30 PM] Enqueuing "should create: 7"
[3:50:30 PM] Enqueuing "should create: 8"
[3:50:30 PM] Enqueuing "should create: 9"
[3:50:30 PM] Enqueuing "should create: 10"
[3:50:30 PM] Enqueuing "should create: 11"
[3:50:30 PM] Enqueuing "should create: 12"
[3:50:30 PM] Enqueuing "should create: 13"
[3:50:30 PM] Enqueuing "should create: 14"
[3:50:30 PM] Enqueuing "should create: 15"
[3:50:30 PM] Enqueuing "should create: 16"
[3:50:30 PM] Enqueuing "should create: 17"
[3:50:30 PM] Enqueuing "should create: 18"
[3:50:30 PM] Enqueuing "should create: 19"
[3:50:30 PM] Enqueuing "should create: 20"
[3:50:30 PM] Enqueuing "should create: 21"
[3:50:30 PM] Enqueuing "should create: 22"
[3:50:30 PM] Enqueuing "should create: 23"
[3:50:30 PM] Enqueuing "should create: 24"
[3:50:30 PM] Enqueuing "should create: 25"
[3:50:30 PM] Enqueuing "should create: 1"
[3:50:30 PM] Enqueuing "should create: 2"
[3:50:30 PM] Enqueuing "should create: 3"
[3:50:30 PM] Enqueuing "should create: 4"
[3:50:30 PM] Enqueuing "should create: 5"
[3:50:30 PM] Enqueuing "should create: 6"
[3:50:30 PM] Enqueuing "should create: 7"
[3:50:30 PM] Enqueuing "should create: 8"
[3:50:30 PM] Enqueuing "should create: 9"
[3:50:30 PM] Enqueuing "should create: 10"
[3:50:30 PM] Enqueuing "should create: 11"
[3:50:30 PM] Enqueuing "should create: 12"
[3:50:30 PM] Enqueuing "should create: 13"
[3:50:30 PM] Enqueuing "should create: 14"
[3:50:30 PM] Enqueuing "should create: 15"
[3:50:30 PM] Enqueuing "should create: 16"
[3:50:30 PM] Enqueuing "should create: 17"
[3:50:30 PM] Enqueuing "should create: 18"
[3:50:30 PM] Enqueuing "should create: 19"
[3:50:30 PM] Enqueuing "should create: 20"
[3:50:30 PM] Enqueuing "should create: 21"
[3:50:30 PM] Enqueuing "should create: 22"
[3:50:30 PM] Enqueuing "should create: 23"
[3:50:30 PM] Enqueuing "should create: 24"
[3:50:30 PM] Enqueuing "should create: 25"
[3:50:30 PM] Enqueuing "should create: 1"
[3:50:30 PM] Enqueuing "should create: 2"
[3:50:30 PM] Enqueuing "should create: 3"
[3:50:30 PM] Enqueuing "should create: 4"
[3:50:30 PM] Enqueuing "should create: 5"
[3:50:30 PM] Enqueuing "should create: 6"
[3:50:30 PM] Enqueuing "should create: 7"
[3:50:30 PM] Enqueuing "should create: 8"
[3:50:30 PM] Enqueuing "should create: 9"
[3:50:30 PM] Enqueuing "should create: 10"
[3:50:30 PM] Enqueuing "should create: 11"
[3:50:30 PM] Enqueuing "should create: 12"
[3:50:30 PM] Enqueuing "should create: 13"
[3:50:30 PM] Enqueuing "should create: 14"
[3:50:30 PM] Enqueuing "should create: 15"
[3:50:30 PM] Enqueuing "should create: 16"
[3:50:30 PM] Enqueuing "should create: 17"
[3:50:30 PM] Enqueuing "should create: 18"
[3:50:30 PM] Enqueuing "should create: 19"
[3:50:30 PM] Enqueuing "should create: 20"
[3:50:30 PM] Enqueuing "should create: 21"
[3:50:30 PM] Enqueuing "should create: 22"
[3:50:30 PM] Enqueuing "should create: 23"
[3:50:30 PM] Enqueuing "should create: 24"
[3:50:30 PM] Enqueuing "should create: 25"
[3:50:30 PM] [API] Vitest WebSocket connection closed, cannot call RPC anymore.
[3:50:30 PM] Ending test run 
[3:50:30 PM] Test run promise is finished, the queue is 0
[Error 3:50:30 PM] [API] Failed to close Vitest RPC [Error Error] [birpc] rpc is closed, cannot call "close"
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
[Error 3:50:35 PM] [API] Failed to close Vitest process [Error Error] Vitest process did not exit in time
Error: Vitest process did not exit in time
    at Timeout._onTimeout (c:\Users\XXXXXXXXX\.vscode\extensions\vitest.explorer-1.14.3\dist\extension.js:18:6448)
    at listOnTimeout (node:internal/timers:581:17)
    at processTimers (node:internal/timers:519:7)


```
