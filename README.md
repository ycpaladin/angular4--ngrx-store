# Angular4 与 @ngrx/store v4.0集成示例

首先，这个工程是通过angular-cli命令建立出来的，版本是1.2.1。 然后参照@ngrx给出的[代码示例](https://github.com/ngrx/example-app)将@ngrx/store、@ngrx\effects、@ngrx/router-store升级到4.0 (原来的是2.0)。

相对于示例代码，除了目录结构稍有变动之外，基本上90%的代码是照搬。另外还踩到一个坑，解决办法是移除@ngrx/core模块。

2.0升级4.0会有一部分API发生变动，[参照](https://github.com/ngrx/platform/blob/master/MIGRATION.md)。

# Update

[2018-05-24] 项目已经升级到Angular6, @ngrx/store 升级到6.0

## 运行
```bash
npm install 

npm run start
```
访问 http://localhost:4201
