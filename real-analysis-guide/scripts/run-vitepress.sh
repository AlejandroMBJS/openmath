#!/bin/sh
set -eu

heap_mb="${DOCS_NODE_HEAP_MB:-8192}"
heap_flag="--max-old-space-size=${heap_mb}"

case " ${NODE_OPTIONS:-} " in
  *" ${heap_flag} "*) ;;
  *)
    if [ -n "${NODE_OPTIONS:-}" ]; then
      export NODE_OPTIONS="${NODE_OPTIONS} ${heap_flag}"
    else
      export NODE_OPTIONS="${heap_flag}"
    fi
    ;;
esac

exec npx vitepress "$@"
