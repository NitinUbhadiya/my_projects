#!/bin/bash

directory="./src" # replace with your directory path

file_array=() # create an empty array to store file names

for file in "$directory"/*; do
  if [ -f "$file" ]; then # check if file is a regular file
    # name = '"' + ("$(basename "$file")") + '"'
    file_array+=("$(basename "$file")") # add the file name to the array
    file_array+=$name # add the file name to the array
  fi
done

echo "${file_array[@]}" # print the array of file names
