#!/bin/sh
gunicorn --chdir backend backend:backend -w 2 --threads 2 -b 0.0.0.0:80