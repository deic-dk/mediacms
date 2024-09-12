#!/bin/bash
set -e

# Use h264_nvenc instead of libx264, enable CUDA
#sed -i 's|libx264|h264_nvenc|' /home/mediacms.io/mediacms/files/helpers.py
#sed -i 's|"-y",|"-y", "-hwaccel", "cuda", "-hwaccel_output_format", "cuda",|' /home/mediacms.io/mediacms/files/helpers.py

mv files/helpers.py files/helpers.py.orig
cp files/helpers-hvenc.py files/helpers.py

