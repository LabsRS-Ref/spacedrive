// VCPKG_MANIFEST_DIR=G:\_sdks\vcpkg_cargo
// VCPKG_MANIFEST_MODE=ON
// VCPKG_MANIFEST_INSTALL=ON
// VCPKG_VERBOSE=1
// VCPKG_ROOT=G:\_sdks\vcpkg
// PATH=%VCPKG_ROOT%;%PATH%
// VCPKG_TARGET_TRIPLET=x64-windows
// VCPKG_TARGET_ARCH=x64
// VCPKG_CARGO_ROOT=G:\_sdks\vcpkg_cargo\vcpkg_installed
// FFMPEG_DIR=%VCPKG_CARGO_ROOT%\%VCPKG_TARGET_TRIPLET%
// LIBCLANG_PATH=%VCPKG_CARGO_ROOT%\%VCPKG_TARGET_TRIPLET%\bin

const PATH = process.env.PATH;
const VCPKG_ROOT = "G:\\_sdks\\vcpkg";
const VCPKG_TARGET_TRIPLET="x64-windows";
const VCPKG_CARGO_ROOT = "G:\\_sdks\\vcpkg_cargo\\vcpkg_installed";


process.env["VCPKG_MANIFEST_DIR"] = "G:\\_sdks\\vcpkg_cargo";
process.env["VCPKG_MANIFEST_MODE"] = "ON";
process.env["VCPKG_MANIFEST_INSTALL"] = "ON";
process.env["VCPKG_VERBOSE"] = "1";
process.env["VCPKG_ROOT"] = VCPKG_ROOT;
process.env["VCPKG_TARGET_TRIPLET"] = VCPKG_TARGET_TRIPLET;
process.env["VCPKG_TARGET_ARCH"] = "x64";
process.env["VCPKG_CARGO_ROOT"] = VCPKG_CARGO_ROOT;
process.env["FFMPEG_DIR"] = `${VCPKG_CARGO_ROOT}\\${VCPKG_TARGET_TRIPLET}`;
process.env["LIBCLANG_PATH"] = `${VCPKG_CARGO_ROOT}\\${VCPKG_TARGET_TRIPLET}\\bin`;
process.env["PATH"] = `${VCPKG_ROOT};${PATH}`;

module.exports = {
   'development': process.env,
   'production': process.env
}