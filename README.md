### React TS Rust WASM Parcel Boilerplate

React starter with parcel bundler 📦

#### What's inside?

- React
- Typescript
- Rust & WASM

#### Bootstrap

Install Rust
`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`

Install dependencies
`yarn install`

🦀 🕸 Start application 🕸 🦀
`yarn start`

#### ⚠️ Cargo.toml type error

Due to issue here https://github.com/wasm-tool/parcel-plugin-wasm.rs/issues/26 you'll probably need to run
`yarn link:Cargo` for once
