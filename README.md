folder structure

/my-nextjs-app
├── /public                   # Folder untuk file statis (images, fonts, dll.)
│   ├── /images
│   └── /fonts
│
├── /src                      # Folder utama untuk source code aplikasi
│   ├── /components           # Komponen UI yang reusable
│   │   ├── /common           # Komponen umum seperti Button, Modal, Input
│   │   └── /layout           # Komponen layout seperti Header, Footer, Sidebar
│   │
│   ├── /features             # Fitur modular sesuai domain bisnis atau halaman spesifik
│   │   ├── /auth             # Modul otentikasi (Login, Register)
│   │   ├── /dashboard        # Modul dashboard dan komponen terkait
│   │   └── /profile          # Modul untuk halaman profil pengguna
│   │
│   ├── /hooks                # Custom React hooks untuk logika yang sering digunakan
│   │   └── useAuth.js        # Contoh custom hook (misalnya untuk otentikasi)
│   │
│   ├── /lib                  # Helper utilities atau library (fetcher, API calls, dll.)
│   │   └── api.js            # Helper untuk fetch API
│   │
│   ├── /app                # Folder khusus untuk routing di Next.js (Pages Router)
│   │   ├── /api              # API Routes untuk endpoint backend internal
│   │   ├── /auth             # Halaman otentikasi (login, register)
│   │   ├── /dashboard        # Halaman dashboard
│   │   ├── /profile          # Halaman profil
│   │   └── index.js          # Halaman utama
│   │
│   ├── /services             # Service untuk berkomunikasi dengan API (client-side)
│   │   └── /authService.js   # Service otentikasi (login, register, dll.)
│   │
│   ├── /store                # State management seperti Redux atau Zustand
│   │   └── /authSlice.js     # Contoh slice untuk otentikasi (misal jika menggunakan Redux)
│   │
│   ├── /styles               # Styles global dan modul CSS/SCSS
│   │   ├── /modules          # Modul CSS khusus untuk komponen
│   │   └── /globals.css      # File style global
│   │
│   ├── /utils                # Utility functions (format date, parsing, dll.)
│   │   └── formatDate.js     # Contoh helper untuk formatting tanggal
│   │
│   └── /middleware           # Middleware custom (misalnya untuk handling otentikasi)
│
├── /tests                    # Folder untuk testing (unit/integration testing)
│   ├── /__mocks__            # Mock data untuk testing
│   └── /components           # Unit test untuk komponen
│
├── /config                   # Konfigurasi project (dotenv, eslint, dll.)
│   ├── env.js                # Konfigurasi environment
│   └── constants.js          # Konstanta global
│
├── .eslintrc.js              # Konfigurasi ESLint
├── .prettierrc               # Konfigurasi Prettier
├── next.config.js            # Konfigurasi Next.js
├── package.json              # Dependencies dan scripts project
└── README.md                 # Dokumentasi project
