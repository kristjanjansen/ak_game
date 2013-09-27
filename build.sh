#!/bin/sh


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
  #  convert ${i} -filter box -resize 400%x400% ${i//source/public/data}
    convert ${i} -filter box -resize 400%x400% +level-colors sienna3,tan1 ${i//source/public/data}
  #  convert ${i} -filter box -resize 400%x400% +level-colors steelblue,skyblue ${i//source/public/data}
  #  convert ${i} -filter box -resize 400%x400%  +level-colors indigo,darkorchid3 ${i//source/public/data}
done


# Tiles

#rm /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/images/tiles/*.png
cp -R /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/images/tiles/* source/images/tiles/.

rm -f public/data/images/tiles/*

for i in $(find source/images/tiles -mindepth 1 -maxdepth 1 -type d)
do
#  convert $i/*.png -background None -append -filter box -resize 400%x400% ${i//source/public/data}.png
  convert $i/*.png -background None -append -filter box -resize 400%x400% +level-colors black,tan3 ${i//source/public/data}.png
done

cp public/data/images/tiles/*.png /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/images/tiles/.

# Sounds

rm -f public/data/audio/music/*
rm -f public/data/audio/effects/*

cp source/audio/music/* public/data/audio/music/.
cp source/audio/effects/* public/data/audio/effects/. 


# Level

cp /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/levels/*.tmx public/data/levels/.

# Fonts

cp /Volumes/Disain\'s\ Public\ Folder/MK-11/projektid/game/source/fonts/*.png source/fonts/.

rm -f public/data/fonts/*

for i in $(find source/fonts -mindepth 1 -maxdepth 1 -type f)
do
  convert $i -background None -append -filter box -resize 400%x400% ${i//source/public/data}
done

echo "Build completed"