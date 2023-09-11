/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["media.rawg.io", "b.thumbs.redditmedia.com", "a.thumbs.redditmedia.com"],
        formats: ["image/webp"],
    },
}

module.exports = nextConfig
