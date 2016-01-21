/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define(["require", "exports", 'vs/base/common/winjs.base', 'vs/nls', 'vs/platform/platform', 'vs/base/common/actions', 'vs/platform/actions/common/actions', 'vs/workbench/common/actionRegistry', 'vs/workbench/services/part/common/partService'], function (require, exports, winjs_base_1, nls, platform_1, actions_1, actions_2, actionRegistry_1, partService_1) {
    var ID = 'workbench.action.toggleSidebarPosition';
    var LABEL = nls.localize('togglePosition', "Toggle Side Bar Position");
    var ToggleSidebarPositionAction = (function (_super) {
        __extends(ToggleSidebarPositionAction, _super);
        function ToggleSidebarPositionAction(id, label, partService) {
            _super.call(this, id, label);
            this.partService = partService;
            this.enabled = !!this.partService;
        }
        ToggleSidebarPositionAction.prototype.run = function () {
            var position = this.partService.getSideBarPosition();
            this.partService.setSideBarPosition(position === partService_1.Position.LEFT ? partService_1.Position.RIGHT : partService_1.Position.LEFT);
            return winjs_base_1.Promise.as(null);
        };
        ToggleSidebarPositionAction = __decorate([
            __param(2, partService_1.IPartService)
        ], ToggleSidebarPositionAction);
        return ToggleSidebarPositionAction;
    })(actions_1.Action);
    exports.ToggleSidebarPositionAction = ToggleSidebarPositionAction;
    var registry = platform_1.Registry.as(actionRegistry_1.Extensions.WorkbenchActions);
    registry.registerWorkbenchAction(new actions_2.SyncActionDescriptor(ToggleSidebarPositionAction, ID, LABEL), nls.localize('view', "View"));
});
//# sourceMappingURL=toggleSidebarPosition.js.map