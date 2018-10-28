# Front End Developer Course
---
#### _Restaurant Reviews Project_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, I have converted a static webpage to a mobile-ready web application. I took a static design that lacked accessibility and converted the design to be responsive on different sized displays and accessible for screen reader use. I also added a service worker to begin the process of creating a seamless offline experience for users.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). If you clone the project, please replace my token with a your own token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

## Resources accessed to get this done

### [Mozilla serviceWorker Cookbook](https://serviceworke.rs/strategy-network-or-cache_service-worker_doc.html)
Referenced Mozilla's serviceWorker Cookbook, using Network or Cache technique.

### [Mathew Cranford Service Worker Walkthrough](https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-4-service-workers/)
The Network or Cache technique doesn't fully work for this project so parts of the service worker also come from Mathew Cranford's serviceWorker walkthrough, specifically the part about having to clone the response to use it twice.

### [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/)

### [CanIUse: Viewport Units](https://caniuse.com/#feat=viewport-units)
Referenced CanIUse: Viewport Units to make sure I could use VH (viewport height). Viewport units are available to approximately 90% of users globally so I included a fallback height in PX.

### Stack Overflow
[What is the HTML tabindex attribute?](https://stackoverflow.com/questions/4112289/what-is-the-html-tabindex-attribute)

### WAI-ARIA [Collapsible Dropdown Listbox Example](https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html)

### WAI-ARIA [Breadcrumb Example](https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html)

### [Changing a remote's URL](https://help.github.com/articles/changing-a-remote-s-url/)
Needed to change the remote URL to push this to GitHub.

## Contributing
This is a project for my class so I will probably not be accepting contributions.

## How to run this project
### Fork it!
To run the project, fork it on [Github](https://github.com/anthonyCarton/mws-restaurant-stage-1).

### Pull it!
Once you've forked the project, pull it.
```
git pull https://github.com/{your github profile}/mws-restaurant-stage-1.git
```

### CD into it!
Now that you've pulled it down to your computer, change directories (CD) into the directory.
```
cd mws-restaurant-state-1
```

### Spin up that simple HTTP server!
Inside of the project directory, you'll need to start a simple HTTP server. There are a lot of ways to do this, but I used Python's SimpleHTTPServer. Begin by making sure you have Python installed, you probably do, and checking which version of Python you are using.

In a terminal, check the version of Python you have:
```
python -V
```

If you have Python 2.x, spin up the server with:
```
python -m SimpleHTTPServer 8000
```

For Python 3.x, you can use:
```
python3 -m http.server 8000
```

Note: You can specify another port (the 8000), if port 8000 is already in use.
If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

### Open it!
In your favorite browser (Netscape! j/k) navigate to localhost:8000
