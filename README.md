# services-edu

For people to hack around with using services in K12 schools (eg, images, videos, text messages).

- image search example [code](https://github.com/kevinrobinson/image-search-experiment) [demo](https://image-search-experiment.herokuapp.com)
- video search example [code](https://github.com/kevinrobinson/youtube-classifier-experiment) [demo](https://youtube-classifier-experiment.herokuapp.com/)


## Getting started using services-edu
You need an `X-Services-Edu-API-Key` to use this service, and then it will take care of the API keys for other services.

To get one, talk with your teacher.  Once you have an API Key, you have to send it as a header with each `fetch` request.  Here's an example:
```
const url = `https://services-edu.herokuapp.com/youtube/search?q=dogs`;
const headers = {'X-Services-Edu-Api-Key': 'abcdef'};
fetch(url, {headers})
  .then(response => response.json())
  .then(json => console.log('done!', json))
  .catch(error => console.log('error!', error));
```

## Documentation for services
### Sending text messages
This sends a text message to a whitelisted set of numbers.

endpoint:
`POST /texts/send`

params:
```
to: SMS number to send to (eg, +1555123456)
message: text to send
```

full example:
```
const url = `https://services-edu.herokuapp.com/texts/send`;
const body = {
  to: '+15551234567',
  message: 'hello!'
};
const headers = {'X-Services-Edu-Api-Key': 'abcdef'};
fetch(url, {headers, body, method: 'POST'})
  .then(response => response.json())
  .then(json => console.log('done!', json))
  .catch(error => console.log('error!', error));
```

example response:
```
{"sent":true}
```

### Images search
This searches a limited subset of domains for images.

endpoint:
`GET /images/search`

params:
```
q: text of what to search for
```

example:
`/images/search?q=cats`


full example:
```
const url = `https://services-edu.herokuapp.com/images/search?q=cats`;
const headers = {'X-Services-Edu-Api-Key': 'abcdef'};
fetch(url, {headers})
  .then(response => response.json())
  .then(json => console.log('done!', json))
  .catch(error => console.log('error!', error));
```

example response:
```
{
  "items": [{
   "kind": "customsearch#result",
   "title": "Which are smarter, cats or dogs? We asked a scientist | PBS NewsHour",
   "htmlTitle": "Which are smarter, cats or \u003cb\u003edogs\u003c/b\u003e? We asked a scientist | PBS NewsHour",
   "link": "https://d3i6fh83elv35t.cloudfront.net/static/2018/04/cats-and-dogs_AdobeStock_84016419-1024x681.jpeg",
   "displayLink": "www.pbs.org",
   "snippet": "Which are smarter, cats or dogs? We asked a scientist | PBS NewsHour",
   "htmlSnippet": "Which are smarter, cats or \u003cb\u003edogs\u003c/b\u003e? We asked a scientist | PBS NewsHour",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://www.pbs.org/newshour/science/which-are-smarter-cats-or-dogs-we-asked-a-scientist",
    "height": 681,
    "width": 1024,
    "byteSize": 131542,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOA6l7gN43nUQ2wioJ_2Xbc7KWzYLJu7HyZD85tz90dQVPrL36Ajg8vYg",
    "thumbnailHeight": 100,
    "thumbnailWidth": 150
   }
  }, {
   "kind": "customsearch#result",
   "title": "A dog's color could impact life expectancy",
   "htmlTitle": "A \u003cb\u003edog&#39;s\u003c/b\u003e color could impact life expectancy",
   "link": "https://thenypost.files.wordpress.com/2018/10/102318-dogs-color-determine-disesases-life.jpg?quality=90&strip=all&w=618&h=410&crop=1",
   "displayLink": "nypost.com",
   "snippet": "A dog's color could impact life expectancy",
   "htmlSnippet": "A \u003cb\u003edog&#39;s\u003c/b\u003e color could impact life expectancy",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://nypost.com/2018/10/23/a-dogs-color-could-impact-how-long-they-live/",
    "height": 410,
    "width": 618,
    "byteSize": 71072,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQnxBVGWTBljl1R70aIElegAjoJQqkX0sbAmeL9zXjGn2NXls3iIFGTEo",
    "thumbnailHeight": 90,
    "thumbnailWidth": 136
   }
  }, ...],
  "nextPage": [
   {
    "title": "Google Custom Search - dogs",
    "totalResults": "8210000000",
    "searchTerms": "dogs",
    "count": 10,
    "startIndex": 11,
    "inputEncoding": "utf8",
    "outputEncoding": "utf8",
    "safe": "high",
    "cx": "013629899879878753259:x2czbw1hz-e",
    "searchType": "image"
   }
  ]
 },
 "searchInformation": {
  "searchTime": 0.310642,
  "formattedSearchTime": "0.31",
  "totalResults": "8210000000",
  "formattedTotalResults": "8,210,000,000"
 },
 ...
}
```


### YouTube search
This searches the YouTube API.

endpoint:
`GET /youtube/search`

params:
```
q: text of what to search for
```

example:
`/youtube/search?q=cats`

full example:
```
const url = `https://services-edu.herokuapp.com/youtube/search?q=cats`;
const headers = {'X-Services-Edu-Api-Key': 'abcdef'};
fetch(url, {headers})
  .then(response => response.json())
  .then(json => console.log('done!', json))
  .catch(error => console.log('error!', error));
```

example response:
```
{
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/dkVsFonSTHSsVgcan59qRr-UCko\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "NwlwJjelgzs"
      },
      "snippet": {
        "publishedAt": "2018-03-30T11:30:00.000Z",
        "channelId": "UCKy3MG7_If9KlVuvw3rPMfw",
        "title": "Get ready for LAUGHING SUPER HARD - Best FUNNY DOG videos",
        "description": "Dogs and puppies are super funny and hilarious, they make us laugh all the time! The hardest TRY NOT TO LAUGH challenge in the World! Just look how all ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/NwlwJjelgzs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/NwlwJjelgzs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/NwlwJjelgzs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Tiger Productions",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/-HKwERN1Sudb4KGwpxvK76iZ9GE\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "aEzZLXBH3rU"
      },
      "snippet": {
        "publishedAt": "2017-07-08T17:22:26.000Z",
        "channelId": "UCrBYTP-sa4dtOjMWEBfR_Ng",
        "title": "*Try Not To Laugh Challenge* Funny Dogs Compilation - Funniest Dog Videos 2017",
        "description": "\"IMPOSSIBLE CHALLENGE\" Try not to laugh while watching Funny Dog Videos Compilation 2017, The best and funniest dogs videos ever Hope you enjoy ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/aEzZLXBH3rU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/aEzZLXBH3rU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/aEzZLXBH3rU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "All Of Vines",
        "liveBroadcastContent": "none"
      }
    },
    ...
  ],
  "kind": "youtube#searchListResponse",
  "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/PKWHZHhdWfJcRY74jnbngS7KD9A\"",
  "nextPageToken": "CAUQAA",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 5
  }
}
```

## Developing locally
To start the app, you'll need to config for the various services, and start in development mode to disable SSL:

```
NODE_ENV=development \
CORS_ALLOW_ORIGIN='*' \
SERVICES_EDU_CONFIG_JSON='{"api_keys":["xyz"]}' \
YOUTUBE_CONFIG_JSON='{"api_key":"xyz"}' \
IMAGES_SEARCH_CONFIG_JSON='{"cx":"xyz","api_key":"xyz"}' \
yarn start
```
