

## Discover Gifs

![b6e2407e4e0b1ac9c1dda79ac995a36e](https://user-images.githubusercontent.com/43183768/76777754-fb822b00-67a8-11ea-8205-f947d6ab9bb5.jpg)


With Discover Gifs api you can search gifs. Basis of keywords it will search any gif and generates a list with that keyword. 

* A range of gifs to discover
* Get information about the gif
* share gifs (not working now)

## Functions / what is implemented 
* Search function 
* service worker
* Share link 


## Which API is used and what are the limitations? 

Giphy:  https://developers.giphy.com/

### Limits:
* Rate limit: unknown

## .env
``
API_KEY= (GIPHY API KEY)
``

## Install 

```
# Clone repository
git clone https://github.com/YOUR-USERNAME/performance-web-apps-1920.git

cd performance-web-apps-1920

# Install dependencies
npm install

# Start liveserver
npm run dev
```


## Dependencies 

```
"body-parser": "^1.19.0",
"dotenv": "^8.2.0",
"ejs": "^3.0.1",
"express": "^4.17.1",
"heroku": "^7.39.0",
"ncp": "^2.0.0",
"node-fetch": "^2.6.0"
```

## Optimisations

### minifying

I minified CSS using [Clean css](https://www.npmjs.com/package/gulp-clean-css)

For JS i used the webtool [minifier](https://www.minifier.org/) from 533b to 403b.

### Compression

I used [compression](https://www.npmjs.com/package/compression) to compress files in to GZIP (HTML and CSS).

before compression 

<img width="" alt="a3e521fad9df4ad0247e463732b245a5" src="https://user-images.githubusercontent.com/43183768/78366247-855f3000-75c0-11ea-972e-a812d94cd137.png">

after compression 

<img width="" alt="0c5415aac046d281e5af98a574dae645" src="https://user-images.githubusercontent.com/43183768/78366596-fef71e00-75c0-11ea-9516-74acaa257aaa.png">


## Performance enhancements
I used different techniques to make the website perform even on slow connections. The project dont have much code but there in the 5 categories for lighthouse (Google Audit). 

### Before applying enhancements
<img width="" alt="audit-before" src="https://user-images.githubusercontent.com/43183768/77440729-ed578e80-6de8-11ea-82ce-cc50ddb0d1cb.png">

### After applying enhancement
<img width="" alt="audit-after" src="https://user-images.githubusercontent.com/43183768/77443123-25f86780-6deb-11ea-9971-c6da395587cd.png">

What a difference! but how did i fix it.

### 1. Performance

Performance was slow because it fetch high quality gifs. So i change the from original size to preview size to make the loadtime fast. Also to Minifying the css file to make it as small as possilbe (i used gulp-clean-css) 

<img width="" alt="audit-after-performance" src="https://user-images.githubusercontent.com/43183768/77443460-5e984100-6deb-11ea-831d-e54082a77c80.png">

### 2. Accessibility

For Accessibility i missed some parts in my HTML. For Example ` Alt="" ` to the img tag (Gifs) and ` <label> ` was missing in the form

<img width="" alt="audit-after-access" src="https://user-images.githubusercontent.com/43183768/77444363-01e95600-6dec-11ea-8122-6e1fc03a6966.png">

### 3. Best Practices

Best Practices didn't change much. for HTTP/2 Heroku doesn't support it yet. for the images every images the app fetch has a different size with css i changes it to make them the same size for better design.

<img width="" alt="audit-after-best-practices" src="https://user-images.githubusercontent.com/43183768/77446868-40344480-6def-11ea-8929-600aaaf2f35e.png">

### 4. SEO

For SEO. i added the manifest file and robots.txt

<img width="" alt="audit-after-best-seo" src="https://user-images.githubusercontent.com/43183768/77447068-8be6ee00-6def-11ea-950b-8db493e795e9.png">

### Progressive web app (2 Medals)
<img width="" alt="audit-after-best-pwa" src="https://user-images.githubusercontent.com/43183768/77447642-3101c680-6df0-11ea-8fc4-d9b2fcd08dbc.png">

### 5. Service Worker
https://github.com/TheKevSter35/progressive-web-apps-1920/wiki/Service-worker



![32a5c07d41a7534836c16bb0dfa238ce](https://user-images.githubusercontent.com/43183768/78029904-9827f980-7361-11ea-8fd1-cc6f24df21eb.gif)





#### Backlog
- [x] Render a page with express
- [x] Use ejs engine
- [x] Set static path (for example icons)
- [x] Transfer overview page from WAFS
- [x] Search function
- [x] render Detail page if select a gif on overview/searchpage
- [x] Add css to make it look good
- [x] Add Manifest 
- [x] add service worker
- [x] Deploy app to heroku (Thx @decrek)
- [x] Make the site responsive
- [x] Add icons to the Manifest 
- [ ] Bug: when go to detail it (Terminal) cannot read gif but it still loads the gif 
- [x] Add the sharelink button in detail page
- [ ] make server.js moduler (optional)
- [x] Make css moduler (maybe sass) 
- [x] Add placeholder for gif if the connection is slow the user will see the placeholder so user can is it is loading.


#### wishlist
- [ ] Add download button to download the gif on your device
- [ ] Home page random gifs load (only service worker will not really work if the homepage is always different)



### Source
- Declan Rek his code for the service worker
- [service worker] (https://developers.google.com/web/fundamentals/primers/service-workers)
