# PHOTOSIA — プロトタイプ v7.0

## ディレクトリ構成

```
photosia/
├── index.html          # メインHTML（構造のみ）
├── css/
│   └── style.css       # 全スタイル（デザイントークン〜レスポンシブ）
├── js/
│   └── main.js         # インタラクション（スライダー・スクロール・カウントアップ）
├── images/             # 本番用画像をここに配置
│   ├── hero/
│   ├── works/
│   └── logos/
└── README.md
```

## 画像について
現在はUnsplash（https://unsplash.com）のURLを直接参照しています。
本番環境では `images/` フォルダに実際の物件写真を配置し、パスを差し替えてください。

## ローカル確認方法
ブラウザで `index.html` を直接開くか、VS Code の Live Server 拡張で確認できます。
