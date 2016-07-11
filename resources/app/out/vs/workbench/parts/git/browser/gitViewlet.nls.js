/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/*---------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/parts/git/browser/gitViewlet.nls", {
	"vs/workbench/parts/git/browser/views/changes/changesView": [
		"Please provide a commit message. You can always press **{0}** to commit changes. If there are any staged changes, only those will be committed; otherwise, all changes will.",
		"Once there are some changes to commit, type in the commit message and either press **{0}** to commit changes. If there are any staged changes, only those will be committed; otherwise, all changes will.",
		"It is recommended to keep the commit's first line under 50 characters. Feel free to use more lines for extra information.",
		"Message (press {0} to commit)",
		"Git: Type commit message and press {0} to commit",
		"Git Changes View",
		"Show Git Output"
	],
	"vs/workbench/parts/git/browser/views/changes/changesViewer": [
		"Staged Changes",
		"Changes",
		"Merge Changes",
		"This file is located outside the current workspace.",
		"M",
		"M",
		"A",
		"D",
		"D",
		"R",
		"C",
		"U",
		"!",
		"D",
		"A",
		"D",
		"A",
		"D",
		"A",
		"M",
		"Modified in index",
		"Modified",
		"Added to index",
		"Deleted in index",
		"Deleted",
		"Renamed in index",
		"Copied in index",
		"Untracked",
		"Ignored",
		"Conflict: both deleted",
		"Conflict: added by us",
		"Conflict: deleted by them",
		"Conflict: added by them",
		"Conflict: deleted by us",
		"Conflict: both added",
		"Conflict: both modified",
		"File {0} in folder {1} has status: {2}, Git",
		"Staged Changes, Git",
		"Changes, Git",
		"Merge, Git"
	],
	"vs/workbench/parts/git/browser/views/disabled/disabledView": [
		"Git is disabled in the settings."
	],
	"vs/workbench/parts/git/browser/views/empty/emptyView": [
		"This workspace isn't yet under git source control.",
		"Initialize git repository"
	],
	"vs/workbench/parts/git/browser/views/gitless/gitlessView": [
		"You can either install it with {0}, download it from {1} or install the {2} command line developer tools, by simply typing {3} on a Terminal prompt.",
		"You can either install it with {0} or download it from {1}.",
		"You can download it from {0}.",
		"You can download it from {0}.",
		"It looks like git is not installed on your system.",
		"Once git is installed, please restart {0}."
	],
	"vs/workbench/parts/git/browser/views/huge/hugeView": [
		"Your repository appears to have many active changes.\nThis can cause Code to become very slow.",
		"You can permanently disable this warning with the following setting:",
		"Allow large repositories"
	],
	"vs/workbench/parts/git/browser/views/notroot/notrootView": [
		"This directory seems to be contained in a git repository.",
		"Open the repository's root directory in order to access Git features."
	],
	"vs/workbench/parts/git/browser/views/noworkspace/noworkspaceView": [
		"There is no currently opened folder.",
		"Open a folder with a Git repository in order to access Git features."
	]
});