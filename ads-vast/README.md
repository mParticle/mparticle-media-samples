# VAST Sample Ads

JW Player supports VAST ads, which is a simple way of displaying video ads.

This folder contains some sample VAST ad XML that we can use to test various use cases for rendering ads.

**Note: Not sure if Brightcove supports VAST at this point**

## Overview

Each of these files contain a sample video ad, with various click behaviors. They're design to just hit random localhost urls for now so we can see some events.

This assumes you're running a simple http server locally. If we need anything more complicated, we could possibly set up a better logging server.

Please note, that you have to manually add **duration** to the XML based on the video length.

## Serving Sample Vast

- Install simple http server:

  - `npm i -g http-server`

- Copy these xml files to some directory, or just cd to `ads-vast`

- Run `http-server`

  - `http-server -p 8000 --cors`

You should now be able to serve theses through your JW Player via AD Schedules > Setup with `http://localhost:8000/<vast-file>.xml` as your Tag Url

## Useful Links

- [JW Player Ad Formats Reference](https://support.jwplayer.com/articles/ad-formats-reference)
- [VAST 3.0 Spec (pdf)](https://www.iab.com/guidelines/digital-video-ad-serving-template-vast-3-0/)
