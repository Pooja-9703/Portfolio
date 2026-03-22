/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Pooja_Dheeraj_Sindhu_Resume.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
