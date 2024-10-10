/** @type {import('next').NextConfig} */
import MillionLint from "@million/lint";

const nextConfig = {};

export default MillionLint.next({ rsc: true })(nextConfig);
