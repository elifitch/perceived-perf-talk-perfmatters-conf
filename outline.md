* Title
* Introduction - me; Who me is, what I do, my site
* When we're talking about web performance what we're really talking about is time
* But time is a funny thing, 1 minute of objective time can feel like a very different amount of subjective time (perc time) depending on situation
* We optimize for objective time; we optimize for seconds, kilobytes, and requests; and hope that this makes people satisified, without necessarily directly thinking of people
* [Chart of 100ms, 1000ms, 10000ms impact on attention] We hope that by optimizing for objective time, we're having an impact on percieved time. We optimize for 
* Sometimes we work in environments where we can't control everything, we can't make our app substantially faster. Or we have to match a competitors speed but we're limited in how close we can get.
* By better understanding how humans percieve time, we can help our apps feel faster withough making them physically faster.
* Rule 1: explained waits feel shorter than unexplained waits. Give people an idea as to what the app is doing, otherwise it'll feel broken.
* Rule 2: certain waits feel shorter than uncertain waits. Progress bars, estimations of time.
* Researchers at Carnegie Mellon showed that animated progress bars are better (http://www.chrisharrison.net/projects/progressbars2/ProgressBarsHarrison.pdf)
* Rule 3: active waits feel shorter than passive waits. Airline story from smashing mag. Great example is slack, using a complex animation and quotes to read as the app boots.
* Active vs Passive goes further. "Active" just means that the user is engaged while waiting. We can use this to our advantage by employing predictive design.
* What if, based on current user actions, we could predict their next action, and preload it so it is ready the moment the user That would turn the entire wait into an "active" wait. But instead of active in that they're watching an animation, or reading a quote, its active in that the user is engaged in whatever they were doing.
* Essentially this would mean no perceived wait at all.
* 
* 
* 
* 

Notes:
* An idle tab is a terrible thing to waste. Always be thinking about what can be loaded in the background.
* Research on queuing has shown that, on average, people overestimate how long they’ve waited in a line by about 36 percent. http://www.nytimes.com/2012/08/19/opinion/sunday/why-waiting-in-line-is-torture.html?_r=0

## Structure issues
* Objective vs subjective -> optimize for objective -> this bad, focus on subjective -> straight into waits that feel longer
* Objective vs subjective -> optimize for objective -> this bad, focus on subjective -> How we perceive time generally (active vs passive) -> how we can use this to our advantage -> talk about unexepcted, uncertain, unexplained in terms of how to make passive waits less painful -> real trick is in stretching active waits BOOOOOOOOM THIS IS THE PATTERN

## Structure issues 2
* Right now: Active vs passive -> bunch of examples like waiting for a cab, or waiting in traffic -> then what makes (passive) waits feel longer; 4 uns -> then back to active vs. passive with the airport story

## What's my story
* At the end of the day, waiting for things sucks, especially unoccupied waiting
* Figure out new ways to occupy people or queueng up the next thing while folks are already occupied

## Feedback from ST
* Need to go back through and firm up the explain portion. Remove reticulating splines, that's more about occupy than explain.
* Generally a lot more demos and stuff
* ~Progress bar demo~
* Be more explicit about sources
* Mention jank? Maybe qualify in the beginning this isn't about render perf
* Mention how to measure perceived performance. Measure it with direct metrics, like bounce rate.
* Add link and shits to final slide
* brighten footer on hello slide

## Feedback from CSSDevConf
* Mention mobile
* talk about fake progress bars
* stress that you don't communicate with server on keydown, just load assets for next page; predictive design is for incoming, not so much outgoing data


## Bio
Gregor Adams is a self-taught web developer with a strong focus on CSS. He works as a web-developer and front-end architect at CodeFights in San Francisco. Gregor is very active on CodePen where he shows a lot of abstract CSS experiments. While he has no special focus when is comes to CSS his most impressive works are related to 3d shapes or fractals. Most of his works are pure CSS. Even when he needs interaction in an experiment his first pick is to try to implement it in CSS. Gregor speaks at conferences and meetups with a strong urge to teach or help other developers. He pushes his own limits every day, staying up to date with the latest specs, finding fixes for browser quirks or trying to do the impossible.

Eli Fitch is a front end developer with a passion for web performance, animation and all things 3D. He leads a team of amazing engineers making a WebGL event diagramming app at Social Tables, a startup in his hometown of Washington, DC.  He also organizes the DC CodePen Meetup, and dabbles in design, 3D art & game development.




