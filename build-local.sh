#!/bin/sh


# Sprites

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
  convert tmp-row-*.png -background None -append -extent 128x -filter box -resize 400%x400% public/data/images/sprites/$targetfile.png
  rm tmp-row-*.png

done


# Background images

rm -f public/data/images/backgrounds/*

for i in $(find source/images/backgrounds -mindepth 1 -maxdepth 1 -type f)
do
    convert ${i} -filter box -resize 400%x400% ${i//source/public/data}
done

convert public/data/images/backgrounds/background1.png +level-colors sienna3,tan1 public/data/images/backgrounds/background1.png
convert public/data/images/backgrounds/background2.png +level-colors sienna3,tan1 public/data/images/backgrounds/background2.png

convert public/data/images/backgrounds/background3.png +level-colors 'rgb(30,30,50)','rgb(80,80,100)' public/data/images/backgrounds/background3.png

# Tiles

rm -f public/data/images/tiles/*

for i in $(find source/images/tiles -mindepth 1 -maxdepth 1 -type d)
do
  convert $i/*.png -background None -append -filter box -resize 400%x400% ${i//source/public/data}.png
done


# Sounds

rm -f public/data/audio/music/*
rm -f public/data/audio/effects/*

cp source/audio/music/* public/data/audio/music/.
cp source/audio/effects/* public/data/audio/effects/. 

# Fonts

rm -f public/data/fonts/*

for i in $(find source/fonts -mindepth 1 -maxdepth 1 -type f)
do
  convert $i -background None -append -filter box -resize 400%x400% -negate -channel Alpha -evaluate Divide 3 ${i//source/public/data}
#  convert $i +gravity -crop 8x8  ${i//source/public/data}-%03d.png
#  convert ${i//source/public/data}-*.png -extent 9x -background None +append -filter box -resize 400%x400% ${i//source/public/data}
#  rm ${i//source/public/data}-*.png
done

echo "Build completed"