#!/bin/sh

# http://superuser.com/questions/290656/combine-multiple-images-using-imagemagick
#cp -R /Volumes/Disain\'s\ Public\ Folder/MK-11/game/sprite/* source/sprite/.
#cp -R target/sprite/* public/data/img/sprite/.


# Sprites

rm -f public/data/images/sprites/*

for i in $(find source/images/sprites -mindepth 1 -maxdepth 1 -type d)
do
  montage $i/*.png -geometry +0+0 -tile x1 -filter box -resize 400%x400% ${i//source/public/data}.png
done


# Background images

rm -f public/data/images/backgrounds/*

for i in $(find source/images/backgrounds -mindepth 1 -maxdepth 1 -type f)
do
  convert ${i} -filter box -resize 400%x400% ${i//source/public/data}
done

# Tiles

rm -f public/data/images/tiles/*

for i in $(find source/images/tiles -mindepth 1 -maxdepth 1 -type d)
do
  montage $i/*.png -geometry +0+0 -tile 1x -filter box -resize 400%x400% ${i//source/public/data}.png
done

# Sounds

rm -f public/data/audio/music/*
rm -f public/data/audio/effects/*

cp source/audio/music/* public/data/audio/music/.
cp source/audio/effects/* public/data/audio/effects/. 

# Surprise

#cp public/data/images/backgrounds/background1.png public/data/images/backgrounds/background2.png
