This project is really is very simple. It's intention is to identify how different Angular2 is from Angular1. 
The code is very Angular1 like, but uses decorators. 
There is no use of RxJS or INPUT and OUTPUT at this point.

Added observable ```files$```, that the tab component subscribes to.
Pushing new files into the FileStore dataStore.files property every second
The odd thing is that the observer is update the _filesObserver,but it's in no way connected to the dataStore.files and still updates the UI