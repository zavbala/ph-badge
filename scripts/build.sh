#!/bin/bash

VERSION="0.0.0"

cd ./packages

suffix() {
    if [ "$1" == "vue" ]; then
        echo ".vue"
    elif [ "$1" == "svelte" ]; then
        echo ".svelte"
    else
        echo ""
    fi
}

for package_dir in *; do
    echo "Building $package_dir"

    if [ -d "$package_dir" ]; then
        cd $package_dir 
  
        cat <<EOF > README.md
# @ph-badge/${package_dir}

This package is generated, check the docs for more info.

https://ph-badge.vercel.app/docs
EOF

        cat <<EOF > package.json
{
    "name": "@ph-badge/${package_dir}",
    "version": "$VERSION",
    "author": "Jeremy Zabala",
    "repository": {
        "type": "git",
        "url": "https://github.com/zavbala/ph-badge"
    },
    "description": "Use the PH Badge in your ${package_dir} app.",
    "main": "dist/index.js",
    "types": "dist/index.d.ts",
    "files": [
        "README.md",
        "dist"
    ]
}
EOF

        mv "src" "dist"
        cd "dist"

        with_suffix=$(suffix $package_dir)

        cat <<EOF > index.js
import Component from './Component${with_suffix}';
export default Component;
EOF

        cd ..
        cd ..
    fi
done


