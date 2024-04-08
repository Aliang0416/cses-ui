# 关于CSES-UI
CSES组件库。

## 框架基础：
+ nodejs：`20.11.1`
+ 包管理器：pnpm `8.15.5`
+ 脚手架： nx `18.2.1`
+ 工作区： @nx/workspace `18.2.1` 搭建monorepo
+ angular 16
+ 文档生成器：storybook@7

# 安装
```bash
nvm install 20.11.1
nvm use 20.11.1
npm install -g pnpm@8.15.5
pnpm install
git update-index --assume-unchanged ui/src/documentation.json  ## 忽略compoDoc自动生成的JSON文件
```

# 运行

## 本地组件测试
```
pnpm play
```

## 文档预览：
```
pnpm doc:serve
```

## Error
如果出现运行失败异常：
```
 NX   Failed to create dependencies. See above for errors
```
或者storybook无法运行等问题，先尝试解决方案：
**删除根目录下 `.nx` 和 `.angular` 文件夹**，然后重新运行:
```
pnpm fix:nx
```

## 打包 & 发版

## 打包组件库
```
pnpm ui:build
```

## 发布组件库
```
pnpm ui:publish
```

## 取消发版
```
pnpm ui:unpublish
```

## 文档库打包
```
pnpm doc:build
```

