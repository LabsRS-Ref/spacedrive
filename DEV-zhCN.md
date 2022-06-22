# 二次开发说明

## NODE 依赖说明

## Windows 开发

- 安装 [VCPKG](https://vcpkg.org/), 并设置环境VCPKG_ROOT 环境变量
- 设置环境变量：

  ``` ps1
  $Env:VCPKG_DEFAULT_BINARY_CACHE = "G:\_sdks\vcpkg-binary-cache"
  $Env:VCPKG_ROOT = "G:\_sdks\vcpkg"
  $Env:PATH = "$Env:VCPKG_ROOT;$Env:PATH"
  ```

  或

  ``` cmd
  set VCPKG_DEFAULT_BINARY_CACHE=G:\_sdks\vcpkg-binary-cache
  set VCPKG_ROOT=G:\_sdks\vcpkg
  set PATH=%VCPKG_ROOT%;%PATH%
  ```

  > 可以查找相应的包，如：

    ``` cmd
    vcpkg search llvm

    # 查看llvm 都有哪些历史版本，可以确定 builtin-baseline 的版本号
    vcpkg x-history llvm
    ```

- 根据 `env > windows` 目录中的vcpkg.json文件，复制存放到 `G:\_sdks\vcpkg_cargo` 目录.参照：<https://github.com/microsoft/vcpkg/blob/master/docs/users/manifests.md#cmake-integration>

  ``` json5
  // ~/vcpkg.json
  {
    "$schema": "https://raw.githubusercontent.com/microsoft/vcpkg/master/scripts/vcpkg.schema.json",
    "name": "spacedrive-vcpkg-deps",
    "version": "0.0.1",
    "dependencies": [ "ffmpeg", "llvm" ], // 安装依赖
    "builtin-baseline":"9f074ffa17fae7db02aafc15b6fc63cf2d747e18", // 可以通过 vcpkg x-history 命令查找。 例如：vcpkg x-history llvm
    "overrides": [
      { "name": "llvm", "version": "13.0.0#5" }
    ]
  }
  ```

- （可选）从Windows菜单中，启动 `x86_x64 Cross Tools Command Prompt for VS 2017` 终端程序
- (必备) 打开终端Shell（选用可选的VS终端程序或者默认的CMD，Powershell都可以），执行以下命令

  ``` cmd
  cd G:\_sdks\vcpkg_cargo

  // 设置二进制缓存目录
  set VCPKG_DEFAULT_BINARY_CACHE=G:\_sdks\vcpkg-binary-cache

  // `vcpkg install --triplet=x64-windows` 安装依赖
  vcpkg install --triplet=x64-windows
  ```

- 在新的终端程序中(`CMD`或者`Powershell`)，执行如下环境变量设置

  ``` cmd
  ##############################################################################
  # VCPKG 环境变量设置

  set VCPKG_MANIFEST_DIR=G:\_sdks\vcpkg_cargo
  set VCPKG_MANIFEST_MODE=ON
  set VCPKG_MANIFEST_INSTALL=ON
  set VCPKG_VERBOSE=1
  set VCPKG_ROOT=G:\_sdks\vcpkg
  set PATH=%VCPKG_ROOT%;%PATH%


  # 终端集成
  set VCPKG_TARGET_TRIPLET=x64-windows
  set VCPKG_TARGET_ARCH=x64
  set VCPKG_CARGO_ROOT=G:\_sdks\vcpkg_cargo\vcpkg_installed
  vcpkg list --x-install-root=%VCPKG_CARGO_ROOT%
  vcpkg integrate install --x-install-root=%VCPKG_CARGO_ROOT%

  # 设置依赖包的环境变量
  set FFMPEG_DIR=%VCPKG_CARGO_ROOT%\%VCPKG_TARGET_TRIPLET%
  set LIBCLANG_PATH=%VCPKG_CARGO_ROOT%\%VCPKG_TARGET_TRIPLET%\bin

  # 定位到本项目的`apps\desktop\src-tauri` 目录。 eg. D:\workspace\techidaily\tauri-projects\spacedrive\apps\desktop\src-tauri
  # 执行构建命令
  cargo build -vv
  ```

## macOS 开发
