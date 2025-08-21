//ts-ignore
const withLitSSR = require("@lit-labs/nextjs")();

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withLitSSR(nextConfig);
