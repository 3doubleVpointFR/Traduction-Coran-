#!/bin/bash
SURAH=113
VERSES=5
PORT=3001

for v in $(seq 1 $VERSES); do
  echo "=== Launching verse $v ==="
  response=$(curl -s -X POST http://localhost:$PORT/api/analyze/verse -H "Content-Type: application/json" -d "{\"surah_id\": $SURAH, \"verse_num\": $v}")
  job_id=$(echo "$response" | sed -n 's/.*"job_id":\([0-9]*\).*/\1/p')
  echo "  Job ID: $job_id"

  while true; do
    status_json=$(curl -s http://localhost:$PORT/api/jobs/$job_id)
    status=$(echo "$status_json" | sed -n 's/.*"status":"\([^"]*\)".*/\1/p')
    step=$(echo "$status_json" | sed -n 's/.*"step":"\([^"]*\)".*/\1/p')
    echo "  > $status ($step)"
    if [ "$status" = "done" ] || [ "$status" = "failed" ]; then
      break
    fi
    sleep 15
  done
  echo "  Verse $v: $status"
  echo ""
done
echo "=== All done ==="
