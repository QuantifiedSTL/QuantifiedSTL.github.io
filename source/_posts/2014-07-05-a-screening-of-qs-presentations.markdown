---
tocindex: 100
layout: post
title: "A Screening of QS Presentations"
date: 2014-07-05
comments: true
categories:
author: Jamie Williams
published: true
---

For our upcoming [meetup](http://www.meetup.com/QS-STL/events/193827792/?a=ea1_grp&rv=ea1&_af_eid=193827792&_af=event) later this month
(6PM July 22 at [Lab 1500](http://www.wiredhealthconference.com/) downtown), we are trying a new format in our meetup rotation: we will screen
a handful of presentations from the main [QS blog](http://quantifiedself.com/), which has accumulated hundreds of videos from meetup groups around the world. That's
a lot of great talks to choose from. Over on the [QS group page at Vimeo](http://vimeo.com/groups/quantifiedself/sort:plays/format:detail) where the videos are stored,
it's straightforward to sort the videos by popularity and date.

We've set up an [editable GitHub wiki page](https://github.com/QuantifiedSTL/QuantifiedSTL.github.io/wiki/Choosing-QS-presentations-to-watch) to gather a list of curated presentations (we invite
fellow self quantifiers to add their favorites to the page). We set up a [poll](http://www.meetup.com/QS-STL/polls/1107602/) to vote on the following videos, which will determine which ones we show at the screening.

| plays | likes | presentation | date | length (min) |
| ----------- | :------------: | ----------- | :-----------: | :-----------: |
| 141347 | 162 | [Roger Craig Wins Jeopardy Championship with Knowledge Tracking](http://quantifiedself.com/2011/11/roger-craig-on-knowledge-tracking/) | 2011/11/17 | 14.3 |
| 3515 | 12 | [Mark Moschel on Tracking Rejection](http://quantifiedself.com/2013/12/mark-moschel-tracking-rejections/) | 2013/12/07 | 5.2 |
| 241 | 0 | [Jamie Aspinall - Location History](http://vimeo.com/99571921) | 2014/06/30 | 22.0 |
| 2281 | 1 | [Matthew Ames - One Small Step on the Scale](http://vimeo.com/groups/quantifiedself/videos/72048184) | 2013/08/09 | 12.5 |
| 599 | 1 | [Vivienne Ming - Tracking my Son's Diabetes](http://vimeo.com/81272562) | 2013/12/07 | 13.0 |
| 2142 | 9 | [Gary Monk - Zen and the art of quantified self](http://vimeo.com/groups/quantifiedself/videos/83913668) | 2014/01/11 | 23.3 |
| n/a | n/a | [Paul LaFontaine - Stress Trigger Personal Survey](http://quantselflafont.com/2014/04/07/stress-trigger-personal-survey/) | 2014/04/07 | 7.5 |
| 790 | 1 | [David El Achkar - How Six Months of Tracking Everything Increased my Awareness](http://vimeo.com/78020552) | 2013/10/28 | 13.0 |
| 1842 | 19 | [Amy Robinson - QS Conference 2012 - Quantified Curiosity](http://vimeo.com/groups/quantifiedself/videos/52984751) | 2012/11/07 | 15.0 |
| 1008 | 4 | [Maggie Delano on ECG and Activity Tracking](http://vimeo.com/77972740) | 2013/10/28 | 15.5 |

<br>
We also came across a 'must see' [interview](http://fora.tv/2012/10/15/Wireds_Gary_Wolf__Kevin_Kelly_Talk_the_Quantified_Self) with the
founders of the original QS group in San Francisco, Gary Wolf and Kevin Kelly, recorded
at the [2012 Wired Health Conference](http://www.wiredhealthconference.com/). This gives a great introduction and overview of what the Quantified Self movement is all about.

To help curate the presentations, I set out to do some exploratory analytics on the various attributes that one can scrape from the web. I created
an [iPython](http://ipython.org/) notebook and added it to our [spikes](https://github.com/QuantifiedSTL/spikes/tree/master/QSBlogAnaltyics)
GitHub repo. I didn't get very far, but one fun little graph I pulled out is a _histogram of video durations_, shown below. I had in
mind doing some analytics on the tagging of the videos, for example, one could look at the most common or popular tags as a function of time.

<div align="center">
        <img src="../../../../../images/durationhistogram.svg"/>
</div>
