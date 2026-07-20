# Quick Reference Guide — Running the App on Your iPhone

You need a local web server running on this machine. Your phone and PC must be on the **same Wi-Fi network**.

---

## Step 1 — Find your PC's local IP address

Open PowerShell and run:

```
ipconfig
```

Look for **IPv4 Address** under your Wi-Fi adapter. It will look something like:

```
192.168.1.151
```

---

## Step 2 — Start a local web server

Open a PowerShell terminal, navigate to the app folder, then start the server:

```
cd "C:\Users\julia\.vscode\.src\Gym_App"
py -m http.server 8080
```

You should see:

```
Serving HTTP on 0.0.0.0 port 8080 ...
```

Leave this terminal open while you're testing. Press `Ctrl+C` to stop it when done.

---

## Step 3 — Open the app on your iPhone

1. Open **Safari** on your iPhone
2. Type this into the address bar (using your IP from Step 1):

```
http://192.168.1.151:8080
```

3. The app home screen should load

---

## Step 4 — Install as PWA (Add to Home Screen)

To get the full-screen app experience without the Safari browser bar:

1. Tap the **Share** button (the box with an arrow) at the bottom of Safari
2. Scroll down and tap **Add to Home Screen**
3. Give it a name and tap **Add**

It will appear on your home screen like a regular app.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Safari can't connect | Check both devices are on the same Wi-Fi network |
| "python" not found | Try `python3 -m http.server 8080` or `py -m http.server 8080` instead |
| Page loads but app is blank | Open Safari developer tools and check the console for errors |
| IP address changed | Run `ipconfig` again — your router may assign a new IP after a restart |
| Opened page on iPhone but got a 404 style error. Likely the webb server was not started in the Gym_App folder |

---

## Alternative — VS Code Live Server extension

If you have the **Live Server** extension installed in VS Code:

1. Right-click `index.html` in the Explorer panel
2. Select **Open with Live Server**
3. It will open in your browser and show a port number (usually `5500`)
4. On your iPhone use `http://[your-ip]:5500`
