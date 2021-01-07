export const examples = [
  {
    id: 0,
    examples: [
      {
        request: 'GET https://www.googleapis.com/youtube/v3/search',
        response: `{
              "kind": "youtube#searchListResponse",
              "etag": etag,
              "nextPageToken": string,
              "prevPageToken": string,
              "regionCode": string,
              "pageInfo": {
                "totalResults": integer,
                "resultsPerPage": integer
              },
              "items": [
                search Resource
              ]
            }`,
      },
      {
        request: 'GET https://www.googleapis.com/youtube/v3/playlists',
        response: `{
              "kind": "youtube#playlistListResponse",
              "etag": etag,
              "nextPageToken": string,
              "prevPageToken": string,
              "pageInfo": {
                "totalResults": integer,
                "resultsPerPage": integer
              },
              "items": [
                playlist Resource
              ]
            }`,
      },
      {
        request: 'GET https://www.googleapis.com/youtube/v3/members',
        response: `{
              "kind": "youtube#memberListResponse",
              "etag": etag,
              "nextPageToken": string,
              "pageInfo": {
                "totalResults": integer,
                "resultsPerPage": integer
              },
              "items": [
                member Resource
              ]
            }`,
      },
      {
        request: 'GET https://www.googleapis.com/youtube/v3/channels',
        response: `{
              "kind": "youtube#channelListResponse",
              "etag": etag,
              "nextPageToken": string,
              "prevPageToken": string,
              "pageInfo": {
                "totalResults": integer,
                "resultsPerPage": integer
              },
              "items": [
                channel Resource
              ]
            }`,
      },
    ],
  },
  {
    id: 1,
    examples: [
      {
        request: 'GET http://www.behance.net/v2/projects',
        response: `{
              "project": {
                  "id": string,
                  "name": scring,
                  "published_on": integer,
                  "created_on": integer,
                  "modified_on": integer,
                  "url": string,
                  "fields": [string],
                  "covers": {"size":string},
                  "mature_content": 0,
                  "owners": {
                      "ower_id": {
                          "id": integer,
                          "first_name": string,
                          "last_name": string,
                          "username": string,
                          "city": string,
                          "state": string,
                          "country": string,
                          "company": string,
                          "occupation": string,
                          "created_on": integer,
                          "url": scring,
                          "display_name": string,
                          "images": {
                            "size": string
                          },
                          "fields": [string]
                      }
                  },
                  "stats": {
                      "views": integer,
                      "appreciations": integer,
                      "comments": integer
                  },
                  "description": string,
                  "modules": [
                      {
                          "type": string,
                          "src": string,
                          "width": integer,
                          "height": integer
                      },
                  ],
                  "copyright": {
                      "license": string,
                      "description": string
                  },
                  "featured_on": [
                      {
                          "site": string,
                          "timestamp": integer
                      }
                  ]
              }
          }`,
      },
      {
        request: 'GET https://api.behance.net/v2/users',
        response: `{
              "users": [
                  {
                      "id": string,
                      "first_name": string,
                      "last_name": string,
                      "username": string,
                      "city": string,
                      "state": string,
                      "country": string,
                      "company": string,
                      "occupation": string,
                      "created_on": integer,
                      "url": string,
                      "display_name": string,
                      "images": {
                          "size": string,
                      },
                      "fields": [string]
                  }
              ]
          }`,
      },
      {
        request: 'GET http://www.behance.net/v2/collections',
        response: `{
     
              "collections": [
                  {
                      "id": string,
                      "title": string,
                      "owners": [
                          {
                              "id": integer,
                              "first_name": string,
                              "last_name": string,
                              "username": string,
                              "city": string,
                              "state": string,
                              "country": string,
                              "company": string,
                              "occupation": string,
                              "created_on": integer,
                              "url": string,
                              "display_name": string,
                              "images": {
                                  "size": string,
                              },
                              "fields": [string]
                          }
                      ],
                      "stats": {
                          "items": integer,
                          "followers": integer,
                      },
                      "images": [string],
                      "created_on": integer,
                      "modified_on": integer
                  }
                ]
              }`,
      },
    ],
  },
  {
    id: 2,
    examples: [
      {
        request: 'GET https://api.vimeo.com/channels/{channel_id}',
        response: `{
              "categories": [
                {
                  "icon": {
                    "active": true,
                    "default_picture": false,
                    "link": "string",
                    "resource_key": "dc724af18fbdd4e59189f5fe768a5f8311527050",
                    "sizes": [
                      {
                        "height": 720,
                        "link": "https://i.vimeocdn.com/video/581495283_1280x720.jpg?r=pad&subrect=0,12,21,22&r=cover",
                        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F581495283_1280x720.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
                        "width": 1280
                      }
                    ],
                    "type": "caution",
                    "uri": "/users/152184/pictures/12345"
                  },
                  "is_deprecated": false,
                  "last_video_featured_time": "2017-05-17T17:46:09+00:00",
                  "link": "https://vimeo.com/categories/animation",
                  "metadata": {
                    "connections": {
                      "channels": {
                        "options": [ "string" ],
                        "total": 90,
                        "uri": "/categories/animation/channels"
                      },
                      "groups": {
                        "options": [ "string" ],
                        "total": 15,
                        "uri": "/categories/animation/groups"
                      },
                      "users": {
                        "options": [ "string" ],
                        "total": 140,
                        "uri": "/categories/animation/videos"
                      },
                      "videos": {
                        "options": [ "string" ],
                        "total": 960,
                        "uri": "/categories/animation/videos"
                      }
                    },
                    "interactions": {
                      "follow": {
                        "added": true,
                        "added_time": "2017-05-17T17:46:09+00:00",
                        "uri": "/users/152184/categories/animation"
                      }
                    }
                  },
                  "name": "Animation",
                  "parent": {
                    "link": "https://vimeo.com/categories/animation",
                    "name": "Animation",
                    "uri": "/categories/animation"
                  },
                  "pictures": {
                    "active": true,
                    "default_picture": false,
                    "link": "string",
                    "resource_key": "dc724af18fbdd4e59189f5fe768a5f8311527050",
                    "sizes": [
                      {
                        "height": 720,
                        "link": "https://i.vimeocdn.com/video/581495283_1280x720.jpg?r=pad&subrect=0,12,21,22&r=cover",
                        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F581495283_1280x720.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
                        "width": 1280
                      }
                    ],
                    "type": "caution",
                    "uri": "/users/152184/pictures/12345"
                  },
                  "resource_key": "e5595241643259c658ed6c85ca82985a6341edc7",
                  "subcategories": [
                    {
                      "link": "https://vimeo.com/categories/animation/2d/videos",
                      "name": "2D",
                      "uri": "/categories/animation/subcategories/2d"
                    }
                  ],
                  "top_level": true,
                  "uri": "/categories/animation"
                }
              ],
              "created_time": "2007-10-23T17:00:43+00:00",
              "description": "We really love videos, and these are the videos we really, really love.",
              "header": {
                "active": true,
                "default_picture": false,
                "link": "string",
                "resource_key": "dc724af18fbdd4e59189f5fe768a5f8311527050",
                "sizes": [
                  {
                    "height": 720,
                    "link": "https://i.vimeocdn.com/video/581495283_1280x720.jpg?r=pad&subrect=0,12,21,22&r=cover",
                    "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F581495283_1280x720.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
                    "width": 1280
                  }
                ],
                "type": "caution",
                "uri": "/users/152184/pictures/12345"
              },
              "link": "https://vimeo.com/channels/staffpicks",
              "metadata": {
                "connections": {
                  "privacy_users": {
                    "options": [ "string" ],
                    "total": 36,
                    "uri": "/channels/927/privacy/users"
                  },
                  "users": {
                    "options": [ "string" ],
                    "total": 794634,
                    "uri": "/channels/927/users"
                  },
                  "videos": {
                    "options": [ "string" ],
                    "total": 12448,
                    "uri": "/channels/927/videos"
                  }
                },
                "interactions": {
                  "add_moderators": {
                    "options": [ "string" ],
                    "uri": "/channels/1234/moderators"
                  },
                  "add_to": {
                    "options": [ "string" ],
                    "uri": "/channels/1234/videos/5678"
                  },
                  "follow": {
                    "added": true,
                    "added_time": "2017-05-22T17:50:11+00:00",
                    "type": "moderator",
                    "uri": "/users/1234/channels/927"
                  },
                  "moderate_videos": {
                    "options": [ "string" ],
                    "uri": "/channels/1234/videos"
                  }
                }
              },
              "modified_time": "2018-03-21T22:52:29+00:00",
              "name": "Vimeo Staff Picks",
              "pictures": {
                "active": true,
                "default_picture": false,
                "link": "string",
                "resource_key": "dc724af18fbdd4e59189f5fe768a5f8311527050",
                "sizes": [
                  {
                    "height": 720,
                    "link": "https://i.vimeocdn.com/video/581495283_1280x720.jpg?r=pad&subrect=0,12,21,22&r=cover",
                    "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F581495283_1280x720.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
                    "width": 1280
                  }
                ],
                "type": "caution",
                "uri": "/users/152184/pictures/12345"
              },
              "privacy": { "view": "anybody" },
              "resource_key": "e5595241643259c658ed6c85ca82985a6341edc7",
              "tags": {
                "canonical": "awesome",
                "metadata": {
                  "connections": {
                    "videos": {
                      "options": [ "string" ],
                      "total": 34371,
                      "uri": "/tags/awesome/videos"
                    }
                  }
                },
                "name": "awesome",
                "resource_key": "bac1033deba2310ebba2caec33c23e4beea67aba",
                "uri": "/videos/258684937/tags/awesome"
              },
              "uri": "/channels/927",
              "user": {
                "account": "basic",
                "available_for_hire": false,
                "bio": "This is where you will find videos and news updates from the staff.",
                "can_work_remotely": false,
                "clients": "vimeo",
                "content_filter": [  ],
                "created_time": "2007-01-18T16:40:11+00:00",
                "gender": "m",
                "link": "https://vimeo.com/staff",
                "location": "New York City",
                "location_details": {
                  "city": "New York City",
                  "country": "United States",
                  "country_iso_code": "US",
                  "formatted_address": "123 Street, NY",
                  "latitude": 20.2960586,
                  "longitude": 185.8245392,
                  "neighborhood": "Brooklyn",
                  "state": "New York",
                  "state_iso_code": "NY",
                  "sub_locality": "Brooklyn"
                },
                "metadata": {
                  "connections": {
                    "albums": {
                      "options": [ "string" ],
                      "total": 3,
                      "uri": "/users/152184/albums"
                    },
                    "appearances": {
                      "options": [ "string" ],
                      "total": 6,
                      "uri": "/users/152184/appearances"
                    },
                    "block": {
                      "options": [ "string" ],
                      "total": 73,
                      "uri": "/me/block"
                    },
                    "categories": {
                      "options": [ "string" ],
                      "total": 5,
                      "uri": "/users/152184/categories"
                    },
                    "channels": {
                      "options": [ "string" ],
                      "total": 4,
                      "uri": "/users/152184/channels"
                    },
                    "connected_apps": {
                      "options": [ "string" ],
                      "total": 4,
                      "uri": "/me/connected_apps"
                    },
                    "feed": {
                      "options": [ "string" ],
                      "uri": "/users/152184/feed"
                    },
                    "folders": {
                      "options": [ "string" ],
                      "total": 9,
                      "uri": "/users/152184/folders"
                    },
                    "folders_root": {
                      "options": [ "string" ],
                      "uri": "/users/123456789/folders/root"
                    },
                    "followers": {
                      "options": [ "string" ],
                      "total": 12,
                      "uri": "/users/152184/followers"
                    },
                    "following": {
                      "options": [ "string" ],
                      "total": 47,
                      "uri": "/users/152184/following"
                    },
                    "groups": {
                      "options": [ "string" ],
                      "total": 2,
                      "uri": "/users/152184/groups"
                    },
                    "likes": {
                      "options": [ "string" ],
                      "total": 300,
                      "uri": "/users/152184/likes"
                    },
                    "moderated_channels": {
                      "options": [ "string" ],
                      "total": 1,
                      "uri": "/users/152184/channels?filter=moderated"
                    },
                    "pictures": {
                      "options": [ "string" ],
                      "total": 3,
                      "uri": "/users/152184/pictures"
                    },
                    "portfolios": {
                      "options": [ "string" ],
                      "total": 5,
                      "uri": "/users/152184/portfolios"
                    },
                    "recommended_channels": {
                      "options": [ "string" ],
                      "total": 4,
                      "uri": "/me/recommendations/channels"
                    },
                    "recommended_users": {
                      "options": [ "string" ],
                      "total": 6,
                      "uri": "/me/recommendations/users"
                    },
                    "shared": {
                      "options": [ "string" ],
                      "total": 15,
                      "uri": "/users/152184/shared/videos"
                    },
                    "videos": {
                      "options": [ "string" ],
                      "total": 36,
                      "uri": "/users/152184/videos"
                    },
                    "watched_videos": {
                      "options": [ "string" ],
                      "total": 322,
                      "uri": "/me/watched/videos"
                    },
                    "watchlater": {
                      "options": [ "string" ],
                      "total": 14,
                      "uri": "/users/152184/watchlater"
                    }
                  },
                  "interactions": {
                    "add_privacy_user": {
                      "options": [ "string" ],
                      "uri": "/channels/152184/privacy/users"
                    },
                    "block": {
                      "added": true,
                      "added_time": "2017-05-16T15:05:43+00:00",
                      "options": [ "string" ],
                      "uri": "/me/block/3766357"
                    },
                    "connected_apps": {
                      "all_scopes": [  ],
                      "is_connected": true,
                      "needed_scopes": [  ],
                      "options": [ "string" ],
                      "uri": "/me/connected_apps/facebook"
                    },
                    "follow": {
                      "added": true,
                      "options": [ "string" ],
                      "uri": "/users/152184/following/3766357"
                    },
                    "report": {
                      "options": [ "string" ],
                      "reason": [ "string" ],
                      "uri": "/users/152184/report"
                    }
                  },
                  "public_videos": { "total": 100 }
                },
                "name": "Vimeo Staff",
                "pictures": {
                  "active": true,
                  "default_picture": false,
                  "link": "string",
                  "resource_key": "dc724af18fbdd4e59189f5fe768a5f8311527050",
                  "sizes": [
                    {
                      "height": 720,
                      "link": "https://i.vimeocdn.com/video/581495283_1280x720.jpg?r=pad&subrect=0,12,21,22&r=cover",
                      "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F581495283_1280x720.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
                      "width": 1280
                    }
                  ],
                  "type": "caution",
                  "uri": "/users/152184/pictures/12345"
                },
                "preferences": {
                  "videos": {
                    "privacy": {
                      "password": "hunter1"
                    }
                  }
                },
                "resource_key": "bac1033deba2310ebba2caec33c23e4beea67aba",
                "short_bio": "This is a short biography about me!",
                "skills": {
                  "name": "Director",
                  "uri": "/marketplace/skills/152184"
                },
                "upload_quota": {
                  "lifetime": {
                    "free": 5000000,
                    "max": 5368709120,
                    "used": 5368704120
                  },
                  "periodic": {
                    "free": 5000000,
                    "max": 5368709120,
                    "reset_date": "2029-03-13T02:35:13-04:00",
                    "used": 5368704120
                  },
                  "space": {
                    "free": 5000000,
                    "max": 5368709120,
                    "showing": "lifetime",
                    "used": 5368704120
                  }
                },
                "uri": "/users/152184",
                "websites": [
                  {
                    "description": "Follow us on Twitter!",
                    "link": "https://twitter.com/vimeo",
                    "name": "Twitter",
                    "type": "facebook",
                    "uri": "/users/1234/links/1"
                  }
                ]
              }
            }`,
      },
      {
        request: 'GET https://api.vimeo.com/users/{user_id}',
        response: `{
              "account": "basic",
              "available_for_hire": false,
              "bio": "This is where you will find videos and news updates from the staff.",
              "can_work_remotely": false,
              "clients": "vimeo",
              "content_filter": [  ],
              "created_time": "2007-01-18T16:40:11+00:00",
              "gender": "m",
              "link": "https://vimeo.com/staff",
              "location": "New York City",
              "location_details": [
                {
                  "city": "New York City",
                  "country": "United States",
                  "country_iso_code": "US",
                  "formatted_address": "123 Street, NY",
                  "latitude": 20.2960586,
                  "longitude": 185.8245392,
                  "neighborhood": "Brooklyn",
                  "state": "New York",
                  "state_iso_code": "NY",
                  "sub_locality": "Brooklyn"
                }
              ],
              "metadata": {
                "connections": {
                  "albums": {
                    "options": [ "string" ],
                    "total": 3,
                    "uri": "/users/152184/albums"
                  },
                  "appearances": {
                    "options": [ "string" ],
                    "total": 6,
                    "uri": "/users/152184/appearances"
                  },
                  "block": {
                    "options": [ "string" ],
                    "total": 73,
                    "uri": "/me/block"
                  },
                  "categories": {
                    "options": [ "string" ],
                    "total": 5,
                    "uri": "/users/152184/categories"
                  },
                  "channels": {
                    "options": [ "string" ],
                    "total": 4,
                    "uri": "/users/152184/channels"
                  },
                  "connected_apps": {
                    "options": [ "string" ],
                    "total": 4,
                    "uri": "/me/connected_apps"
                  },
                  "feed": {
                    "options": [ "string" ],
                    "uri": "/users/152184/feed"
                  },
                  "folders": {
                    "options": [ "string" ],
                    "total": 9,
                    "uri": "/users/152184/folders"
                  },
                  "folders_root": {
                    "options": [ "string" ],
                    "uri": "/users/123456789/folders/root"
                  },
                  "followers": {
                    "options": [ "string" ],
                    "total": 12,
                    "uri": "/users/152184/followers"
                  },
                  "following": {
                    "options": [ "string" ],
                    "total": 47,
                    "uri": "/users/152184/following"
                  },
                  "groups": {
                    "options": [ "string" ],
                    "total": 2,
                    "uri": "/users/152184/groups"
                  },
                  "likes": {
                    "options": [ "string" ],
                    "total": 300,
                    "uri": "/users/152184/likes"
                  },
                  "moderated_channels": {
                    "options": [ "string" ],
                    "total": 1,
                    "uri": "/users/152184/channels?filter=moderated"
                  },
                  "pictures": {
                    "options": [ "string" ],
                    "total": 3,
                    "uri": "/users/152184/pictures"
                  },
                  "portfolios": {
                    "options": [ "string" ],
                    "total": 5,
                    "uri": "/users/152184/portfolios"
                  },
                  "recommended_channels": {
                    "options": [ "string" ],
                    "total": 4,
                    "uri": "/me/recommendations/channels"
                  },
                  "recommended_users": {
                    "options": [ "string" ],
                    "total": 6,
                    "uri": "/me/recommendations/users"
                  },
                  "shared": {
                    "options": [ "string" ],
                    "total": 15,
                    "uri": "/users/152184/shared/videos"
                  },
                  "videos": {
                    "options": [ "string" ],
                    "total": 36,
                    "uri": "/users/152184/videos"
                  },
                  "watched_videos": {
                    "options": [ "string" ],
                    "total": 322,
                    "uri": "/me/watched/videos"
                  },
                  "watchlater": {
                    "options": [ "string" ],
                    "total": 14,
                    "uri": "/users/152184/watchlater"
                  }
                },
                "interactions": {
                  "add_privacy_user": {
                    "options": [ "string" ],
                    "uri": "/channels/152184/privacy/users"
                  },
                  "block": {
                    "added": true,
                    "added_time": "2017-05-16T15:05:43+00:00",
                    "options": [ "string" ],
                    "uri": "/me/block/3766357"
                  },
                  "connected_apps": {
                    "all_scopes": [  ],
                    "is_connected": true,
                    "needed_scopes": [  ],
                    "options": [ "string" ],
                    "uri": "/me/connected_apps/facebook"
                  },
                  "follow": {
                    "added": true,
                    "options": [ "string" ],
                    "uri": "/users/152184/following/3766357"
                  },
                  "report": {
                    "options": [ "string" ],
                    "reason": [ "string" ],
                    "uri": "/users/152184/report"
                  }
                },
                "public_videos": { "total": 100 }
              },
              "name": "Vimeo Staff",
              "pictures": [  ],
              "preferences": {
                "videos": {
                  "privacy": {
                    "password": "hunter1"
                  }
                }
              },
              "resource_key": "bac1033deba2310ebba2caec33c23e4beea67aba",
              "short_bio": "This is a short biography about me!",
              "skills": [
                {
                  "name": "Director",
                  "uri": "/marketplace/skills/152184"
                }
              ],
              "upload_quota": {
                "lifetime": {
                  "free": 5000000,
                  "max": 5368709120,
                  "used": 5368704120
                },
                "periodic": {
                  "free": 5000000,
                  "max": 5368709120,
                  "reset_date": "2029-03-13T02:35:13-04:00",
                  "used": 5368704120
                },
                "space": {
                  "free": 5000000,
                  "max": 5368709120,
                  "showing": "lifetime",
                  "used": 5368704120
                }
              },
              "uri": "/users/152184",
              "websites": [
                {
                  "description": "Follow us on Twitter!",
                  "link": "https://twitter.com/vimeo",
                  "name": "Twitter",
                  "type": "facebook",
                  "uri": "/users/1234/links/1"
                }
              ]
            }`,
      },
    ],
  },
  {
    id: 3,
    examples: [
      {
        request: 'GET https://api.spotify.com/v1/albums/{id}',
        response: `{
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
              },
              "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
              "id" : "2BTZIqw0ntH9MvilQ3ewNY",
              "name" : "Cyndi Lauper",
              "type" : "artist",
              "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
            } ],
            "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TW", "UY" ],
            "copyrights" : [ {
              "text" : "(P) 2000 Sony Music Entertainment Inc.",
              "type" : "P"
            } ],
            "external_ids" : {
              "upc" : "5099749994324"
            },
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj"
            },
            "genres" : [ ],
            "href" : "https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj",
            "id" : "0sNOF9WDwhWunNAHPD3Baj",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/07c323340e03e25a8e5dd5b9a8ec72b69c50089d",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/8b662d81966a0ec40dc10563807696a8479cd48b",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/54b3222c8aaa77890d1ac37b3aaaa1fc9ba630ae",
              "width" : 64
            } ],
            "name" : "She's So Unusual",
            "popularity" : 39,
            "release_date" : "1983",
            "release_date_precision" : "year",
            "tracks" : {
              "href" : "https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj/tracks?offset=0&limit=50",
              "items" : [ {
                "artists" : [ {
                  "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
                  },
                  "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
                  "id" : "2BTZIqw0ntH9MvilQ3ewNY",
                  "name" : "Cyndi Lauper",
                  "type" : "artist",
                  "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
                } ],
                "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TW", "UY" ],
                "disc_number" : 1,
                "duration_ms" : 305560,
                "explicit" : false,
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/track/3f9zqUnrnIq0LANhmnaF0V"
                },
                "href" : "https://api.spotify.com/v1/tracks/3f9zqUnrnIq0LANhmnaF0V",
                "id" : "3f9zqUnrnIq0LANhmnaF0V",
                "name" : "Money Changes Everything",
                "preview_url" : "https://p.scdn.co/mp3-preview/01bb2a6c9a89c05a4300aea427241b1719a26b06",
                "track_number" : 1,
                "type" : "track",
                "uri" : "spotify:track:3f9zqUnrnIq0LANhmnaF0V"
              }, {
                ...
              } ],
              "limit" : 50,
              "next" : null,
              "offset" : 0,
              "previous" : null,
              "total" : 13
            },
            "type" : "album",
            "uri" : "spotify:album:0sNOF9WDwhWunNAHPD3Baj"
          }`,
      },
      {
        request: 'GET https://api.spotify.com/v1/artists/{id}',
        response: `{
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/0OdUWJ0sBjDrqHygGUXeCF"
              },
              "followers" : {
                "href" : null,
                "total" : 306565
              },
              "genres" : [ "indie folk", "indie pop" ],
              "href" : "https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF",
              "id" : "0OdUWJ0sBjDrqHygGUXeCF",
              "images" : [ {
                "height" : 816,
                "url" : "https://i.scdn.co/image/eb266625dab075341e8c4378a177a27370f91903",
                "width" : 1000
              }, {
                "height" : 522,
                "url" : "https://i.scdn.co/image/2f91c3cace3c5a6a48f3d0e2fd21364d4911b332",
                "width" : 640
              }, {
                "height" : 163,
                "url" : "https://i.scdn.co/image/2efc93d7ee88435116093274980f04ebceb7b527",
                "width" : 200
              }, {
                "height" : 52,
                "url" : "https://i.scdn.co/image/4f25297750dfa4051195c36809a9049f6b841a23",
                "width" : 64
              } ],
              "name" : "Band of Horses",
              "popularity" : 59,
              "type" : "artist",
              "uri" : "spotify:artist:0OdUWJ0sBjDrqHygGUXeCF"
            }`,
      },
      {
        request: 'GET https://api.spotify.com/v1/playlists/{playlist_id}',
        response: `{
              "collaborative" : false,
              "description" : "Having friends over for dinner? Here´s the perfect playlist.",
              "external_urls" : {
                "spotify" : "http://open.spotify.com/user/spotify/playlist/59ZbFPES4DQwEjBpWHzrtC"
              },
              "followers" : {
                "href" : null,
                "total" : 143350
              },
              "href" : "https://api.spotify.com/v1/users/spotify/playlists/59ZbFPES4DQwEjBpWHzrtC",
              "id" : "59ZbFPES4DQwEjBpWHzrtC",
              "images" : [ {
                "url" : "https://i.scdn.co/image/68b6a65573a55095e9c0c0c33a274b18e0422736"
              } ],
              "name" : "Dinner with Friends",
              "owner" : {
                "external_urls" : {
                  "spotify" : "http://open.spotify.com/user/spotify"
                },
                "href" : "https://api.spotify.com/v1/users/spotify",
                "id" : "spotify",
                "type" : "user",
                "uri" : "spotify:user:spotify"
              },
              "public" : null,
              "snapshot_id" : "bNLWdmhh+HDsbHzhckXeDC0uyKyg4FjPI/KEsKjAE526usnz2LxwgyBoMShVL+z+",
              "tracks" : {
                "href" : "https://api.spotify.com/v1/users/spotify/playlists/59ZbFPES4DQwEjBpWHzrtC/tracks",
                "items" : [ {
                  "added_at" : "2014-09-01T04:21:28Z",
                  "added_by" : {
                    "external_urls" : {
                      "spotify" : "http://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                  },
                  "is_local" : false,
                  "track" : {
                    "album" : {
                      "album_type" : "single",
                      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
                      "external_urls" : {
                        "spotify" : "https://open.spotify.com/album/5GWoXPsTQylMuaZ84PC563"
                      },
                      "href" : "https://api.spotify.com/v1/albums/5GWoXPsTQylMuaZ84PC563",
                      "id" : "5GWoXPsTQylMuaZ84PC563",
                      "images" : [ {
                        "height" : 640,
                        "url" : "https://i.scdn.co/image/47421900e7534789603de84c03a40a826c058e45",
                        "width" : 640
                      }, {
                        "height" : 300,
                        "url" : "https://i.scdn.co/image/0d447b6faae870f890dc5780cc58d9afdbc36a1d",
                        "width" : 300
                      }, {
                        "height" : 64,
                        "url" : "https://i.scdn.co/image/d926b3e5f435ef3ac0874b1ff1571cf675b3ef3b",
                        "width" : 64
                      } ],
                      "name" : "I'm Not The Only One",
                      "type" : "album",
                      "uri" : "spotify:album:5GWoXPsTQylMuaZ84PC563"
                    },
                    "artists" : [ {
                      "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/2wY79sveU1sp5g7SokKOiI"
                      },
                      "href" : "https://api.spotify.com/v1/artists/2wY79sveU1sp5g7SokKOiI",
                      "id" : "2wY79sveU1sp5g7SokKOiI",
                      "name" : "Sam Smith",
                      "type" : "artist",
                      "uri" : "spotify:artist:2wY79sveU1sp5g7SokKOiI"
                    } ],
                    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
                    "disc_number" : 1,
                    "duration_ms" : 204732,
                    "explicit" : false,
                    "external_ids" : {
                      "isrc" : "GBUM71403920"
                    },
                    "external_urls" : {
                      "spotify" : "https://open.spotify.com/track/4i9sYtSIlR80bxje5B3rUb"
                    },
                    "href" : "https://api.spotify.com/v1/tracks/4i9sYtSIlR80bxje5B3rUb",
                    "id" : "4i9sYtSIlR80bxje5B3rUb",
                    "name" : "I'm Not The Only One - Radio Edit",
                    "popularity" : 45,
                    "preview_url" : "https://p.scdn.co/mp3-preview/dd64cca26c69e93ea78f1fff2cc4889396bb6d2f",
                    "track_number" : 1,
                    "type" : "track",
                    "uri" : "spotify:track:4i9sYtSIlR80bxje5B3rUb"
                  }
                }],
                "limit" : 100,
                "next" : "https://api.spotify.com/v1/users/spotify/playlists/59ZbFPES4DQwEjBpWHzrtC/tracks?offset=100&limit=100",
                "offset" : 0,
                "previous" : null,
                "total" : 105
              },
              "type" : "playlist",
              "uri" : "spotify:user:spotify:playlist:59ZbFPES4DQwEjBpWHzrtC"
            }`,
      },
    ],
  },
  {
    id: 4,
    examples: [
      {
        request: 'https://api.music.apple.com/v1/me/library/albums/l.424stuk',
        response: `{
              "data": [
                  {
                      "attributes": {
                          "artistName": "Lana Del Rey",
                          "artwork": {
                              "height": 1200,
                              "url": "https://example.mzstatic.com/image/thumb/Music2/v4/54/d5/76/54d5765e-8bc2-af71-483e-5a5fb5597c61/UMG_cvrart_00602537865659_01_RGB72_1500x1500_14UMGIM20562.jpeg/{w}x{h}bb.jpeg",
                              "width": 1200
                          },
                          "name": "Ultraviolence (Deluxe)",
                          "playParams": {
                              "id": "l.424stuk",
                              "isLibrary": true,
                              "kind": "album"
                          },
                          "trackCount": 15
                      },
                      "href": "/v1/me/library/albums/l.424stuk",
                      "id": "l.424stuk",
                      "relationships": {
                      },
                      "type": "library-albums"
                  }
              ]
          }`,
      },
      {
        request:
          'https://api.music.apple.com/v1/me/library/songs/i.vMXdDW1TKQWRAd',
        response: `{
              "data": [
                  {
                      "attributes": {
                          "albumName": "Mozart: 7 Minuets, K. 61b",
                          "artistName": "Wiener Mozart Ensemble & Willi Boskovsky",
                          "artwork": {
                              "height": 1200,
                              "url": "https://example.mzstatic.com/image/thumb/Features/6c/83/03/dj.npsbmsfx.jpeg/{w}x{h}bb.jpeg",
                              "width": 1200
                          },
                          "name": "7 Minuets, K. 61b: No. 1 in G",
                          "playParams": {
                              "id": "i.vMXdDW1TKQWRAd",
                              "isLibrary": true,
                              "kind": "song"
                          },
                          "trackNumber": 1
                      },
                      "href": "/v1/me/library/songs/i.vMXdDW1TKQWRAd",
                      "id": "i.vMXdDW1TKQWRAd",
                      "type": "library-songs"
                  }
              ]
          }`,
      },
      {
        request: 'https://api.music.apple.com/v1/me/library/artists/r.QxpxYW2',
        response: `{
              "data": [
                  {
                      "attributes": {
                          "name": "Pink Floyd"
                      },
                      "href": "/v1/me/library/artists/r.QxpxYW2",
                      "id": "r.QxpxYW2",
                      "type": "library-artists"
                  }
              ]
          }`,
      },
    ],
  },
  {
    id: 5,
    examples: [
      {
        request: 'GET http://www.api.genius.com/songs/378195',
        response: `  
            {
            meta: {
            status: 200
            },
            response: {
            song: {
            annotation_count: 31,
            api_path: "/songs/378195",
            apple_music_id: "882945383",
            apple_music_player_url: "https://genius.com/songs/378195/apple_music_player",
            description: {...},
            embed_content: "<div id='rg_embed_link_378195' class='rg_embed_link' data-song-id='378195'>Read <a href='https://genius.com/Sia-chandelier-lyrics'>“Chandelier” by Sia</a> on Genius</div> <script crossorigin src='//genius.com/songs/378195/embed.js'></script>",
            featured_video: true,
            full_title: "Chandelier by Sia",
            header_image_thumbnail_url: "https://images.genius.com/4b681dde97d03ce4a93fb1515fb7219d.300x300x1.jpg",
            header_image_url: "https://images.genius.com/4b681dde97d03ce4a93fb1515fb7219d.600x600x1.jpg",
            id: 378195,
            lyrics_owner_id: 47098,
            lyrics_placeholder_reason: null,
            lyrics_state: "complete",
            path: "/Sia-chandelier-lyrics",
            pyongs_count: 439,
            recording_location: null,
            release_date: "2014-03-17",
            release_date_for_display: "March 17, 2014",
            song_art_image_thumbnail_url: "https://images.genius.com/5bcfb76690b3fb068a317c76579b70b5.300x300x1.jpg",
            song_art_image_url: "https://images.genius.com/5bcfb76690b3fb068a317c76579b70b5.1000x1000x1.jpg",
            stats: {...},
            title: "Chandelier",
            title_with_featured: "Chandelier",
            url: "https://genius.com/Sia-chandelier-lyrics",
            current_user_metadata: {...},
            album: {...},
            custom_performances: [...],
            description_annotation: {...},
            featured_artists: [...],
            lyrics_marked_complete_by: null,
            media: [...],
            primary_artist: {...},
            producer_artists: [...],
            song_relationships: [...],
            verified_annotations_by: [...],
            verified_contributors: [...],
            verified_lyrics_by: [...],
            writer_artists: [...]
            }
            }
            }`,
      },
      {
        request: 'GET http://www.api.genius.com/artist/16775',
        response: `  
            {
            meta: {
            status: 200
            },
            response: {
            artist: {
            alternate_names: [...],
            api_path: "/artists/16775",
            description: {...},
            facebook_name: "SiaMusic",
            followers_count: 1196,
            header_image_url: "https://images.genius.com/cb40ff6ba23119fdb3ec69073be7cf34.1000x427x1.jpg",
            id: 16775,
            image_url: "https://images.genius.com/6bcd2bd1708eeae7282400f1e4be633f.600x600x1.jpg",
            instagram_name: "SiaMusic",
            is_meme_verified: false,
            is_verified: true,
            name: "Sia",
            translation_artist: false,
            twitter_name: "Sia",
            url: "https://genius.com/artists/Sia",
            current_user_metadata: {...},
            iq: 7493,
            description_annotation: {...},
            user: {...}
            }
            }
            }`,
      },
      {
        request: 'GET http://www.api.genius.com/search?q=Kendrick%20Lamar',
        response: `{
              meta: {
              status: 200
              },
              response: {
              hits: [
               {
              highlights: [...],
              index: "song",
              type: "song",
              result: {
              annotation_count: 20,
              api_path: "/songs/3039923",
              full_title: "HUMBLE. by Kendrick Lamar",
              header_image_thumbnail_url: "https://images.genius.com/0780c76f8d3ab762a0ad67ac26fa9709.300x169x1.jpg",
              header_image_url: "https://images.genius.com/0780c76f8d3ab762a0ad67ac26fa9709.1000x563x1.jpg",
              id: 3039923,
              lyrics_owner_id: 104344,
              lyrics_state: "complete",
              path: "/Kendrick-lamar-humble-lyrics",
              pyongs_count: 1104,
              song_art_image_thumbnail_url: "https://images.genius.com/483306c535608c27f9e3781b854dc91d.300x300x1.png",
              song_art_image_url: "https://images.genius.com/483306c535608c27f9e3781b854dc91d.1000x1000x1.png",
              stats: {...},
              title: "HUMBLE.",
              title_with_featured: "HUMBLE.",
              url: "https://genius.com/Kendrick-lamar-humble-lyrics",
              primary_artist: {...}
              }
              },
               {...},
               {...},
               {...}
              ]
              }
              }`,
      },
    ],
  },
  {
    id: 6,
    examples: [
      {
        request: 'http://libgen.io/json.php?ids=1,2&fields=Title,Author,MD5',
        response: `[
              {
                "title":"Handbook of Clinical Drug Data",
                "author":"Philip Anderson",
                "md5":"7B2A4D53FDE834E801C26A2BAB7E0240"
              },
              {
                "title":"Handbook of Herbs and Spices",
                "author":"K V Peter",
                "md5":"048EA0496DB0444F873139CD705A07AF"
              }
            ]`,
      },
    ],
  },
  {
    id: 7,
    examples: [
      {
        request: 'GET https://cat-fact.herokuapp.com/facts',
        response: `[{"status":{"verified":true,"sentCount":1,"feedback":""},"type":"cat","deleted":false,"_id":"5887e1d85c873e0011036889","user":"5a9ac18c7478810ea6c06381","text":"Cats make about 100 different sounds. Dogs make only about 10.","__v":0,"source":"user","updatedAt":"2020-09-03T16:39:39.578Z","createdAt":"2018-01-15T21:20:00.003Z","used":true},{"status":{"verified":true,"sentCount":1},"type":"cat","deleted":false,"_id":"588e746706ac2b00110e59ff","user":"588e6e8806ac2b00110e59c3","text":"Domestic cats spend about 70 percent of the day sleeping and 15 percent of the day grooming.","__v":0,"source":"user","updatedAt":"2020-08-26T20:20:02.359Z","createdAt":"2018-01-14T21:20:02.750Z","used":true},{"status":{"verified":true,"sentCount":1},"type":"cat","deleted":false,"_id":"58923f2fc3878c0011784c79","user":"5887e9f65c873e001103688d","text":"I don't know anything about cats.","__v":0,"source":"user","updatedAt":"2020-08-23T20:20:01.611Z","createdAt":"2018-02-25T21:20:03.060Z","used":false},{"status":{"verified":true,"sentCount":1},"type":"cat","deleted":false,"_id":"5894af975cdc7400113ef7f9","user":"5a9ac18c7478810ea6c06381","text":"The technical term for a cat’s hairball is a bezoar.","__v":0,"source":"user","updatedAt":"2020-11-25T21:20:03.895Z","createdAt":"2018-02-27T21:20:02.854Z","used":true},{"status":{"verified":true,"sentCount":1},"type":"cat","deleted":false,"_id":"58e007cc0aac31001185ecf5","user":"58e007480aac31001185ecef","text":"Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.","__v":0,"source":"user","updatedAt":"2020-08-23T20:20:01.611Z","createdAt":"2018-03-01T21:20:02.713Z","used":false}]`,
      },
    ],
  },
  {
    id: 8,
    examples: [
      {
        request: 'GET https://dog.ceo/api/breeds/image/random',
        response: `{
              "message": "https://images.dog.ceo/breeds/greyhound-italian/n02091032_11843.jpg",
              "status": "success"
          }`,
      },
      {
        request: 'GET https://dog.ceo/api/breeds/list/all',
        response: `{
              "message": {
                  "affenpinscher": [],
                  "african": [],
                  "airedale": [],
                  "akita": [],
                  "appenzeller": [],
                  "australian": [
                      "shepherd"
                  ],
                  "basenji": [],
                  "beagle": [],
                  "bluetick": [],
                  "borzoi": [],
                  "bouvier": [],
                  "boxer": [],
                  "brabancon": [],
                  "briard": [],
                  "buhund": [
                      "norwegian"
                  ],
                  "bulldog": [
                      "boston",
                      "english",
                      "french"
                  ],
                  "bullterrier": [
                      "staffordshire"
                  ],
                  "cairn": [],
                  "cattledog": [
                      "australian"
                  ],
                  "chihuahua": [],
                  "chow": [],
                  "clumber": [],
                  "cockapoo": [],
                  "collie": [
                      "border"
                  ],
                  "coonhound": [],
                  "corgi": [
                      "cardigan"
                  ],
                  "cotondetulear": [],
                  "dachshund": [],
                  "dalmatian": [],
                  "dane": [
                      "great"
                  ],
                  "deerhound": [
                      "scottish"
                  ],
                  "dhole": [],
                  "dingo": [],
                  "doberman": [],
                  "elkhound": [
                      "norwegian"
                  ],
                  "entlebucher": [],
                  "eskimo": [],
                  "finnish": [
                      "lapphund"
                  ],
                  "frise": [
                      "bichon"
                  ],
                  "germanshepherd": [],
                  "greyhound": [
                      "italian"
                  ],
                  "groenendael": [],
                  "havanese": [],
                  "hound": [
                      "afghan",
                      "basset",
                      "blood",
                      "english",
                      "ibizan",
                      "plott",
                      "walker"
                  ],
                  "husky": [],
                  "keeshond": [],
                  "kelpie": [],
                  "komondor": [],
                  "kuvasz": [],
                  "labrador": [],
                  "leonberg": [],
                  "lhasa": [],
                  "malamute": [],
                  "malinois": [],
                  "maltese": [],
                  "mastiff": [
                      "bull",
                      "english",
                      "tibetan"
                  ],
                  "mexicanhairless": [],
                  "mix": [],
                  "mountain": [
                      "bernese",
                      "swiss"
                  ],
                  "newfoundland": [],
                  "otterhound": [],
                  "ovcharka": [
                      "caucasian"
                  ],
                  "papillon": [],
                  "pekinese": [],
                  "pembroke": [],
                  "pinscher": [
                      "miniature"
                  ],
                  "pitbull": [],
                  "pointer": [
                      "german",
                      "germanlonghair"
                  ],
                  "pomeranian": [],
                  "poodle": [
                      "miniature",
                      "standard",
                      "toy"
                  ],
                  "pug": [],
                  "puggle": [],
                  "pyrenees": [],
                  "redbone": [],
                  "retriever": [
                      "chesapeake",
                      "curly",
                      "flatcoated",
                      "golden"
                  ],
                  "ridgeback": [
                      "rhodesian"
                  ],
                  "rottweiler": [],
                  "saluki": [],
                  "samoyed": [],
                  "schipperke": [],
                  "schnauzer": [
                      "giant",
                      "miniature"
                  ],
                  "setter": [
                      "english",
                      "gordon",
                      "irish"
                  ],
                  "sheepdog": [
                      "english",
                      "shetland"
                  ],
                  "shiba": [],
             `,
      },
    ],
  },
];

export function getExamplesById(id) {
  return examples.find(example => {
    if (example.id === id) {
      return true;
    }
    return false;
  });
}
