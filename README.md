# Repository dedicated to the course - TAJS Method - Erick Wendel

# Advanced concepts on Automated Testing

- [x] - Works with ES Modules
- [x] - Has live reload
- [x] - Has debugging with VSCode
- [x] - Has support for debugging with browsers

# Running

## Validated version

Check if you are using Node.js LTS (currently version 18)

```shell
node -v
# v18.17.0
```

## Open training folder

In the folder where you keep all the training projects, let's assume you're going to call it `training-tajs-method-erickwendel`

```shell
cd training-tajs-method-erickwendel
```

and then restore the packages:

```shell
cd aula01-setup-jest
npm ci --silent

### Running tests in live reload mode

To run tests in live reload mode:

shell: npm run test:dev

or simply run them:
shell: npm run test

## Debugging and Live reload in VSCode

The [.vscode](./../.vscode) folder is located in the project root, so there will be no need to replicate the configuration throughout the training.

### Open the training folder in VSCode

Assuming you are in `training-methodjs-erickwendel/lesson01-setup-jest` and have already restored the packages following the previous steps, execute:
```shell
code ../
# to open the folder containing all projects
```

### Starting the test suite

By default, following the configuration of the [tasks.json](./../.vscode/tasks.json) file, VSCode will try to run the test suite located in the **file you open**.

Open [test/template.test.js](./test/template.test.js) then press `Command` (or `Control` if Windows) `Shift B` to start the task of running the tests in the folder of the file in focus.

Your terminal should look something like this:

```shell
* Executing task: bash -c 'PROJECT_DIR=$(dirname /Users/your-name/courses/lesson01-setup-jest/test/template.test.js); cd "$PROJECT_DIR"; `npm run test:debug`

> aula01-setup-jest@0.0.1 test:debug
> node --experimental-vm-modules --inspect-brk node_modules/jest/bin/jest.js --watchAll

Debugger listening on ws://127.0.0.1:9229/0b60b289-f3cb-43f6-b521-66047adc9594
For help, see: https://nodejs.org/en/docs/inspector

```

### Plugging in debug mode to tests

Now that the project is waiting for connections, press `F5`, VSCode will pause on the line containing the keyword `debug` or at a breakpoint you define.

Then just press `F5` again to let the tests finish executing.

Your VSCode `terminal` tab will look similar to the output below:
```shell
Debugger attached.

Debugger attached.

Debugger attached.

Debugger attached.
(node:26586) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
(Use `node --trace-warnings...` to show where the warning was created) 
PASS test/template.test.js (8,127 s) 
Template Suite 
✓ should sum 2 numbers (7922 ms)

Waiting for the debugger to disconnect...
Waiting for the debugger to disconnect...
Waiting for the debugger to disconnect...
Waiting for the debugger to disconnect...
Test Suites: 1 passed, 1 total
Tests: 1 passed, 1 total
Snapshots: 0 total
Time: 8,399 s
Ran all test suites.

Watch Usage 
› Press f to run only failed tests. 
› Press to only run tests related to changed files. 
› Press p to filter by a filename regex pattern. 
› Press t to filter by a test name regex pattern. 
› Press q to quit watch mode. 
› Press Enter to trigger a test run.

```

### Stopping

- To stop the tests, simply run `Ctrl C` in the `terminal` tab of VSCode
- To disconnect the debugger run `Shift F5` in VSCode

https://jestjs.io/docs/ecmascript-modules