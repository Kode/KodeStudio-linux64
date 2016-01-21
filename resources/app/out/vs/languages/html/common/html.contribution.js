/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
define(["require", "exports", 'vs/editor/common/modes/modesRegistry'], function (require, exports, modesExtensions) {
    modesExtensions.registerMode({
        id: 'html',
        extensions: ['.html', '.htm', '.shtml', '.mdoc', '.jsp', '.asp', '.aspx', '.jshtm'],
        aliases: ['HTML', 'htm', 'html', 'xhtml'],
        mimetypes: ['text/html', 'text/x-jshtm', 'text/template', 'text/ng-template'],
        moduleId: 'vs/languages/html/common/html',
        ctorName: 'HTMLMode'
    });
});
//# sourceMappingURL=html.contribution.js.map