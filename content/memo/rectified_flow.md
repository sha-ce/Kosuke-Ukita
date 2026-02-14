---
title: '論文読み: Flow Straight and Fast'
date: '2026-02-07'
description: '直線的な軌道を持つODEを学習することで，高速かつ高品質な生成・変換を実現するRectified Flowの解説メモ．'
---

**Flow Straight and Fast: Learning to Generate and Transfer Data with Rectified Flow**
- **Authors**: Xingchao Liu, Chengyue Gong, Qiang Liu (UT Austin)
- **Publication**: ICLR 2023
- **Links**: [arXiv](https://arxiv.org/abs/2209.03003) | [GitHub](https://github.com/gnobitab/RectifiedFlow)

---

### 1. Abstract

**Rectified Flow**は、2つの経験分布 $\pi_0$ と $\pi_1$ の間を輸送する常微分方程式 (ODE) モデルを学習するための、驚くほどシンプルで統一的なアプローチである．

これまでの生成モデル（GAN, VAE, Diffusion）やドメイン変換手法が抱えていた課題（学習の不安定さ、推論の遅さ、複雑なハイパーパラメータ）に対し、Rectified Flowは「可能な限り直線的な経路を学習する」というアイデアで解決を図る．

* **直線の利点**: 最短経路であるため、時間離散化誤差が小さく、少数のステップ（極端には1ステップ）で高精度なシミュレーションが可能．
* **Reflow**: 学習したFlowから生成されたデータを使い、再帰的に学習を行うことで、軌道をさらに直線化できる．

---

### 2. Method

#### 2.1 Rectified Flow の定式化

データ点 $X_0 \sim \pi_0$（ノイズやソース画像）と $X_1 \sim \pi_1$（データやターゲット画像）があるとする．
これらを結ぶ最も単純な経路は、線形補間である．

$$
X_t = t X_1 + (1-t) X_0, \quad t \in [0, 1]
$$

この $X_t$ の時間微分（速度場）は $\dot{X}_t = X_1 - X_0$ となる．
しかし、この速度場は未来の情報 $X_1$ に依存しており、因果的ではないため、そのままではシミュレーションできない．

Rectified Flowでは、この非因果的な速度場を、現在の位置 $X_t$ と時間 $t$ の関数 $v(X_t, t)$ として近似することで、因果的なODEモデル $dZ_t = v(Z_t, t)dt$ を構築する．

**目的関数 (Least Squares Optimization):**

$$
\min_v \int_0^1 \mathbb{E} \left[ \| (X_1 - X_0) - v(X_t, t) \|^2 \right] dt
$$

これは標準的な教師あり学習であり、GANのようなMin-Max最適化や、Diffusionのような複雑なSDEの導出を必要としない．

#### 2.2 Reflow: 再帰的な直線化

一度学習したRectified Flow $Z^1$ は、初期の線形補間よりも輸送コストが低くなるが、まだ完全な直線ではない可能性がある．
そこで、学習済みモデルから生成したペア $(Z_0^1, Z_1^1)$ を新たな「教師データ」として扱い、再度Rectified Flow $Z^2$ を学習する．この操作を **Reflow** と呼ぶ．

* **手順**: $(Z_0^k, Z_1^k) \rightarrow \text{Train } v^{k+1} \rightarrow Z^{k+1}$
* **理論的保証**: Reflowを繰り返すことで、輸送コストと軌道の曲率が単調に減少することが証明されている．
* **結果**: 数回のReflowにより、軌道はほぼ完全な直線となり、**1ステップのEuler法でも高品質な生成**が可能になる．

#### 2.3 Distillation

Reflowによって軌道が直線になった後、さらに高速化のために $(Z_0^k, Z_1^k)$ の関係を直接ニューラルネットワーク $T(z_0)$ に蒸留することも可能である．
直線性が高いため、蒸留も容易であり、最終的に **One-Step Generation** を実現できる．

---

### 3. 既存手法との関係

本論文では、既存の **Probability Flow ODE (PF-ODE)** や **DDIM** も、Rectified Flowの枠組みにおける「非線形な補間」を用いた特殊ケースであると位置づけている．

* **Rectified Flow**: $X_t = t X_1 + (1-t) X_0$ （線形補間・等速）
    * 軌道が直線的．学習が進むとさらに直線になる．
* **VP-ODE (DDPM/DDIM)**: $X_t = \alpha_t X_1 + \beta_t \epsilon$ （非線形・変速）
    * SDE由来の係数（$\alpha_t, \beta_t$）により、軌道が曲がっている．
    * 特に $t=0, 1$ 付近で速度が不均一であり、離散化誤差が大きくなりやすい．
    * **Reflowを行っても直線化できない**（初期分布のGaussian制約などに縛られるため）．

Rectified Flowは、SDEの制約を取り払い、純粋に「2つの分布をつなぐODE」として問題を再定義したことで、より自由で効率的な設計が可能になった．

---

### 4. Experiments

#### 4.1 画像生成 (CIFAR-10, High-Res)

* **品質**: 1-Rectified Flow (Reflowなし) の時点で、既存のODEベースの手法と同等以上の性能．
* **高速化**: 2-Rectified Flow (1回Reflow) は、**Euler法 1ステップ (N=1)** で FID 4.85 を達成．これは当時のOne-Step生成モデルとしてはSOTA級．
* **多様性**: GANと比較して、Recall（多様性）が高い．

#### 4.2 Image-to-Image Translation

$\pi_0$ をノイズではなく「猫の画像」、$\pi_1$ を「犬の画像」のように設定するだけで、全く同じアルゴリズムでドメイン変換が可能．
CycleGANのような双方向の学習やCycle-Consistency Lossが不要で、一方通行の学習だけで自然な変換ができる．

---

### 5. 所感・メモ

* **Flow Matchingとの関連**: 本論文の手法は、Lipman et al. (2023) の "Flow Matching for Generative Modeling" とほぼ同時期に、独立して提案されたものである（内容は非常に近い）．現在の生成AI研究における「Flow Matching」の隆盛の基礎となった重要な一本．
* **実装の容易さ**: Loss関数が単純な二乗誤差であり、実装が非常に簡単．コード数行で記述できるレベル．
* **安定性**: Min-Maxゲームがないため、学習が発散しにくい．
* **応用**: 音声合成や動画生成など、高次元データの補間が必要なタスクにおいて、Diffusion Modelからの置き換えが進んでいる．特に「推論の高速化」が求められる実応用で強力．

---

#### 参考文献
* [1] Liu, X., et al. "Flow Straight and Fast: Learning to Generate and Transfer Data with Rectified Flow". ICLR 2023.
* [2] Lipman, Y., et al. "Flow Matching for Generative Modeling". ICLR 2023.