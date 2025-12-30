# Deployment Guide 🚀

## 1. Push Code to GitHub
First, you need to push your local changes to a GitHub repository.
```bash
git add .
git commit -m "Ready for deploy"
git push origin main
```

## 2. Deploy Backend (Render)
1.  Go to [Render Dashboard](https://dashboard.render.com).
2.  Click **New +** -> **Web Service**.
3.  Connect your GitHub repo.
4.  **Settings**:
    *   **Root Directory**: `backend`
    *   **Build Command**: `npm install`
    *   **Start Command**: `node server.js`
5.  **Environment Variables**:
    *   `MONGO_URI`: (Your full MongoDB Atlas connection string)
6.  Click **Deploy**.
7.  **Copy your Backend URL** (e.g., `https://my-food-api.onrender.com`).

## 3. Deploy Frontend (Vercel)
1.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **Add New** -> **Project**.
3.  Import the same GitHub repo.
4.  **Framework Preset**: Vite.
5.  **Root Directory**: `.` (default).
6.  **Environment Variables** (Add these in "Environment" tab):
    *   **Key**: `VITE_API_URL`
        **Value**: `https://your-backend-url.onrender.com` (Paste your actual Render URL here)
    *   **Key**: `VITE_CLERK_PUBLISHABLE_KEY`
        **Value**: `pk_test_bm90ZWQtc3BhcnJvdy01Ny5jbGVyay5hY2NvdW50cy5kZXYk`
7.  Click **Deploy**.

## 4. Final Check
Once Vercel finishes, open your new website URL.
*   **Check API**: Does the Menu load? (If not, check network tab for CORS or API URL issues).
*   **Check Auth**: Does Login work? (You might need to add your Vercel domain to Clerk "Allowed Origins" in Clerk Dashboard).

**Enjoy your live app!** 🍔
