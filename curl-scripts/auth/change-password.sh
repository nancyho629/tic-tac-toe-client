# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords":{
      "old": "'"${OLD}"'",
      "new": "'"${NEW}"'"
    }
  }'

echo

# TOKEN=BAhJIiU0OWYyYzY3OGJjZjUwYjdjOTAzNzMxMTkwOTY3MDg0NwY6BkVG--a27972aedc57064b6c633efb31cad857756dee54 OLD='3' NEW='4' sh curl-scripts/auth/change-password.sh
