import { AuthContextProvider } from "@/components/src/store/auth-context";
import { BatchContextProvider } from "@/components/src/store/batch-context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <BatchContextProvider>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </BatchContextProvider>
  );
}
