# GitHub Profile README Setup

Create a new public GitHub repository named exactly:

`Qiwei-Ma`

Then copy the files in this folder into that repository:

- `README.md`
- `.github/workflows/pacman.yml`

After pushing the repository:

1. Open the repository on GitHub.
2. Go to `Actions`.
3. Enable workflows if GitHub asks.
4. Run the workflow `generate pacman contribution graph` once manually.
5. Wait for the workflow to create the `output` branch.
6. Refresh your GitHub profile page.

Notes:

- The Pacman animation is generated from your GitHub contribution graph.
- The image URLs in `README.md` already use your username: `Qiwei-Ma`.
- If your default branch is not `main`, update `.github/workflows/pacman.yml`.
