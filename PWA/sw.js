const sw = new ServiceWorker();

//Same origin as the document that registers the Service Worker
sw.scriptURL();

//@state : installing ,installed, activating, activated, redundant
sw.state();

/*Event
An EventListener property called 
whenever an event of type statechange is fired;
it is basically fired anytime the*/

sw.onstatechange();
