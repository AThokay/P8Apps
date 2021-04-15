Gadgetbridge
=============

For first time use you need to change watch name to Bangle.js.

Enter this in left hand side of Espruino IDE `NRF.setAdvertising({}, { name:"Bangle.js",connectable:true });`

This widget allows your P8 to communicate with the Gadgetbridge app on an Android phone.

Download the [latest Gadgetbridge for Android here](https://f-droid.org/packages/nodomain.freeyourgadget.gadgetbridge/).

This app supports:

* Displaying Notifications
* Song display and control
* Find My Phone / Find My P8

Notifications
-------------

By default a notification at the top of the screen is displayed. If you'd like a fullscreen notification
(which will involve leaving the current app) then install [Fullscreen Notifications](https://banglejs.com/apps/#notifyfs)


Song display and control
------------------------

When the Song Display notification is showing on the screen and a song is playing, you 
can swipe left or right on the screen to go to the next or previous song.


Find My Phone
-------------

Go to `Settings`, `App/Widget Settings`, `Gadgetbridge`, `Find Phone`, `On`

If in range and connected your phone should start ringing.


Find My P8
-------------

Onyour phone `Settings`, `App/Widget Settings`, `Gadgetbridge`, `Find Phone`, `On`

If in range and connected your phone should start ringing.
