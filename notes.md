To add Other project tiles steps are:

* take screenshot of the page and save into branch `main` in `/src/assets/pictures/<project_name>.png
* push update to remote `main` branch
* Into `Work.jsx` add another component passing props accordingly
    - picture will take the name and automatically refecence the remove main picture directory as source
        - **warn** name propr MUST match the one used in the picture name

* push update to remote `gh-page` branch

* merge `main` into `gh-pages-repo`
* run `npm run deploy` from `gh-pages-repo`

rempote branch `gh-pages` will be updated and published