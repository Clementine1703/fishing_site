FROM python:3.10.8-alpine

COPY requirements.txt /
RUN pip install -r /requirements.txt

COPY . /backend
WORKDIR /backend

RUN chmod +x ./gunicorn.sh
ENTRYPOINT [ "python3" ]
CMD [ "./backend.py" ]