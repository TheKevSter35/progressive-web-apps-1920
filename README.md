

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

## Collection Records

<img width="" alt="ff2a41c292e3dfe84f668fa67db401f8" src="https://user-images.githubusercontent.com/43183768/76684882-c098bf80-660f-11ea-9b34-f6d7a9c46e7d.png">

## .env
``
API_KEY= (GIPHY API KEY)
``

## Design patterns
* Single tab
* No var

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

### Backlog
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
- [ ] Add icons to the Manifest 
- [ ] Bug: when go to detail it (Terminal) cannot read gif but it still loads the gif 
- [ ] Add the sharelink button in detail page
- [ ] make server.js moduler (optional)
- [ ] Make css moduler (maybe sass) (optional)


### wishlist
- [ ] Add download button to download the gif on your device
- [ ] Home page random gifs load (only service worker will not really work if the homepage is always different)

### For the teachers 

1.  when go to detail it (Terminal) cannot read gif but it still loads the gif. i dont know how to fix that or should i just leave it like that.
<img width="" alt="a7fd4564c0e0ceccc67726770715ce14" src="https://user-images.githubusercontent.com/43183768/77153725-937a6000-6a9a-11ea-9c35-b29b2822df94.png">

2. in offline mode the index page shows the (no-image found icon) is there a way to hide it? like facebook that you only can see a gray background.
3. Look at the linear gradient / animations if you hover a gif on the home page. (maybe show it to @vasilisvg)

