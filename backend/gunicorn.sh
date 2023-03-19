#!/bin/sh
gunicorn "backend:app" -w 1 -b 0.0.0.0:80