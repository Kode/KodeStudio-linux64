/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/base/common/worker/workerServer.nls.ja", {
	"vs/base/common/errors": [
		"{0}。エラー コード: {1}",
		"アクセス許可が拒否されました (HTTP {0})",
		"アクセス許可が拒否されました",
		"{0} (HTTP {1}: {2})",
		"{0} (HTTP {1})",
		"不明な接続エラー ({0})",
		"不明な接続エラーが発生しました。インターネット接続が切れたか、接続先のサーバーがオフラインです。",
		"{0}: {1}",
		"不明なエラーが発生しました。ログで詳細を確認してください。",
		"システム エラーが発生しました ({0})",
		"不明なエラーが発生しました。ログで詳細を確認してください。",
		"{0} (合計 {1} エラー)",
		"不明なエラーが発生しました。ログで詳細を確認してください。",
		"実装されていません",
		"無効な引数: {0}",
		"無効な引数",
		"無効な状態: {0}",
		"無効な状態",
		"必要なファイルを読み込みに失敗しました。インターネット接続が切れたか、接続先のサーバーがオフラインです。ブラウザーを更新して、もう一度やり直してください。",
		"必要なファイルの読み込みに失敗しました。アプリケーションを再起動してもう一度試してください。詳細: {0}",
	],
	"vs/base/common/severity": [
		"エラー",
		"警告",
		"情報",
	],
	"vs/editor/common/config/defaultConfig": [
		"エディターのコンテンツ",
	],
	"vs/editor/common/model/textModelWithTokens": [
		"入力のトークン化中にモードが失敗しました。",
	],
	"vs/editor/common/modes/modesRegistry": [
		"プレーンテキスト",
	],
	"vs/editor/common/modes/supports/suggestSupport": [
		"ワード ベースの修正候補を有効にします。",
	],
	"vs/editor/common/services/modeServiceImpl": [
		"言語の宣言を提供します。",
		"言語の ID。",
		"言語の名前のエイリアス。",
		"言語に関連付けられているファイルの拡張子。",
		"言語に関連付けられたファイル名。",
		"言語に関連付けられたファイル名の glob パターン。",
		"言語に関連付けられている MIME の種類。",
		"言語のファイルの最初の行に一致する正規表現。",
		"言語の構成オプションを含むファイルへの相対パス。",
		"`contributes.{0}` に対する空の値",
		"プロパティ `{0}` は必須で、型 `string` でなければなりません",
		"プロパティ `{0}` を省略するか、型 `string[]` にする必要があります",
		"プロパティ `{0}` を省略するか、型 `string[]` にする必要があります",
		"プロパティ `{0}` を省略するか、型 `string` にする必要があります",
		"プロパティ `{0}` を省略するか、型 `string` にする必要があります",
		"プロパティ `{0}` を省略するか、型 `string[]` にする必要があります",
		"プロパティ `{0}` を省略するか、型 `string[]` にする必要があります",
		"正しくない `contributes.{0}`。配列が必要です。",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"構成の設定を提供します。",
		"設定の概要です。このラベルは、設定ファイルでコメントの区切り文字として使用します。",
		"構成のプロパティの説明です。",
		"設定すると、\'configuration.type\' は \'オブジェクトに設定されなければなりません",
		"\'configuration.title\' は、文字列である必要があります",
		"\'configuration.properties\' は、オブジェクトである必要があります",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"拡張機能 `{1}` のアクティブ化に失敗しました。理由: 依存関係 `{0}` が不明です。",
		"拡張機能 `{1}` のアクティブ化に失敗しました。理由: 依存関係 `{0}` のアクティブ化に失敗しました。",
		"拡張機能 `{0}` のアクティブ化に失敗しました。理由: 依存関係のレベルが 10 を超えています (依存関係のループの可能性があります)。",
		"拡張機能 `{0}` のアクティブ化に失敗しました: {1}。",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"空の拡張機能の説明を入手しました",
		"プロパティ `{0}` は必須で、型 `string` でなければなりません",
		"プロパティ `{0}` は必須で、型 `string` でなければなりません",
		"プロパティ `{0}` は必須で、型 `string` でなければなりません",
		"プロパティ `{0}` は必須で、型 `object` でなければなりません",
		"プロパティ `{0}` は必須で、型 `string` でなければなりません",
		"プロパティ `{0}` は省略するか、型 `string[]` にする必要があります",
		"プロパティ `{0}` は省略するか、型 `string[]` にする必要があります",
		"プロパティ `{0}` と `{1}` は、両方とも指定するか両方とも省略しなければなりません",
		"プロパティ `{0}` は省略するか、型 `string` にする必要があります",
		"拡張機能のフォルダー ({1}) の中に `main` ({0}) が含まれることが予期されます。これにより拡張機能を移植できなくなる可能性があります。",
		"プロパティ `{0}` と `{1}` は、両方とも指定するか両方とも省略しなければなりません",
		"VS Code ギャラリーで使用される拡張機能の表示名。",
		"VS Code ギャラリーで拡張機能の分類に使用されるカテゴリ。",
		"VS Code マーケットプレースで使用されるバナー。",
		"VS Code マーケットプレース ページ ヘッダー上のバナーの色。",
		"バナーで使用されるフォントの配色テーマ。",
		"VS Code 拡張機能の公開元。",
		"VS Code 拡張機能のアクティブ化イベント。",
		"他の拡張機能に対する依存関係。拡張機能の識別子は常に ${publisher}.${name} です。例: vscode.csharp。",
		"パッケージが VS Code 拡張機能として公開される前に実行されるスクリプト。",
		"このパッケージで表される VS Code 拡張機能のすべてのコントリビューション。",
	],
	"vs/platform/jsonschemas/common/jsonContributionRegistry": [
		"スキーマを使用して JSON ファイルを記述します。詳細については、json-schema.org を参照してください。",
		"スキーマの一意識別子。",
		"このドキュメントを検証するためのスキーマ ",
		"要素のわかりやすいタイトル",
		"要素の詳しい説明。ホバー メニューや候補に使用されます。",
		"既定値。候補に使用されます。",
		"現在の値を割り切れる数値 (つまり、余りなし)",
		"最大数値、既定でその値を含む。",
		"maximum プロパティを排他的にします。",
		"最小数値、既定でその値を含む。",
		"minimum プロパティを排他的にします。",
		"文字列の最大長。",
		"文字列の最小長。",
		"文字列を照合する正規表現。これは暗黙的に固定されていません。",
		"配列に対応 (項目が配列として設定されている場合のみ)。スキーマの場合、このスキーマによって、項目の配列によって指定された項目の後にある項目が検証されます。false の場合、追加の項目により、検証が失敗します。",
		"配列に対応。各要素の検証基準となるスキーマ、または各項目を順番 (最初のスキーマで最初の要素、2 番目のスキーマで 2 番目の要素を検証するなど) に検証する際に基準となるスキーマの配列になります。",
		"配列内に含めることのできる項目の最大数。その数を含む。",
		"配列内に含めることのできる項目の最小数。その数を含む。",
		"配列内のすべての項目が一意である必要があるかどうか。既定値は false です。",
		"オブジェクトに含めることのできるプロパティの最大数。その数を含む。",
		"オブジェクトに含めることのできるプロパティの最小数。その数を含む。",
		"このオブジェクトで必要なすべてのプロパティの名前をリストする文字列の配列。",
		"スキーマまたはブール値。スキーマの場合は、\'properties\' とも \'patternProperties\' とも一致しないすべてのプロパティを検証するために使用されます。false の場合は、どちらとも一致しないプロパティがあれば、このスキーマは失敗します。",
		"検証に使用されません。$ref を使用してインラインで参照するサブスキーマをここに配置してください",
		"プロパティ名から各プロパティのスキーマへのマップ。",
		"プロパティ名の正規表現から一致するプロパティのスキーマへのマップ。",
		"プロパティ名からプロパティ名の配列またはスキーマへのマップ。プロパティ名の配列は、キーで名前が付けられているプロパティが、有効にするためにオブジェクトに含まれている配列のプロパティによって決まることを意味します。値がスキーマの場合は、キーのプロパティがオブジェクトに存在する場合のみ、スキーマがオブジェクトに適用されます。",
		"有効なリテラル値のセット",
		"基本的なスキーマ型のいずれかの文字列 (number、integer、null、array、object、boolean、string) またはこれらの型のサブセットを指定する文字列の配列。",
		"値に求められる形式を説明します。",
		"スキーマの配列 (スキーマはすべて一致する必要があります)。",
		"スキーマの配列 (この場合、少なくとも 1 つが一致する必要があります)。",
		"スキーマの配列 (スキーマのうち 1 つは完全一致する必要があります)。",
		"一致してはならないスキーマ。",
	]
});