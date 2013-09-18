#!/bin/sh

# Tiles

# http://superuser.com/questions/290656/combine-multiple-images-using-imagemagick
#cp -R /Volumes/Disain\'s\ Public\ Folder/MK-11/projects/game/sprite/* source/sprite/.
#cp -R target/sprite/* public/data/img/sprite/.

#for i in $(find source/images/sprites -mindepth 1 -maxdepth 1 -type d)
#do
#  montage $i/*.png -geometry +0+0 -tile x1 -filter box -resize 400%x400% ${i//source/public/data}.png
#done


# Sprites

cp -R /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/images/sprites/* source/images/sprites/.

rm -f public/data/images/sprites/*

for i in $(find source/images/sprites -mindepth 1 -maxdepth 1 -type d)
do
  
  for j in $(find $i -name "*.psd" -mindepth 1 -maxdepth 1 -type f)
  do
    file=$(echo $j | cut -d'/' -f5 | cut -d'.' -f1)
    convert $j -set dispose Background -coalesce PNG32:tmp-item-$file.png
    rm tmp-item-$file-0.png 
    rm tmp-item-$file-1.png
    convert tmp-item-*.png +append tmp-row-$file.png
    rm tmp-item-*.png
  done
  
  targetfile=$(echo $i | cut -d'/' -f4)
  convert tmp-row-*.png -background None -append -extent 64x -filter box -resize 400%x400% public/data/images/sprites/$targetfile.png
  rm tmp-row-*.png

done


# Background images

cp -R /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/images/backgrounds/* source/images/backgrounds/.

rm -f public/data/images/backgrounds/*

for i in $(find source/images/backgrounds -mindepth 1 -maxdepth 1 -type f)
do
  convert ${i} -filter box -resize 400%x400% +level-colors tan3,tan1 ${i//source/public/data}
done


# Tiles

rm /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/images/tiles/*.png
cp -R /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/images/tiles/* source/images/tiles/.

rm -f public/data/images/tiles/*

for i in $(find source/images/tiles -mindepth 1 -maxdepth 1 -type d)
do
  montage $i/*.png -geometry +0+0 -tile 1x -filter box -resize 400%x400% ${i//source/public/data}.png
done

cp public/data/images/tiles/*.png /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/images/tiles/.

# Sounds

rm -f public/data/audio/music/*
rm -f public/data/audio/effects/*

cp source/audio/music/* public/data/audio/music/.
cp source/audio/effects/* public/data/audio/effects/. 


# Hide bg

#cp public/data/images/backgrounds/background1.png public/data/images/backgrounds/background2.png

# Level

cp /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/levels/*.tmx public/data/levels/.