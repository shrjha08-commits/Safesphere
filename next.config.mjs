/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: ['sequelize', 'sequelize-typescript', 'sqlite3', 'mongoose'],
};

export default nextConfig;
