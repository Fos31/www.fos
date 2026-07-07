// Allow importing image assets in TypeScript files
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg' {
  import * as React from 'react';
  const src: string;
  export default src;
}
declare module '*.webp';
