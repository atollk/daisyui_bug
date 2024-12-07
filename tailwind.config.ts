import type { Config } from "tailwindcss"

const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {},
    },
    darkMode: "media",
} satisfies Config

export default config
