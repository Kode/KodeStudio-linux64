/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import {DebugProtocol} from 'vscode-debugprotocol';

import {IStackTraceResponseBody} from '../src/chrome/debugAdapterInterfaces';

import {Mock, It, MockBehavior} from 'typemoq';
import * as path from 'path';
import * as mockery from 'mockery';
import * as fs from 'fs';

export function setupUnhandledRejectionListener(): void {
    process.addListener('unhandledRejection', unhandledRejectionListener);
}

export function removeUnhandledRejectionListener(): void {
    process.removeListener('unhandledRejection', unhandledRejectionListener);
}

function unhandledRejectionListener(reason: any, p: Promise<any>) {
    console.log('*');
    console.log('**');
    console.log('***');
    console.log('****');
    console.log('*****');
    console.log(`ERROR!! Unhandled promise rejection, a previous test may have failed but reported success.`);
    console.log(reason.toString());
    console.log('*****');
    console.log('****');
    console.log('***');
    console.log('**');
    console.log('*');
}

export class MockEvent implements DebugProtocol.Event {
    public seq = 0;
    public type = 'event';

    constructor(public event: string, public body?: any) { }
}

export function registerEmptyMocks(...moduleNames: string[]): void {
    (<string[]>moduleNames).forEach(name => {
        mockery.registerMock(name, {});
    });
}

export function getStackTraceResponseBody(aPath: string, lines: number[], sourceReferences: number[] = []): IStackTraceResponseBody {
    return {
        stackFrames: lines.map((line, i) => ({
            id: i,
            name: 'line ' + i,
            line,
            column: 0,
            source: {
                path: aPath,
                name: path.basename(aPath),
                sourceReference: sourceReferences[i] || 0
            }
        }))
    };
}

/**
 * Some tests use this to override 'os' and 'path' with the windows versions for consistency when running on different
 * platforms. For other tests, it either doesn't matter, or they have platform-specific test code.
 */
export function registerWin32Mocks(): void {
    mockery.registerMock('os', { platform: () => 'win32' });
    mockery.registerMock('path', path.win32);
}

export function registerOSXMocks(): void {
    mockery.registerMock('os', { platform: () => 'darwin' });
    mockery.registerMock('path', path.posix);
}

/**
 * path.resolve + fixing the drive letter to match what VS Code does. Basically tests can use this when they
 * want to force a path to native slashes and the correct letter case, but maybe can't use un-mocked utils.
 */
export function pathResolve(...segments: string[]): string {
    let aPath = path.resolve.apply(null, segments);

    if (aPath.match(/^[A-Za-z]:/)) {
        aPath = aPath[0].toLowerCase() + aPath.substr(1);
    }

    return aPath;
}

export function registerMockReadFile(...entries: { absPath: string; data: string }[]): void {
    const fsMock = Mock.ofInstance(fs, MockBehavior.Strict);
    mockery.registerMock('fs', fsMock.object);

    entries.forEach(entry => {
        fsMock
            .setup(x => x.readFile(It.isValue(entry.absPath), It.isAny()))
            .callback((path, callback) => callback(null, entry.data));
    });
}
