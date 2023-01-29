# SOLID
> npm i  
> npm run start 

SOLID五种设计原则详解:
- [提升前端代码质量之SOLID设计原则-SRP单一职责](https://juejin.cn/editor/drafts/7186226526017290297) 
- [提升前端代码质量之SOLID设计原则-OCP开放封闭原则](https://juejin.cn/editor/drafts/7186226526017290297) 
- [提升前端代码质量之SOLID设计原则-LSP里氏替换原则](https://juejin.cn/editor/drafts/7186226526017290297) 
- [提升前端代码质量之SOLID设计原则-ISP接口隔离原则](https://juejin.cn/editor/drafts/7186226526017290297) 
- [提升前端代码质量之SOLID设计原则-DIP依赖倒置原则](https://juejin.cn/editor/drafts/7186226526017290297) 

```
目录结构
├─ src
│  ├─ index.html
│  ├─ index.js
│  ├─ page
│  │  ├─ App.tsx
│  │  ├─ DIP
│  │  │  ├─ index.tsx
│  │  │  ├─ LoginFormBad.tsx
│  │  │  ├─ LoginFormGood.tsx
│  │  │  └─ modeSdk
│  │  │     ├─ comment.ts
│  │  │     ├─ index.ts
│  │  │     ├─ mode.ts
│  │  │     └─ share.ts
│  │  ├─ ISP
│  │  │  ├─ Image.tsx
│  │  │  ├─ index.tsx
│  │  │  └─ Product.tsx
│  │  ├─ LSP
│  │  │  ├─ CustomInput.tsx
│  │  │  ├─ index.tsx
│  │  │  └─ retransmission.ts
│  │  ├─ OCP
│  │  │  ├─ BadButton.tsx
│  │  │  ├─ GoodButton.tsx
│  │  │  ├─ index.tsx
│  │  │  ├─ utils
│  │  │  │  └─ formValidate.ts
│  │  │  └─ Validate.tsx
│  │  └─ SRP
│  │     ├─ Bad.tsx
│  │     ├─ Filter.tsx
│  │     ├─ Good.tsx
│  │     ├─ hooks
│  │     │  ├─ useFilter.ts
│  │     │  └─ useProduct.ts
│  │     ├─ index.tsx
│  │     ├─ mock.js
│  │     └─ ShowProduct.tsx
│  └─ typing
│     └─ index.ts
├─ tsconfig.json
├─ package-lock.json
├─ package.json
├─ README.md
└─ webpack.config.js

```