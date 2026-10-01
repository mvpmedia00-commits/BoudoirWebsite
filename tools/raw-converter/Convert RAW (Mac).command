#!/bin/bash
# MVP MEDIA RAW to JPEG converter: double-click to start.
cd "$(dirname "$0")"
python3 mvp_raw_convert.py "$@"
read -n 1 -s -r -p "Press any key to close."
