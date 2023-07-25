#!/bin/bash

set -a
source config.env
set +a

echo "Deploying application to server"
rsync -avh --delete -e ssh $LOCAL_PATH $USER@$HOST:$REMOTE_PATH --delete