#!/bin/sh


# Sprites

cp -R /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/images/sprites/* source/images/sprites/.

# Background images

cp -R /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/images/backgrounds/* source/images/backgrounds/.

# Tiles

cp -R /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/images/tiles/* source/images/tiles/.

# Level

cp /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/levels/*.tmx public/data/levels/.

# Fonts

cp /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/fonts/*.png source/fonts/.

# Real build

./build-local.sh

cp public/data/images/tiles/*.png /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/images/tiles/.

cp -R /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/audio/effects/*.mp3 source/audio/effects/.
cp -R /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/audio/music/*.mp3 source/audio/music/.
