// globals.d.ts
export {};

declare global {
  interface Window {
    formState: { [key: string]: any } | null;
  }
}