#!/bin/bash

# Usage: ./new_post.sh "My New Blog Title"

if [ -z "$1" ]; then
  echo "Error: Please provide a title."
  echo "Usage: ./new_post.sh \"My Blog Title\""
  exit 1
fi

# Get repo root
REPO_ROOT=$(git rev-parse --show-toplevel 2>/dev/null)
if [ $? -ne 0 ]; then
  echo "Error: Not inside a Git repository."
  exit 1
fi

# Format title and filename
TITLE="$1"
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | tr -cd '[:alnum:] \n\r' | tr ' ' '-')
DATE=$(date +%Y-%m-%d)
FILENAME="${DATE}-${SLUG}.md"
POST_DIR="$REPO_ROOT/content/posts"
FILEPATH="$POST_DIR/$FILENAME"

# Create directory if needed
mkdir -p "$POST_DIR"

# Write markdown file with default frontmatter
cat <<EOF > "$FILEPATH"
---
title: "$TITLE"
date: "$DATE"
tags: [""]
standalone: false
---

Your content goes here...
EOF

echo "✅ Created: $FILEPATH"
