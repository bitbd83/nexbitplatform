#!/bin/sh

export REACT_APP_GIT_SHA=$(git rev-parse --short HEAD)
export BUILD_DOMAIN=${BUILD_DOMAIN:-$(cat .domains)}


yarn build
