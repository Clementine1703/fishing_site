FROM --platform=linux/amd64 python:3.10.8-alpine as build

COPY requirements.txt /
RUN pip install -r /requirements.txt

COPY . /backend
WORKDIR /backend

RUN chmod +x ./gunicorn.sh
ENTRYPOINT [ "./gunicorn.sh" ]
# CMD [ "./backend.py" ]