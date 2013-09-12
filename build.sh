#!/bin/sh
# http://superuser.com/questions/290656/combine-multiple-images-using-imagemagick

#cp -R /Volumes/Disain\'s\ Public\ Folder/MK-11/game/sprite/* source/sprite/.

for i in $(find source/sprite -mindepth 1 -maxdepth 1 -type d)
do
  montage $i/*.png -geometry +0+0 -tile x1 -filter box -resize 800%x800% ${i//source/target}.png
done

#montage source/tiles/*.png -geometry +0+0 -tile 1x -filter box -resize 400%x400% target/tiles/tiles.png 

cp -R target/sprite/* public/data/img/sprite/.