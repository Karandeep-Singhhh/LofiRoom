import type { NextConfig } from "next";
import { networkInterfaces } from "os";

// Lets a phone on the same Wi-Fi load the dev server at this machine's LAN IP
// (Next blocks non-localhost origins in dev by default). Has no effect in production.
const lanAddresses = Object.values(networkInterfaces())
  .flat()
  .filter((net) => net?.family === "IPv4" && !net.internal)
  .map((net) => net!.address);

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: lanAddresses,
};

export default nextConfig;
