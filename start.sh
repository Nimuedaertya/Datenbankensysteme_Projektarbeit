#!/bin/bash

python3 fetch_data.py
python3 dataToVisualConverter.py

echo "Done"
rm *.txt


