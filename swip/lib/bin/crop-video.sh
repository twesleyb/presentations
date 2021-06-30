#!/usr/bin/env bash

# title: crop-video.sh
# author: twab
# description: crop treadscan video with ffmpeg
# from: https://askubuntu.com/a/399028

INPUT="~/projects/presentations/lib/images/treadscan.mp4"
ffmpeg -i "$INPUT" -ss 00:00:02 -t 00:01:32 -vcodec copy -acodec copy splice.mp4
