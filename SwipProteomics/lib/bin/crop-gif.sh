#!/usr/bin/env bash

# title: crop-gif.sh
# author: twab
# description: crop konigsberg gif with imagemagik
# from: https://stackoverflow.com/a/14036766

# works but cache exhausted!
#convert konigsberg.gif -coalesce -repage 0x0 -crop 640x477+0+81 +repage output.gif

## WORKS!
# from: https://stackoverflow.com/a/19966257
# --crop x1,y1-x2,y2
gifsicle --crop 0,81-640,559 --output out.gif konigsberg.gif
