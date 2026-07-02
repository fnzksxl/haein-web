import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  build: {
    target: "es2015"
  },
  esbuild: {
    target: "es2015"
  }
};
