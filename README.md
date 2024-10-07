# 🌟 YC_Poster：YC 项目爬取、数据清理与海报可视化生成

## 项目简介

本项目的目标是自动化获取 YC S24 批次的项目信息，并对其进行数据清理与信息抽取，最终以海报形式展示相关项目内容。

使用爬虫技术获取 YC 网站上的项目信息，并利用大语言模型对数据进行清理和抽取关键信息。

最后，借助 HTML 渲染和 Puppeteer 截图技术，将这些信息以视觉化的方式呈现。

## **基于该项目的一些分析**

### YC S24 AI 相关项目完整信息（表格）：

https://agentuniverse.feishu.cn/wiki/HosvwLWT9ifN7lkidDAcHjxqnsf?from=from_copylink

### YC S24 AI 项目图谱

总图谱：

每个项目：

### 教程文章请查看：

欢迎关注我们--微信公众号：特工宇宙

[名片]

## 📁 项目结构

```csharp
.
├── Chrome                  # 存放爬取过程中的缓存数据
├── demo.ipynb              # 核心功能展示的 Jupyter Notebook
├── LICENSE                 # 项目开源协议
├── markdown-img            # Markdown 文件所需的图片资源
├── package.json            # 项目依赖的配置文件
├── poster_html             # 海报 HTML 版本存放
├── README.md               # 项目说明文档
├── screenshot.js           # Puppeteer 截图脚本
└── YC 项目.md              # 项目的详细教程文档
```

## 🔧 功能概述

1. **项目列表爬取** ：通过自动化工具爬取 YC 网站上的所有 S24 项目信息
2. **数据清理与抽取** ：利用 LLM 模型对每个项目的详细信息进行处理，提取出项目的背景、问题和解决方案等关键信息。
3. **可视化海报生成** ：使用 HTML 模板和 Puppeteer 对项目信息进行批量渲染，并自动生成海报图片。

## 🚀 安装与运行

### 1️⃣ 克隆项目

```bash
git clone https://github.com/yourname/YC.git
cd YC
```

### 2️⃣ 安装依赖

#### 🐍 Python 环境创建以及依赖安装

```bash
# 创建环境，推荐使用 conda
conda create -n yc_poster python=3.8

# 激活环境
conda activate yc_poster

# 安装依赖
pip install -r requirements.txt
```

#### 🛠️ Node js 依赖安装

```bash
# 安装 node js 和 npm 之后
npm install

# 项目只依赖 puppeteer，直接 npm install puppeteer 也可以
```

### 🖥️ 项目 Demo

YC 项目列表的爬取、详细项目的爬取、LLM 信息抽取、生成 html 版海报均在 [demo.ipynb](demo.ipynb) 中，目前仅展示核心逻辑和基础代码。详细教程请查看 [YC 项目.md](YC 项目.md)

#### 海报生成

html 版海报生成后，可运行如下代码，获得图片。

```bash
node screenshot.js
```

## 📜 许可证

本项目基于 MIT 许可证开源，详细信息请参见 LICENSE 文件。

## 📞 联系作者

微信：jamiu99

欢迎关注微信公众号：特工宇宙
