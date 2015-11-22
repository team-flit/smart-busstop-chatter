# Smart Busstop with Messaging
Smart Busstop with Messaging Features

# Demo

- [Receiver](http://busstop-chat.meteor.com)
- [Sender](http://busstop-chat.meteor.com/sender)

# How to run Raspberry Pi with Kisok Mode

1. Install chromium-browser for raspberry pi

  ```
  sudo apt-get install chromium-browser
  ```

1. Edit autostart script

  ```
  sudo nano /etc/xdg/lxsession/LXDE-pi/autostart
  ```

1. Add below script after ```@xscreensaver -no-splash```

  ```
  ...
  @xset s off
  @xset -dpms
  @xset s noblank

  @sed -i 's/"exited_cleanly": false/"exited_cleanly": true/' ~/.config/chromium/Default/Pr$
  @chromium-browser --noerrdialogs --kiosk http://busstop-chat.meteor.com
  ```
1. References
  - [Simplest Solution](https://www.danpurdy.co.uk/web-development/raspberry-pi-kiosk-screen-tutorial/)
  - [Advanced Solution](http://blogs.wcode.org/2013/09/howto-boot-your-raspberry-pi-into-a-fullscreen-browser-kiosk/)
