import { defineConfig,loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     VueSetupExtend(),
//     // elementPlus按需导入
//     AutoImport({
//       resolvers: [ElementPlusResolver()],
//     }),
//     Components({
//       resolvers: [ElementPlusResolver()],
//     }),
//   ],
//   // 设置路径别名
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   // 设置代理
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:5666",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
// });
export default defineConfig(({ mode }) => {
  // 加载 .env 文件的内容
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      VueSetupExtend(),
      // ElementPlus 按需导入
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    // 设置路径别名
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // 设置代理
    server: {
      proxy: {
        "/api": {
          target: env.VITE_PROXY_URL, // 从 .env 文件中读取 VITE_PROXY_URL
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});