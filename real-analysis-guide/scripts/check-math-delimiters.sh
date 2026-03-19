#!/bin/sh
set -eu

if rg -n '`[^`]*\\(mathbb|mathcal|subseteq|sup|inf|sqrt|varepsilon|max|min|le|ge|in|to|lambda|ell)[^`]*`' docs -g '*.md'; then
  echo
  echo "Found LaTeX-like math inside backticks. Replace it with \$...\$ or \$\$...\$\$."
  exit 1
fi

echo "No LaTeX-like math found inside backticks."
