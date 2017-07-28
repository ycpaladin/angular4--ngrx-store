# Angular4 与 @ngrx系列集成示例

首先，这个工程是通过angular-cli命令建立出来的，版本是1.2.1。 然后参照@ngrx给出的代码示例（https://github.com/ngrx/example-app）将@ngrx/store、@ngrx\effects、@ngrx/router-store升级到4.0 (原来的是2.0)

相对于示例代码，除了目录结构稍有变动之外，基本上90%的代码是照搬。另外还踩到一个坑。解决办法是移除@ngrx/core模块。



#
运行：
npm install 
npm run start
