/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["media.rawg.io", "b.thumbs.redditmedia.com", "a.thumbs.redditmedia.com", "img.itch.zone"],
        formats: ["image/webp"],
    },
}

module.exports = nextConfig
