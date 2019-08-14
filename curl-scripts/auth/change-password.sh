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

# TOKEN=BAhJIiVjYzNlNzhjYjA1YWRhNDEyODRjMDA4YjM4Njk3ZGIzNgY6BkVG--a0e9730147eec92979a30c29fad4471e27a82b6c OLD='2' NEW='3' sh curl-scripts/auth/change-password.sh
