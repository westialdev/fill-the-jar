Arduino y JS con Johnny 5
========================

Notas sobre la presentación.

* Bookmarks en recent/Middle-Christmas

* http://johnny-five.io/
* https://www.youtube.com/watch?v=2_r7UBBp8pE RaspberryPi Robot.

## Android como Webcam WiFi ##

* App Droidcam ya instalada. Encender y coger el IP, ejemplo 192.168.1.2.
* En PC lanzar cliente y coger el socket con VLC.

```
$ droidcam-cli -size=1280x720 192.168.1.2 4747

> Device /dev/video0 is 'Droidcam' @ platform:v4l2loopback_dc-000
> Opened /dev/video0, fd:3
> Audio loopback device not found.
> Is snd_aloop loaded?
> Client v1.6
> Video: /dev/video0
> connecting to 192.168.1.2:4747
```

Abrir VLC/Media/Open Capture Device/ y el socket que ha salido del comando de cliente, ejemplo `/dev/video0`.