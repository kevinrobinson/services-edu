# services-edu

For hacking around with services in K12 schools.

## Getting started
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
### YouTube Search

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