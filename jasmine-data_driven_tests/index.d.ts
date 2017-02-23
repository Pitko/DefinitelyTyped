// Type definitions for Jasmine Data Driven Tests 1.0
// Project: https://github.com/gburghardt/jasmine-data_driven_tests
// Definitions by: Anthony MacKinnon <https://github.com/AnthonyMacKinnon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var all: JasmineDataDrivenTest;
declare var xall: JasmineDataDrivenTest;

interface JasmineDataDrivenTest {
    <T, U, V, W, X>(
        description: string,
        dataset: [T, U, V, W, X][],
        assertion: (arg0: T, arg1: U, arg2: V, arg3: W, arg4: X, done: () => void) => void): void;
    <T, U, V, W>(
        description: string,
        dataset: [T, U, V, W][],
        assertion: (arg0: T, arg1: U, arg2: V, arg3: W, done: () => void) => void): void;
    <T, U, V>(
        description: string,
        dataset: [T, U, V][],
        assertion: (arg0: T, arg1: U, arg2: V, done: () => void) => void): void;
    <T, U>(
        description: string,
        dataset: [T, U][],
        assertion: (arg0: T, arg1: U, done: () => void) => void): void;
    <T>(
        description: string,
        dataset: T[],
        assertion: (value: T, done: () => void) => void): void;
}
