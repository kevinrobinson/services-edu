# services-edu

For people to hack around with using services in K12 schools (eg, images, videos, texts).

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
### Images search
This searches a limited subset of domains for images.

url:
`/images/search`

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
 "kind": "customsearch#search",
 "url": {
  "type": "application/json",
  "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
 },
 "queries": {
  "request": [
   {
    "title": "Google Custom Search - dogs",
    "totalResults": "8210000000",
    "searchTerms": "dogs",
    "count": 10,
    "startIndex": 1,
    "inputEncoding": "utf8",
    "outputEncoding": "utf8",
    "safe": "high",
    "cx": "013629899879878753259:x2czbw1hz-e",
    "searchType": "image"
   }
  ],
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
 "context": {
  "title": "hello-school-image-search"
 },
 "searchInformation": {
  "searchTime": 0.310642,
  "formattedSearchTime": "0.31",
  "totalResults": "8210000000",
  "formattedTotalResults": "8,210,000,000"
 },
 "items": [
  {
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
  },
  {
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
  },
  {
   "kind": "customsearch#result",
   "title": "Dog - Wikipedia",
   "htmlTitle": "\u003cb\u003eDog\u003c/b\u003e - Wikipedia",
   "link": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Collage_of_Nine_Dogs.jpg",
   "displayLink": "en.wikipedia.org",
   "snippet": "Dog - Wikipedia",
   "htmlSnippet": "\u003cb\u003eDog\u003c/b\u003e - Wikipedia",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://en.wikipedia.org/wiki/Dog",
    "height": 1463,
    "width": 1665,
    "byteSize": 2330812,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4vO7BnC8PFpfFygyWXBUALeuAUeKVUC3neLdgu1PSzV4Wv7PkDLhCucpFA",
    "thumbnailHeight": 132,
    "thumbnailWidth": 150
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Isle of Dogs' is pronounced 'I love dogs' and people are freaking ...",
   "htmlTitle": "Isle of \u003cb\u003eDogs\u003c/b\u003e&#39; is pronounced &#39;I love \u003cb\u003edogs\u003c/b\u003e&#39; and people are freaking ...",
   "link": "https://amp.businessinsider.com/images/5ab514477708e97acc0f0cc9-750-562.jpg",
   "displayLink": "www.businessinsider.com",
   "snippet": "Isle of Dogs' is pronounced 'I love dogs' and people are freaking ...",
   "htmlSnippet": "Isle of \u003cb\u003eDogs\u003c/b\u003e&#39; is pronounced &#39;I love \u003cb\u003edogs\u003c/b\u003e&#39; and people are freaking ...",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://www.businessinsider.com/isle-of-dogs-movie-i-love-dogs-tweets-reactions-2018-3",
    "height": 562,
    "width": 750,
    "byteSize": 45585,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTGhUp7OtHWY_F_bPAChT0JXhhgCcJJpdYcYWS9eAINZUMZVXvFakxzt-",
    "thumbnailHeight": 106,
    "thumbnailWidth": 141
   }
  },
  {
   "kind": "customsearch#result",
   "title": "When Do Dogs Stop Growing?",
   "htmlTitle": "When Do \u003cb\u003eDogs\u003c/b\u003e Stop Growing?",
   "link": "https://www.dogster.com/wp-content/uploads/2017/12/A-puppy-with-a-toy.jpg",
   "displayLink": "www.dogster.com",
   "snippet": "When Do Dogs Stop Growing?",
   "htmlSnippet": "When Do \u003cb\u003eDogs\u003c/b\u003e Stop Growing?",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://www.dogster.com/puppies/when-do-dogs-stop-growing",
    "height": 400,
    "width": 600,
    "byteSize": 136168,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ylld07PmJMyRdm8RFAlTBn5GIvVJnYqcOSxZ5ezEQeTcOf40c8MvSSc",
    "thumbnailHeight": 90,
    "thumbnailWidth": 135
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Anti-vaxxers now refuse to vaccinate pets.",
   "htmlTitle": "Anti-vaxxers now refuse to vaccinate pets.",
   "link": "http://www.slate.com/content/dam/slate/articles/health_and_science/Science/2017/08/170803_MEDEX_SickDog.jpg.CROP.promo-xlarge2.jpg",
   "displayLink": "www.slate.com",
   "snippet": "Anti-vaxxers now refuse to vaccinate pets.",
   "htmlSnippet": "Anti-vaxxers now refuse to vaccinate pets.",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "http://www.slate.com/articles/health_and_science/science/2017/08/anti_vaxxers_now_refuse_to_vaccinate_pets.html",
    "height": 842,
    "width": 1180,
    "byteSize": 410931,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT63fd_LfXWHb66VV-SSJ2TpRFB64LA7Jcz5SOewCvGxvzwi1u_T1iqTmnJ",
    "thumbnailHeight": 107,
    "thumbnailWidth": 150
   }
  },
  {
   "kind": "customsearch#result",
   "title": "How dogs contribute to your health and happiness",
   "htmlTitle": "How \u003cb\u003edogs\u003c/b\u003e contribute to your health and happiness",
   "link": "https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
   "displayLink": "www.medicalnewstoday.com",
   "snippet": "How dogs contribute to your health and happiness",
   "htmlSnippet": "How \u003cb\u003edogs\u003c/b\u003e contribute to your health and happiness",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://www.medicalnewstoday.com/articles/322868.php",
    "height": 734,
    "width": 1100,
    "byteSize": 41880,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjyo4iFP_SQ-a2u7piFW8hZ_J4CEtDMF6_dE8Ev-RvqcZlA93DIo6uQo",
    "thumbnailHeight": 100,
    "thumbnailWidth": 150
   }
  },
  {
   "kind": "customsearch#result",
   "title": "The Ridiculously Cute Dog Challenge To Distract You From All The ...",
   "htmlTitle": "The Ridiculously Cute \u003cb\u003eDog\u003c/b\u003e Challenge To Distract You From All The ...",
   "link": "https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000",
   "displayLink": "www.huffingtonpost.com",
   "snippet": "The Ridiculously Cute Dog Challenge To Distract You From All The ...",
   "htmlSnippet": "The Ridiculously Cute \u003cb\u003eDog\u003c/b\u003e Challenge To Distract You From All The ...",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://www.huffingtonpost.com/entry/snoot-challenge-dogs-twitter-trend_us_5b7fdaeae4b072951511f7fb",
    "height": 1000,
    "width": 1910,
    "byteSize": 269360,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzi7bVU8wALIbo98jYqNblE8papni_fFmGUWLuK68wpuVRnFlABx-3M3cw",
    "thumbnailHeight": 79,
    "thumbnailWidth": 150
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Raise a Puppy for Southeastern Guide Dogs",
   "htmlTitle": "Raise a Puppy for Southeastern Guide \u003cb\u003eDogs\u003c/b\u003e",
   "link": "https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg",
   "displayLink": "www.guidedogs.org",
   "snippet": "Raise a Puppy for Southeastern Guide Dogs",
   "htmlSnippet": "Raise a Puppy for Southeastern Guide \u003cb\u003eDogs\u003c/b\u003e",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://www.guidedogs.org/volunteer/raise-a-puppy/",
    "height": 3840,
    "width": 2880,
    "byteSize": 5867546,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEoGDnBnlMkA8ktj6ogdeqYaqEG7jhJwnH70aIrc4eoJODmNSYgsAHdoB",
    "thumbnailHeight": 150,
    "thumbnailWidth": 113
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Live, Love, Live Again: Barbra Streisand's Cloned Dogs ...",
   "htmlTitle": "Live, Love, Live Again: Barbra Streisand&#39;s Cloned \u003cb\u003eDogs\u003c/b\u003e ...",
   "link": "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-03/jaclou_contons_dodged_to_lighten.jpg?itok=f96PbcnB",
   "displayLink": "www.psychologytoday.com",
   "snippet": "Live, Love, Live Again: Barbra Streisand's Cloned Dogs ...",
   "htmlSnippet": "Live, Love, Live Again: Barbra Streisand&#39;s Cloned \u003cb\u003eDogs\u003c/b\u003e ...",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://www.psychologytoday.com/intl/blog/canine-corner/201803/live-love-live-again-barbra-streisands-cloned-dogs",
    "height": 442,
    "width": 639,
    "byteSize": 91369,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk47f3eGFvmEzi5qkUKdQsgVef_rCdXJQnd0DUcR_dDYjUCUn_Yi81zRmc",
    "thumbnailHeight": 95,
    "thumbnailWidth": 137
   }
  }
 ]
}
```


### YouTube search
This searches the YouTube API.

url:
`/youtube/search`

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
  "kind": "youtube#searchListResponse",
  "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/PKWHZHhdWfJcRY74jnbngS7KD9A\"",
  "nextPageToken": "CAUQAA",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 5
  },
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
    {
      "kind": "youtube#searchResult",
      "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/viybePy1jQvnTdMKEjnZy7y8pAw\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "rZVpo5HbDf8"
      },
      "snippet": {
        "publishedAt": "2018-09-20T17:04:55.000Z",
        "channelId": "UCz35G-z-ZB5rTma2yka7G8A",
        "title": "Ep 8: WIENER DOG PRISON BREAK - Funny Dogs Escaping Jail!",
        "description": "In this video, Crusoe and Oakley the miniature #dachshunds get locked up in jail for a misdewiener crime and then have to find a way to bust themselves out in ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/rZVpo5HbDf8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/rZVpo5HbDf8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/rZVpo5HbDf8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Crusoe the Celebrity Dachshund",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/Id3OeKrgStF_TuUzDSE5aplgcrw\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "Pb8EAXLnwcg"
      },
      "snippet": {
        "publishedAt": "2019-02-06T10:20:09.000Z",
        "channelId": "UC2BDs0pu-C1A4POY0g9rZxw",
        "title": "TV for Dogs! Chill Your Dog Out with this 24/7 TV and Music Playlist!",
        "description": "TV for Dogs! Chill Your Dog Out with this 24/7 TV and Music Playlist! - If you're looking for a way to entertain your bored dog without getting them too hyperactive, ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Pb8EAXLnwcg/default_live.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Pb8EAXLnwcg/mqdefault_live.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Pb8EAXLnwcg/hqdefault_live.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Relax My Dog - Relaxing Music for Dogs",
        "liveBroadcastContent": "live"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/qUH_tDfGA9wwX1phjLTI5K1Q7lg\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "TM-GFCggMsQ"
      },
      "snippet": {
        "publishedAt": "2019-02-13T04:22:41.000Z",
        "channelId": "UC3J6lVgzafnMWW0nSE_PeUA",
        "title": "Sweet dogs !!! Dogs on the street come out to meet",
        "description": "Sweet dogs !!! Dogs on the street come out to meet One way to take care of dogs - More exciting excitement with your pet.travel for puppet photographers - Dog ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/TM-GFCggMsQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/TM-GFCggMsQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/TM-GFCggMsQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "1 Artı 1 Video",
        "liveBroadcastContent": "none"
      }
    }
  ]
}
```

## Developing locally
To start the app, you'll need to config for the various services, and start in development mode to disable SSL:

```
NODE_ENV=deveopment \
CORS_ALLOW_ORIGIN='*' \
SERVICES_EDU_CONFIG_JSON='{"api_keys":["xyz"]}' \
YOUTUBE_CONFIG_JSON='{"api_key":"xyz"}' \
IMAGES_SEARCH_CONFIG_JSON='{"cx":"xyz","api_key":"xyz"}' \
yarn start
```
