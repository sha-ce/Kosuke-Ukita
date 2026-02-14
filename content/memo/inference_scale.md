---
title: '論文読み: Inference-Time Scaling for Diffusion Models'
date: '2026-02-14'
description: 'Google DeepMind. 生成品質向上のために「推論時間」をどう使うか？ LLMのCoTのようなスケーリング則を拡散モデルで検証した研究．'
---

**Inference-Time Scaling for Diffusion Models beyond Scaling Denoising Steps**

- **Authors**: Nanye Ma, et al. (NYU, MIT, Google DeepMind)
- **Publication**: arXiv 2025 (Jan)
- **Links**: [arXiv](https://arxiv.org/abs/2501.09732)

---

### 1. Abstract

生成AI分野では，モデルサイズやデータ量を増やす「学習時のスケーリング則」が成功を収めてきた．最近のLLMでは，推論時に計算量を増やすこと（Chain-of-ThoughtやTree of Thoughtsなど）でも性能が向上することが示されている．

一方で，拡散モデルの推論時の計算量は「デノイズステップ数」で調整可能だが，ある程度（数十ステップ）を超えると性能が頭打ちになることが知られている．

本研究では，デノイズステップ数を増やすのではなく，**「探索（Search）」** に計算資源を割くことで，推論時のスケーリング則が拡散モデルでも成立することを示した．具体的には，より良い初期ノイズや生成経路を見つけるための探索フレームワークを提案している．

---

### 2. 動機と背景

* **現状の課題**: 従来の研究は，いかに推論ステップ数を減らして高速化するかに注力してきた．しかし，逆のフロンティア（計算時間をかけてでも品質を上げる）は未開拓だった．
* **ノイズの不平等性**: 拡散モデルの初期ノイズは全て等価ではなく，「当たりのノイズ」と「ハズレのノイズ」がある．
* **LLMとの対比**: LLMが推論時に思考時間を増やすように，拡散モデルも推論時に「良い生成経路」を探す時間を与えるべきではないか？

---

### 3. 提案手法: Search Framework

推論時の計算リソース（NFE: Number of Function Evaluations）を，単なるデノイズステップの増加ではなく，**最適なノイズの探索**に投資する．
この探索空間を「Verifier」と「Algorithm」の2軸で定義した．

#### 3.1 Verifiers
生成された画像が良いかどうかを判定する関数．
* **Oracle**: FIDやISそのもの（実験用）．
* **Supervised**: CLIPScore, Aesthetic Score, ImageRewardなど．
* **Self-Supervised**: DINOやCLIPの特徴量の一貫性を見る（Conditioning情報がない場合に使用）．
* **Verifier Ensemble**: 複数の評価指標のアンサンブル．単一指標への過学習を防ぐために有効．

#### 3.2 Algorithms
* **Random Search**: 単純に $N$ 個のノイズ候補から生成し，Best-of-Nを選ぶ．
* **Zero-Order Search**: 勾配を使わず，現在のノイズの近傍を探索して反復的に改善する．
* **Search over Paths**: 生成の途中経過（軌道）に対して探索を行う．

---

### 4. 実験結果

#### 4.1 性能の向上
* ImageNet (Class-conditional) や DrawBench (Text-to-Image) において，単にデノイズステップを増やすよりも，探索を行った方がFIDやCLIPScoreが大幅に改善した．
* 特に **Small Model + Search** の構成が，Searchなしの **Large Model** を凌駕するケースが確認された（例: PixArt-$\Sigma$ with Search > FLUX.1-dev without Search）．これは，学習時の計算コストを推論時の計算コストで代替できる可能性を示唆している．

#### 4.2 Verifier Hacking
* 特定のVerifier（例: Aesthetic Score）だけで最適化すると，そのスコアは上がるが，他の指標（例: CLIPScore / テキスト整合性）が悪化する現象が見られた．
* 強化学習におけるReward Hackingに似た現象であり，複数の視点を持つVerifier Ensembleが重要となる．

---

### 5. 所感・メモ

* **SiTとの関連**: 著者のNanye Ma氏は，拡散モデルとFlow Matchingを統合した **SiT (Scalable Interpolant Transformers)** の筆頭著者でもある．SiTでモデル構造の効率化を行った彼らが，今度は「推論時間の活用」に舵を切ったのは興味深い．
* **CoT for Diffusion**: 生成AIのトレンドが「Latent Consistency Models」や「Rectified Flowの1-step生成」など高速化に向かう中で，真逆の「System 2的な時間をかけて質を上げる思考」を画像生成に持ち込んだ点が新しい．
* **実用性**: ユーザーが「30秒待つから，最高傑作を出してくれ」と頼めるようになる未来が見える．現状のガチャを，計算機が自動でやってくれているとも解釈できる．
* **今後の課題**: Verifierの質が全てを握っている．人間の好みを完全に反映するVerifierができれば，このアプローチは最強になるはず．

---

#### 参考文献
* [Ma+, 2025] Ma, N., et al. "Inference-Time Scaling for Diffusion Models beyond Scaling Denoising Steps". arXiv preprint arXiv:2501.09732, 2025.
* [Ma+, 2024] Ma, N., et al. "SiT: Exploring Flow and Diffusion-based Generative Models with Scalable Interpolant Transformers". arXiv preprint arXiv:2401.08740, 2024.